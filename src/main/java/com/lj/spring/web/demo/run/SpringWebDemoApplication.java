package com.lj.spring.web.demo.run;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
//或者@EnableAutoConfiguration(exclude = DataSourceAutoConfiguration.class)
//扫描制定的包
@ComponentScan(basePackages = {"com.lj.spring.web.demo"})
//@EnableTransactionManagement // 启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
//@MapperScan(basePackages = "com.lj.qs.manage.pm.mapper")
public class SpringWebDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringWebDemoApplication.class, args);
    }

    //    // 创建事务管理器1
//    @Bean(name = "txManager1")
//    public PlatformTransactionManager txManager(DataSource dataSource) {
//        return new DataSourceTransactionManager(dataSource);
//    }
//
//    // 创建事务管理器2
//    @Bean(name = "txManager2")
//    public PlatformTransactionManager txManager2(EntityManagerFactory factory) {
//        return new JpaTransactionManager(factory);
//    }
// 实现接口 TransactionManagementConfigurer 方法，其返回值代表在拥有多个事务管理器的情况下默认使用的事务管理器
//@Override
//public PlatformTransactionManager annotationDrivenTransactionManager() {
//    return txManager2;
//}
    // 其中 dataSource 框架会自动为我们注入
//    @Bean
//    public PlatformTransactionManager txManager(DataSource dataSource) {
//        return new DataSourceTransactionManager(dataSource);
//    }
//
//    @Bean
//    public Object testBean(PlatformTransactionManager platformTransactionManager) {
//        System.out.println(">>>>>>>>>>" + platformTransactionManager.getClass().getName());
//        return new Object();
//    }
}
