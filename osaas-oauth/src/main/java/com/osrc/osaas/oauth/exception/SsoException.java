package com.osrc.osaas.oauth.exception;

import java.text.MessageFormat;

/**
 * sso exception
 * @author osrc
 */
public class SsoException extends RuntimeException {
  
  private static final long serialVersionUID = 1L;
  
  public SsoException(int code, String msg) {
    this.code = code;
    this.msg = msg;
  }
  
  public SsoException(int code, String msg, Object... args) {
    this.code = code;
    this.msg = MessageFormat.format(msg, args);
  }
  
  public int code;
  public String msg;
  
  @Override
  public String getMessage() {
    return msg;
  }
  
  @Override
  public String toString() {
    return "PlatformException [code=" + code + ", msg=" + msg + "]";
  }
  
}
