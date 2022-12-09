package com.osrc.osaas.oauth.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.AuthenticationDetailsSource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;
import org.springframework.security.oauth2.core.http.converter.OAuth2AccessTokenResponseHttpMessageConverter;
import org.springframework.security.oauth2.core.http.converter.OAuth2ErrorHttpMessageConverter;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2AccessTokenAuthenticationToken;
import org.springframework.security.oauth2.server.authorization.web.authentication.DelegatingAuthenticationConverter;
import org.springframework.security.oauth2.server.authorization.web.authentication.OAuth2AuthorizationCodeAuthenticationConverter;
import org.springframework.security.oauth2.server.authorization.web.authentication.OAuth2ClientCredentialsAuthenticationConverter;
import org.springframework.security.oauth2.server.authorization.web.authentication.OAuth2RefreshTokenAuthenticationConverter;
import org.springframework.security.web.authentication.AuthenticationConverter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Map;

/**
 * @author tom
 * @date 2022/11/30 16:25
 */
@RestController
@Tag(name = "签发刷新TOKEN")
public class OAuth2TokenEndpoint {

	private static final Logger logger = LoggerFactory.getLogger(OAuth2TokenEndpoint.class);

	/**
	 * The default endpoint {@code URI} for access token requests.
	 */
	private static final String DEFAULT_TOKEN_ENDPOINT_URI = "/oauth2/token";

	private static final String DEFAULT_ERROR_URI = "https://datatracker.ietf.org/doc/html/rfc6749#section-5.2";
	private final HttpMessageConverter<OAuth2AccessTokenResponse> accessTokenHttpResponseConverter =
			new OAuth2AccessTokenResponseHttpMessageConverter();
	private final HttpMessageConverter<OAuth2Error> errorHttpResponseConverter =
			new OAuth2ErrorHttpMessageConverter();
	private AuthenticationDetailsSource<HttpServletRequest, ?> authenticationDetailsSource =
			new WebAuthenticationDetailsSource();
	private AuthenticationConverter authenticationConverter;
	private AuthenticationSuccessHandler authenticationSuccessHandler = this::sendAccessTokenResponse;
	private AuthenticationFailureHandler authenticationFailureHandler = this::sendErrorResponse;

	public OAuth2TokenEndpoint() {
		this.authenticationConverter = new DelegatingAuthenticationConverter(
				Arrays.asList(
						new OAuth2AuthorizationCodeAuthenticationConverter(),
						new OAuth2RefreshTokenAuthenticationConverter(),
						new OAuth2ClientCredentialsAuthenticationConverter()));
	}

	@Autowired
	private HttpServletRequest request;

	@Autowired
	private HttpServletResponse response;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping(path = "/oauth2/token")
	@Operation(summary = "签发TOKEN 刷新TOKEN")
	public void oauth2Token(
		@RequestParam(value = "grant_type") String grantType,
		@RequestParam(value = "username") String username,
		@RequestParam(value = "user_id") String userId,
		@RequestParam(value = "scope") String scope,
		@RequestParam(value = "live_time") String liveTime,
		@RequestParam(value = "refresh_token") String refreshToken
	) throws ServletException, IOException {
		try {
			String[] grantTypes = request.getParameterValues(OAuth2ParameterNames.GRANT_TYPE);
			if (grantTypes == null || grantTypes.length != 1) {
				throwError(OAuth2ErrorCodes.INVALID_REQUEST, OAuth2ParameterNames.GRANT_TYPE);
			}

			Authentication authorizationGrantAuthentication = this.authenticationConverter.convert(request);
			if (authorizationGrantAuthentication == null) {
				throwError(OAuth2ErrorCodes.UNSUPPORTED_GRANT_TYPE, OAuth2ParameterNames.GRANT_TYPE);
			}
			if (authorizationGrantAuthentication instanceof AbstractAuthenticationToken) {
				((AbstractAuthenticationToken) authorizationGrantAuthentication)
						.setDetails(this.authenticationDetailsSource.buildDetails(request));
			}

			OAuth2AccessTokenAuthenticationToken accessTokenAuthentication =
					(OAuth2AccessTokenAuthenticationToken) authenticationManager.authenticate(authorizationGrantAuthentication);
			this.authenticationSuccessHandler.onAuthenticationSuccess(request, response, accessTokenAuthentication);
		} catch (OAuth2AuthenticationException ex) {
			SecurityContextHolder.clearContext();
			if (logger.isTraceEnabled()) {
				logger.trace("Token request failed: {}", ex.getError(), ex);
			}
			this.authenticationFailureHandler.onAuthenticationFailure(request, response, ex);
		}
	}

	private void sendAccessTokenResponse(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException {

		OAuth2AccessTokenAuthenticationToken accessTokenAuthentication =
				(OAuth2AccessTokenAuthenticationToken) authentication;

		OAuth2AccessToken accessToken = accessTokenAuthentication.getAccessToken();
		OAuth2RefreshToken refreshToken = accessTokenAuthentication.getRefreshToken();
		Map<String, Object> additionalParameters = accessTokenAuthentication.getAdditionalParameters();

		OAuth2AccessTokenResponse.Builder builder =
				OAuth2AccessTokenResponse.withToken(accessToken.getTokenValue())
						.tokenType(accessToken.getTokenType())
						.scopes(accessToken.getScopes());
		if (accessToken.getIssuedAt() != null && accessToken.getExpiresAt() != null) {
			builder.expiresIn(ChronoUnit.SECONDS.between(accessToken.getIssuedAt(), accessToken.getExpiresAt()));
		}
		if (refreshToken != null) {
			builder.refreshToken(refreshToken.getTokenValue());
		}
		if (!CollectionUtils.isEmpty(additionalParameters)) {
			builder.additionalParameters(additionalParameters);
		}
		OAuth2AccessTokenResponse accessTokenResponse = builder.build();
		ServletServerHttpResponse httpResponse = new ServletServerHttpResponse(response);
		this.accessTokenHttpResponseConverter.write(accessTokenResponse, null, httpResponse);
	}

	private void sendErrorResponse(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException {

		OAuth2Error error = ((OAuth2AuthenticationException) exception).getError();
		ServletServerHttpResponse httpResponse = new ServletServerHttpResponse(response);
		httpResponse.setStatusCode(HttpStatus.BAD_REQUEST);
		this.errorHttpResponseConverter.write(error, null, httpResponse);
	}

	private static void throwError(String errorCode, String parameterName) {
		OAuth2Error error = new OAuth2Error(errorCode, "OAuth 2.0 Parameter: " + parameterName, DEFAULT_ERROR_URI);
		throw new OAuth2AuthenticationException(error);
	}
}
