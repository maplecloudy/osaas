package com.osrc.osaas.oauth.config;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.server.authorization.*;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2AccessTokenAuthenticationToken;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2ClientAuthenticationToken;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2ClientCredentialsAuthenticationToken;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.context.ProviderContextHolder;
import org.springframework.security.oauth2.server.authorization.token.*;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;


import java.security.Principal;

import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Set;

/**
 * 自定义客户端认证方式 ClientCredentials 时的认证提供器
 *
 * @author tom
 * @date 2022/5/9 10:28
 */
public class CustomOauth2ClientCredentialsAuthenticationProvider
    implements AuthenticationProvider {

  private static final String ERROR_URI = "https://datatracker.ietf.org/doc/html/rfc6749#section-5.2";
  private final OAuth2AuthorizationService authorizationService;
  private final OAuth2TokenGenerator<? extends OAuth2Token> tokenGenerator;
  private final OAuth2TokenGenerator<? extends OAuth2Token> refreshTokenGenerator;

  /**
   * Constructs an {@code CustomOauth2ClientCredentialsAuthenticationProvider} using the provided parameters.
   *
   * @param authorizationService the authorization service
   * @param tokenGenerator       the token generator
   * @param oAuth2RefreshTokenGenerator
   * @since 0.2.3
   */
  public CustomOauth2ClientCredentialsAuthenticationProvider(
      OAuth2AuthorizationService authorizationService,
      OAuth2TokenGenerator<? extends OAuth2Token> tokenGenerator,
      OAuth2RefreshTokenGenerator oAuth2RefreshTokenGenerator) {
    Assert.notNull(authorizationService, "authorizationService cannot be null");
    Assert.notNull(tokenGenerator, "tokenGenerator cannot be null");
    this.authorizationService = authorizationService;
    this.tokenGenerator = tokenGenerator;
    this.refreshTokenGenerator = oAuth2RefreshTokenGenerator;
  }

  @Override
  public Authentication authenticate(Authentication authentication)
      throws AuthenticationException {
    OAuth2ClientCredentialsAuthenticationToken clientCredentialsAuthentication = (OAuth2ClientCredentialsAuthenticationToken) authentication;

    OAuth2ClientAuthenticationToken clientPrincipal = getAuthenticatedClientElseThrowInvalidClient(
        clientCredentialsAuthentication);
    RegisteredClient registeredClient = clientPrincipal.getRegisteredClient();

    if (!registeredClient.getAuthorizationGrantTypes()
        .contains(AuthorizationGrantType.CLIENT_CREDENTIALS)) {
      throw new OAuth2AuthenticationException(
          OAuth2ErrorCodes.UNAUTHORIZED_CLIENT);
    }

    Set<String> authorizedScopes = registeredClient.getScopes();
    if (!CollectionUtils.isEmpty(clientCredentialsAuthentication.getScopes())) {
      for (String requestedScope : clientCredentialsAuthentication.getScopes()) {
        if (!registeredClient.getScopes().contains(requestedScope)) {
          throw new OAuth2AuthenticationException(
              OAuth2ErrorCodes.INVALID_SCOPE);
        }
      }
      authorizedScopes = new LinkedHashSet<>(
          clientCredentialsAuthentication.getScopes());
    }

    // @formatter:off
    DefaultOAuth2TokenContext.Builder tokenContextBuilder = DefaultOAuth2TokenContext.builder()
        .registeredClient(registeredClient).principal(clientPrincipal)
        .providerContext(ProviderContextHolder.getProviderContext())
        .authorizedScopes(authorizedScopes)
        .tokenType(OAuth2TokenType.ACCESS_TOKEN)
        .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
        .authorizationGrant(clientCredentialsAuthentication);
    // @formatter:on
    OAuth2TokenContext accessTokenContext = tokenContextBuilder.build();
    OAuth2Token generatedAccessToken = this.tokenGenerator.generate(
        accessTokenContext);
    if (generatedAccessToken == null) {
      OAuth2Error error = new OAuth2Error(OAuth2ErrorCodes.SERVER_ERROR,
          "The token generator failed to generate the access token.",
          ERROR_URI);
      throw new OAuth2AuthenticationException(error);
    }
    OAuth2AccessToken accessToken = new OAuth2AccessToken(
        OAuth2AccessToken.TokenType.BEARER,
        generatedAccessToken.getTokenValue(),
        generatedAccessToken.getIssuedAt(), generatedAccessToken.getExpiresAt(),
        accessTokenContext.getAuthorizedScopes());

    // 自定义 principal
    Authentication customAuthentication = getCustomAuthenticated(clientPrincipal, ((OAuth2ClientCredentialsAuthenticationToken) authentication).getAdditionalParameters());

    // @formatter:off
    OAuth2Authorization.Builder authorizationBuilder = OAuth2Authorization.withRegisteredClient(
            registeredClient).principalName(clientPrincipal.getName())
        .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
        .attribute(OAuth2Authorization.AUTHORIZED_SCOPE_ATTRIBUTE_NAME, authorizedScopes)
        // todo
        .attribute(Principal.class.getName(),customAuthentication);
    // @formatter:on
    if (generatedAccessToken instanceof ClaimAccessor) {
      authorizationBuilder.token(accessToken, (metadata) -> metadata.put(
          OAuth2Authorization.Token.CLAIMS_METADATA_NAME,
          ((ClaimAccessor) generatedAccessToken).getClaims()));
    } else {
      authorizationBuilder.accessToken(accessToken);
    }

    // ----- Refresh token -----
    OAuth2RefreshToken refreshToken = null;
    if (registeredClient.getAuthorizationGrantTypes().contains(AuthorizationGrantType.REFRESH_TOKEN) &&
        // Do not issue refresh token to public client
        !clientPrincipal.getClientAuthenticationMethod().equals(ClientAuthenticationMethod.NONE)) {

      OAuth2TokenContext refreshTokenContext  = tokenContextBuilder
          .tokenType(OAuth2TokenType.REFRESH_TOKEN).build();
      OAuth2Token generatedRefreshToken = this.refreshTokenGenerator.generate(refreshTokenContext);
      if (!(generatedRefreshToken instanceof OAuth2RefreshToken)) {
        OAuth2Error error = new OAuth2Error(OAuth2ErrorCodes.SERVER_ERROR,
            "The token generator failed to generate the refresh token.", ERROR_URI);
        throw new OAuth2AuthenticationException(error);
      }
      refreshToken = (OAuth2RefreshToken) generatedRefreshToken;
      authorizationBuilder.refreshToken(refreshToken);
    }

    OAuth2Authorization authorization = authorizationBuilder.build();

    this.authorizationService.save(authorization);

    return new OAuth2AccessTokenAuthenticationToken(registeredClient,
        clientPrincipal, accessToken, refreshToken);
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return OAuth2ClientCredentialsAuthenticationToken.class.isAssignableFrom(
        authentication);
  }

  private OAuth2ClientAuthenticationToken getAuthenticatedClientElseThrowInvalidClient(
      Authentication authentication) {
    OAuth2ClientAuthenticationToken clientPrincipal = null;
    if (OAuth2ClientAuthenticationToken.class.isAssignableFrom(
        authentication.getPrincipal().getClass())) {
      clientPrincipal = (OAuth2ClientAuthenticationToken) authentication.getPrincipal();
    }
    if (clientPrincipal != null && clientPrincipal.isAuthenticated()) {
      return clientPrincipal;
    }
    throw new OAuth2AuthenticationException(OAuth2ErrorCodes.INVALID_CLIENT);
  }

  private Authentication getCustomAuthenticated(
      OAuth2ClientAuthenticationToken authentication,
      Map<String,Object> additionalParameters) {
//    OAuth2AuthorizationCodeRequestAuthenticationToken authenticationToken =
//        OAuth2AuthorizationCodeRequestAuthenticationToken.with(String.valueOf(authentication.getPrincipal()), authentication)
//            .additionalParameters(authentication.getAdditionalParameters())
//            .authorizationUri("www.osrc.com")
//            .build();
//    OAuth2AuthorizationCodeRequestAuthenticationToken authenticationToken = null;
//    try {
//      Class<OAuth2AuthorizationCodeRequestAuthenticationToken> clazz = OAuth2AuthorizationCodeRequestAuthenticationToken.class;
//      Constructor<OAuth2AuthorizationCodeRequestAuthenticationToken> con = clazz.getDeclaredConstructor();
//      con.setAccessible(true);
//      authenticationToken = con.newInstance();
//      Field field = clazz.getDeclaredField("clientId");
//      field.setAccessible(true);
//      field.set(authenticationToken, authentication.getPrincipal());
//      field = clazz.getDeclaredField("additionalParameters");
//      field.setAccessible(true);
//      field.set(authenticationToken, authentication.getAdditionalParameters());
////      field = clazz.getDeclaredField("principal");
////      field.setAccessible(true);
////      field.set(authenticationToken, authenticationToken);
//    } catch (Exception e) {
//      e.printStackTrace();
//    }
    return new CustomOauth2AuthenticationToken(new LinkedList<>(),
    String.valueOf(authentication.getPrincipal()), authentication.getCredentials(), additionalParameters);
  }

}
