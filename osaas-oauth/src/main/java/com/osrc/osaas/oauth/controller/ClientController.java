package com.osrc.osaas.oauth.controller;

import com.osrc.osaas.oauth.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.OAuth2TokenFormat;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.TokenSettings;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.UUID;

/**
 * oauth 客户端管理端点
 * @author tom
 * @date 2022/4/29 18:43
 */
@RestController
@RequestMapping("/oauth/client")
public class ClientController {

  @Autowired
  private RegisteredClientRepository registeredClientRepository;

  @PostMapping
  public Result<RegisteredClient> newRegisterClient(@RequestBody RegisteredClient registeredClient) {
    // 请求部分客户端注册信息 构造client
    RegisteredClient client = RegisteredClient.withId(
            UUID.randomUUID().toString())
        // 客户端id 需要唯一
        .clientId(registeredClient.getClientId())
        // 客户端密码
        .clientSecret("{noop}maplecloudy123456!@#$")
        // 可以基于 client_secret_basic 的方式和授权服务器进行认证
        .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
        // 授权码
        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
        // 刷新token
        .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
        // 客户端模式
        .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
        // 密码模式
        .authorizationGrantType(AuthorizationGrantType.PASSWORD)
        // 重定向url
        .redirectUris((item) -> item.addAll(registeredClient.getRedirectUris()))
        // 客户端申请的作用域scope
        .scopes(item -> item.addAll(registeredClient.getScopes()))
        .clientSettings(
            ClientSettings.builder().requireAuthorizationConsent(true).build())
        .tokenSettings(TokenSettings.builder()
            // 使用明文非JWT TOKEN 格式 OAuth2TokenGenerator OAuth2RefreshTokenGenerator
            .accessTokenFormat(OAuth2TokenFormat.REFERENCE)
            .accessTokenTimeToLive(Duration.ofHours(1))
            .refreshTokenTimeToLive(Duration.ofDays(3))
            .reuseRefreshTokens(true).build()).build();
    registeredClientRepository.save(client);
     client = registeredClientRepository.findByClientId(client.getClientId());
    return new Result<>(client);
  }

  @PutMapping
  public Result<RegisteredClient> updateRegisterClient(@RequestBody RegisteredClient registeredClient) {
    RegisteredClient preClient = registeredClientRepository.findByClientId(registeredClient.getClientId());
    if (preClient == null) {
      return new Result<>(600, "register client not existed!");
    }
    RegisteredClient client = RegisteredClient.withId(
            UUID.randomUUID().toString())
        // 客户端id 需要唯一
        .clientId(registeredClient.getClientId())
        // 客户端密码
        .clientSecret("{noop}maplecloudy123456!@#$")
        // 可以基于 client_secret_basic 的方式和授权服务器进行认证
        .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
        // 授权码
        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
        // 刷新token
        .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
        // 客户端模式
        .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
        // 密码模式
        .authorizationGrantType(AuthorizationGrantType.PASSWORD)
        // 重定向url
        .redirectUris((item) -> item.addAll(registeredClient.getRedirectUris()))
        // 客户端申请的作用域scope
        .scopes(item -> item.addAll(registeredClient.getScopes()))
        .clientSettings(
            ClientSettings.builder().requireAuthorizationConsent(true).build())
        .tokenSettings(TokenSettings.builder()
            // 使用明文非JWT TOKEN 格式 OAuth2TokenGenerator OAuth2RefreshTokenGenerator
            .accessTokenFormat(OAuth2TokenFormat.REFERENCE)
            .accessTokenTimeToLive(Duration.ofHours(1))
            .refreshTokenTimeToLive(Duration.ofDays(3))
            .reuseRefreshTokens(true).build()).build();
    registeredClientRepository.save(client);
    client = registeredClientRepository.findByClientId(client.getClientId());
    return new Result<>(client);
  }

}
