package com.lj.spring.web.demo.config;

import com.lj.spring.web.demo.interceptor.MyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * 优先级顺序为：META/resources > resources > static > public
 */
//@EnableWebMvc
@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {

    /**
     * @param registry
     */
    public void addInterceptors(InterceptorRegistry registry) {
        //addPathPattern后跟拦截地址，excludePathPatterns后跟排除拦截地址
//        registry.addInterceptor(new MyInterceptor()).addPathPatterns("/**").excludePathPatterns("/login/index").excludePathPatterns("/login/login");
        InterceptorRegistration addInterceptor = registry.addInterceptor(new MyInterceptor());
//        InterceptorRegistration addInterceptor = registry.addInterceptor(getSecurityInterceptor());
        //拦截配置
        addInterceptor.addPathPatterns("/**");
        //排除配置
        addInterceptor.excludePathPatterns("/error");
        addInterceptor.excludePathPatterns("/login");
        addInterceptor.excludePathPatterns("/login.html");
        addInterceptor.excludePathPatterns("/css/**");
        addInterceptor.excludePathPatterns("/fonts/**");
        addInterceptor.excludePathPatterns("/images/**");
        addInterceptor.excludePathPatterns("/js/**");
        addInterceptor.excludePathPatterns("/");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/myres/**").addResourceLocations("classpath:/myres/");
//        super.addResourceHandlers(registry);
    }

    /**
     * 默认首页
     *
     * @param registry
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/login.html");
//        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }
}
