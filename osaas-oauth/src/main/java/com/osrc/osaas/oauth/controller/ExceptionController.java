package com.osrc.osaas.oauth.controller;

import com.osrc.osaas.oauth.model.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author tom
 * @date 2022/5/10 16:36
 */
@RestController
public class ExceptionController {

  @Resource
  private HttpServletRequest request;

  @RequestMapping("/error/msg")
  public Result<Void> exceptionMsg() {
    String msg = (String) request.getAttribute("filter-error");
    if (msg == null) {
      msg = "filter exception happen.";
    }
    return new Result<>(600, msg);
  }
}
