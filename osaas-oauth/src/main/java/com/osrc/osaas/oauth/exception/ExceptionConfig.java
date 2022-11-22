package com.osrc.osaas.oauth.exception;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;

/**
 *
 * @author tom
 * @date 2022/5/10 16:51
 */
@Configuration
public class ExceptionConfig {

    @Resource
    private ExceptionFilter exceptionFilter;

    @Bean
    public FilterRegistrationBean register() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(exceptionFilter);
        registrationBean.setName("exceptionFilter");
        registrationBean.setOrder(-2147483646);
        return registrationBean;
    }
}