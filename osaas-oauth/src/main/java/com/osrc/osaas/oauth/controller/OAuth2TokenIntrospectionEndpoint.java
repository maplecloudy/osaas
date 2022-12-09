package com.osrc.osaas.oauth.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2ErrorCodes;
import org.springframework.security.oauth2.core.OAuth2TokenIntrospection;
import org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;
import org.springframework.security.oauth2.core.http.converter.OAuth2ErrorHttpMessageConverter;
import org.springframework.security.oauth2.core.http.converter.OAuth2TokenIntrospectionHttpMessageConverter;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2TokenIntrospectionAuthenticationToken;
import org.springframework.security.web.authentication.AuthenticationConverter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author tom
 * @date 2022/11/30 16:25
 */
@RestController
public class OAuth2TokenIntrospectionEndpoint {

	private static final Logger logger = LoggerFactory.getLogger(OAuth2TokenIntrospectionEndpoint.class);

	/**
	 * The default endpoint {@code URI} for token introspection requests.
	 */
	private static final String DEFAULT_TOKEN_INTROSPECTION_ENDPOINT_URI = "/oauth2/introspect";


	private AuthenticationConverter authenticationConverter =
		new DefaultTokenIntrospectionAuthenticationConverter();
	private final HttpMessageConverter<OAuth2TokenIntrospection> tokenIntrospectionHttpResponseConverter =
		new OAuth2TokenIntrospectionHttpMessageConverter();
	private final HttpMessageConverter<OAuth2Error> errorHttpResponseConverter = new OAuth2ErrorHttpMessageConverter();
	private AuthenticationSuccessHandler authenticationSuccessHandler = this::sendIntrospectionResponse;
	private AuthenticationFailureHandler authenticationFailureHandler = this::sendErrorResponse;

	public OAuth2TokenIntrospectionEndpoint() {

	}

	@Autowired
	private HttpServletRequest request;

	@Autowired
	private HttpServletResponse response;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping(path = "/oauth2/introspect")
	@Operation(summary = "校验TOKEN")
	public void oauth2Token(
		@RequestParam(value = "token") String token
	) throws ServletException, IOException {
		try {
			Authentication tokenIntrospectionAuthentication = this.authenticationConverter.convert(request);
			Authentication tokenIntrospectionAuthenticationResult =
				this.authenticationManager.authenticate(tokenIntrospectionAuthentication);
			this.authenticationSuccessHandler.onAuthenticationSuccess(request, response, tokenIntrospectionAuthenticationResult);
		} catch (OAuth2AuthenticationException ex) {
			SecurityContextHolder.clearContext();
			this.authenticationFailureHandler.onAuthenticationFailure(request, response, ex);
		}
	}


	private void sendIntrospectionResponse(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) throws IOException {

		OAuth2TokenIntrospectionAuthenticationToken tokenIntrospectionAuthentication =
			(OAuth2TokenIntrospectionAuthenticationToken) authentication;
		OAuth2TokenIntrospection tokenClaims = tokenIntrospectionAuthentication.getTokenClaims();
		ServletServerHttpResponse httpResponse = new ServletServerHttpResponse(response);
		this.tokenIntrospectionHttpResponseConverter.write(tokenClaims, null, httpResponse);
	}

	private void sendErrorResponse(HttpServletRequest request, HttpServletResponse response,
		AuthenticationException exception) throws IOException {
		OAuth2Error error = ((OAuth2AuthenticationException) exception).getError();
		ServletServerHttpResponse httpResponse = new ServletServerHttpResponse(response);
		httpResponse.setStatusCode(HttpStatus.BAD_REQUEST);
		this.errorHttpResponseConverter.write(error, null, httpResponse);
	}

	private static void throwError(String errorCode, String parameterName) {
		OAuth2Error error = new OAuth2Error(errorCode, "OAuth 2.0 Token Introspection Parameter: " + parameterName,
			"https://datatracker.ietf.org/doc/html/rfc7662#section-2.1");
		throw new OAuth2AuthenticationException(error);
	}

	private static class DefaultTokenIntrospectionAuthenticationConverter
		implements AuthenticationConverter {

		@Override
		public Authentication convert(HttpServletRequest request) {
			Authentication clientPrincipal = SecurityContextHolder.getContext().getAuthentication();

			MultiValueMap<String, String> parameters = getParameters(request);

			// token (REQUIRED)
			String token = parameters.getFirst(OAuth2ParameterNames.TOKEN);
			if (!StringUtils.hasText(token) ||
				parameters.get(OAuth2ParameterNames.TOKEN).size() != 1) {
				throwError(OAuth2ErrorCodes.INVALID_REQUEST, OAuth2ParameterNames.TOKEN);
			}

			// token_type_hint (OPTIONAL)
			String tokenTypeHint = parameters.getFirst(OAuth2ParameterNames.TOKEN_TYPE_HINT);
			if (StringUtils.hasText(tokenTypeHint) &&
				parameters.get(OAuth2ParameterNames.TOKEN_TYPE_HINT).size() != 1) {
				throwError(OAuth2ErrorCodes.INVALID_REQUEST, OAuth2ParameterNames.TOKEN_TYPE_HINT);
			}

			Map<String, Object> additionalParameters = new HashMap<>();
			parameters.forEach((key, value) -> {
				if (!key.equals(OAuth2ParameterNames.TOKEN) &&
					!key.equals(OAuth2ParameterNames.TOKEN_TYPE_HINT)) {
					additionalParameters.put(key, value.get(0));
				}
			});

			return new OAuth2TokenIntrospectionAuthenticationToken(
				token, clientPrincipal, tokenTypeHint, additionalParameters);
		}

	}

	static MultiValueMap<String, String> getParameters(HttpServletRequest request) {
		Map<String, String[]> parameterMap = request.getParameterMap();
		MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>(parameterMap.size());
		parameterMap.forEach((key, values) -> {
			if (values.length > 0) {
				for (String value : values) {
					parameters.add(key, value);
				}
			}
		});
		return parameters;
	}
}
