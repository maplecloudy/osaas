package com.osrc.osaas.oauth.config;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.Version;

import java.util.Collection;
import java.util.Map;

/**
 * @author tom
 * @date 2022/5/9 14:38
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS)
public class CustomOauth2AuthenticationToken
    extends AbstractAuthenticationToken {

  private static final long serialVersionUID = Version.SERIAL_VERSION_UID;
  private String clientId;
  private Object credentials;
  private Map<String,Object> additionalParameters;
  @JsonIgnoreProperties
  private Object principal;
  @JsonIgnoreProperties
  private Object name;

  public CustomOauth2AuthenticationToken(
      Collection<? extends GrantedAuthority> authorities) {
    super(authorities);
  }

  public CustomOauth2AuthenticationToken() {
    super(null);
  }

  public CustomOauth2AuthenticationToken(
     Collection<? extends GrantedAuthority> authorities, String clientId,
     Object credentials, Map<String,Object> additionalParameters) {
  super(authorities);
  this.clientId = clientId;
  this.credentials = credentials;
  this.additionalParameters = additionalParameters;
 }

 @Override
  public Object getCredentials() {
    return this.credentials;
  }

  @Override
  public Object getPrincipal() {
    return this.clientId;
  }

 public String getClientId() {
  return clientId;
 }

 public void setClientId(String clientId) {
  this.clientId = clientId;
 }

 public void setCredentials(Object credentials) {
  this.credentials = credentials;
 }

 public Map<String,Object> getAdditionalParameters() {
  return additionalParameters;
 }

 public void setAdditionalParameters(Map<String,Object> additionalParameters) {
  this.additionalParameters = additionalParameters;
 }
}
