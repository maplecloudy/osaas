package com.osrc.osaas.oauth.exception;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import java.io.IOException;

/**
 * @author tom
 * @date 2022/5/10 16:49
 */
@Component
public class ExceptionFilter implements Filter {
  @Override
  public void doFilter(ServletRequest servletRequest,
      ServletResponse servletResponse, FilterChain filterChain)
      throws IOException, ServletException {
    try {
      filterChain.doFilter(servletRequest, servletResponse);
    } catch (Exception e) {
      String msg = e.getMessage();
      if (msg == null) {
        msg = e.getLocalizedMessage();
      }
      servletRequest.setAttribute("filter-error", msg);
      servletRequest.getRequestDispatcher("/error/msg").forward(servletRequest, servletResponse);
    }
  }
}
