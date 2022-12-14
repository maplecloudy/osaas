package com.osrc.osaas.oauth.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.authorization.OAuth2AuthorizationServerConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.server.authorization.*;
import org.springframework.security.oauth2.server.authorization.authentication.*;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.oauth2.server.authorization.config.TokenSettings;
import org.springframework.security.oauth2.server.authorization.token.OAuth2AccessTokenGenerator;
import org.springframework.security.oauth2.server.authorization.token.OAuth2RefreshTokenGenerator;
import org.springframework.security.oauth2.server.authorization.token.OAuth2TokenClaimsContext;
import org.springframework.security.oauth2.server.authorization.token.OAuth2TokenCustomizer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import java.time.Duration;
import java.time.Instant;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * oauth server config
 *
 * @author tom
 * @date 2022/4/29 14:00
 */
@Configuration
public class AuthorizationConfig {

  private static final Logger log = LoggerFactory.getLogger(AuthorizationConfig.class);

  @Value("${oauth2.server.issuer}")
  private String issuer;


//  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
        .csrf(csrf -> csrf.ignoringRequestMatchers(new AntPathRequestMatcher("/oauth2/**")))
        .build();
  }

  @Bean
  public ProviderManager providerManager(List<AuthenticationProvider> providers) {
    return new ProviderManager(providers);
  }

  /**
   * ??????Security????????????
   */
  @Bean
  @Order(Ordered.HIGHEST_PRECEDENCE)
  public SecurityFilterChain authorizationServerSecurityFilterChain(
      HttpSecurity http, List<AuthenticationProvider> authenticationProviders) throws Exception {

    // ?????????????????????
    OAuth2AuthorizationServerConfigurer<HttpSecurity> authorizationServerConfigurer = new OAuth2AuthorizationServerConfigurer<>();

    // token???????????? ?????????AuthenticationProvider
    authorizationServerConfigurer.tokenEndpoint(config -> {
      if (authenticationProviders != null) {
        authenticationProviders.forEach(config::authenticationProvider);
      }
    });

    // ????????????????????????
    authorizationServerConfigurer.authorizationEndpoint(config -> {
      config.errorResponseHandler((request, response, exception) -> {
        OAuth2AuthenticationException oAuth2AuthenticationException = (OAuth2AuthenticationException) exception;
        OAuth2Error error = oAuth2AuthenticationException.getError();
        log.error("author warn:{}", error.getDescription());
      });
    });

    // token????????????????????????
    authorizationServerConfigurer.tokenEndpoint(config -> {
      config.errorResponseHandler((request, response, exception) -> {
        OAuth2AuthenticationException oAuth2AuthenticationException = (OAuth2AuthenticationException) exception;
        OAuth2Error error = oAuth2AuthenticationException.getError();
        log.error("token auth warn:{}", error.getDescription());
      });
    });

    RequestMatcher endpointsMatcher = authorizationServerConfigurer.getEndpointsMatcher();
    // ???/oauth2/**????????????????????????
    return http.requestMatcher(endpointsMatcher).authorizeRequests(
            authorizeRequests -> authorizeRequests.anyRequest().authenticated())
        .csrf(csrf -> csrf.ignoringRequestMatchers(endpointsMatcher))
        .apply(authorizationServerConfigurer).and().build();
  }

  /**
   * oauth??????????????????????????? - oauth2_registered_client
   */
  @Bean
  public RegisteredClientRepository registeredClientRepository(
      JdbcTemplate jdbcTemplate) {
    // ??????????????????????????????
    RegisteredClient registeredClient = RegisteredClient.withId(
            UUID.randomUUID().toString())
        // ?????????id ????????????
        .clientId("maplecloudy")
        // ???????????????
        .clientSecret("{noop}maplecloudy123456!@#$")
        // ???????????? client_secret_basic ???????????????????????????????????????
        .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
        // ?????????
        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
        // ??????token
        .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
        // ???????????????
        .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
        // ????????????
        .authorizationGrantType(AuthorizationGrantType.PASSWORD)
        // ?????????url
        .redirectUri("https://www.osrc.com")
        // ???????????????????????????scope
        .scope("pages.read").scope("pages.write")
        .scope("projects.read").scope("projects.write")
        .scope("runtimes.read").scope("runtimes.write")
        .scope("wikis.read").scope("wikis.write")
        .scope("users.info").scope("users.write")
        .clientSettings(ClientSettings.builder().requireAuthorizationConsent(true).build())
        .tokenSettings(TokenSettings.builder()
            // ???????????????JWT TOKEN ?????? OAuth2TokenGenerator OAuth2RefreshTokenGenerator
            .accessTokenFormat(OAuth2TokenFormat.REFERENCE)
            .accessTokenTimeToLive(Duration.ofHours(12))
            .refreshTokenTimeToLive(Duration.ofDays(3))
            .reuseRefreshTokens(true).build()).build();

    RegisteredClientRepository clientRepository = new JdbcRegisteredClientRepository(jdbcTemplate);
    if (clientRepository.findByClientId("maplecloudy") == null) {
      clientRepository.save(registeredClient);
    }
    return clientRepository;
  }

  /**
   * ??????????????????token?????? - oauth2_authorization
   */
  @Bean
  public OAuth2AuthorizationService authorizationService(JdbcTemplate jdbcTemplate,
      RegisteredClientRepository registeredClientRepository) {
    return new JdbcOAuth2AuthorizationService(jdbcTemplate, registeredClientRepository);
  }

  /**
   * ????????????scope????????? - oauth2_authorization_consent
   */
  @Bean
  public OAuth2AuthorizationConsentService authorizationConsentService(
      JdbcTemplate jdbcTemplate, RegisteredClientRepository registeredClientRepository) {
    return new JdbcOAuth2AuthorizationConsentService(jdbcTemplate,
        registeredClientRepository);
  }

  @Bean
  public OAuth2TokenCustomizer<OAuth2TokenClaimsContext> accessTokenCustomizer() {
    return context -> {
      Authentication authentication = context.getAuthorizationGrant();
      if (authentication instanceof OAuth2ClientCredentialsAuthenticationToken) {
        Map<String, Object> parameters = ((OAuth2AuthorizationGrantAuthenticationToken) authentication).getAdditionalParameters();
        Object username = parameters.get("username");
        Object userid = parameters.get("user_id");
        Object liveTime = parameters.get("live_time");
        if (username != null) {
          context.getClaims().subject((String) username);
        }
        if (userid != null) {
          context.getClaims().claim("user_id", userid);
        }
        if (liveTime != null) {
          context.getClaims().expiresAt(Instant.now().plusSeconds(Long.parseLong(String.valueOf(liveTime))));
        }
      } else if (authentication instanceof OAuth2RefreshTokenAuthenticationToken) {
        Object principal = context.getPrincipal();
        if (principal instanceof CustomOauth2AuthenticationToken) {
          Map<String, Object> parameters = ((CustomOauth2AuthenticationToken)principal).getAdditionalParameters();
          Object username = parameters.get("username");
          Object userid = parameters.get("user_id");
          Object liveTime = parameters.get("live_time");
          if (username != null) {
            context.getClaims().subject((String) username);
          }
          if (userid != null) {
            context.getClaims().claim("user_id", userid);
          }
          if (liveTime != null) {
            context.getClaims().expiresAt(Instant.now().plusSeconds(Long.parseLong(String.valueOf(liveTime))));
          }
        }
      }
    };
  }

  @Bean
  public OAuth2AccessTokenGenerator oAuth2AccessTokenGenerator(OAuth2TokenCustomizer<OAuth2TokenClaimsContext> accessTokenCustomizer ) {
    OAuth2AccessTokenGenerator accessTokenGenerator = new OAuth2AccessTokenGenerator();
    if (accessTokenCustomizer != null) {
      accessTokenGenerator.setAccessTokenCustomizer(accessTokenCustomizer);
    }
    return accessTokenGenerator;
  }

  @Bean
  public List<AuthenticationProvider> oAuth2ClientCredentialsAuthenticationProvider(
      OAuth2AuthorizationService authorizationService,
      OAuth2AccessTokenGenerator tokenGenerator,
      RegisteredClientRepository registeredClientRepository) {
    List<AuthenticationProvider> providers = new LinkedList<>();
    OAuth2AuthorizationCodeAuthenticationProvider authorizationCodeAuthenticationProvider =
        new OAuth2AuthorizationCodeAuthenticationProvider(authorizationService, tokenGenerator);
    providers.add(authorizationCodeAuthenticationProvider);

    OAuth2RefreshTokenAuthenticationProvider refreshTokenAuthenticationProvider =
        new OAuth2RefreshTokenAuthenticationProvider(authorizationService, tokenGenerator);
    providers.add(refreshTokenAuthenticationProvider);

    CustomOauth2ClientCredentialsAuthenticationProvider clientCredentialsAuthenticationProvider =
        new CustomOauth2ClientCredentialsAuthenticationProvider(authorizationService, tokenGenerator, new OAuth2RefreshTokenGenerator());
    providers.add(clientCredentialsAuthenticationProvider);

    OAuth2TokenIntrospectionAuthenticationProvider tokenIntrospectionAuthenticationProvider =
        new OAuth2TokenIntrospectionAuthenticationProvider(registeredClientRepository, authorizationService);
    providers.add(tokenIntrospectionAuthenticationProvider);

    OAuth2TokenRevocationAuthenticationProvider tokenRevocationAuthenticationProvider =
        new OAuth2TokenRevocationAuthenticationProvider(authorizationService);
    providers.add(tokenRevocationAuthenticationProvider);
    return providers;
  }

  /**
   * ????????????????????????????????????token??????????????????
   */
  @Bean
  public ProviderSettings providerSettings() {
    return ProviderSettings.builder()
        // oauth2????????????????????????
        .issuer(issuer).build();
  }

}
