package com.osrc.osaas.oauth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Collections;

/**
 * 设置已注册的客户端可以通过basic认证方式oauth其它接口
 * @author tom
 * @date 2022/4/29 14:05
 */
@EnableWebSecurity
public class InternalSecurityConfig {

  @Bean
  SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeRequests(authorizeRequests ->
            authorizeRequests.anyRequest().authenticated())
        .httpBasic();
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return PasswordEncoderFactories.createDelegatingPasswordEncoder();
  }

  @Bean
  UserDetailsService userService(RegisteredClientRepository registeredClientRepository) {
    return username -> {
      RegisteredClient client = registeredClientRepository.findByClientId(username);
      if (client == null) {
        throw new UsernameNotFoundException(username);
      }
      return new User(client.getClientId(), client.getClientSecret(), Collections.emptyList());
    };
  }
}
