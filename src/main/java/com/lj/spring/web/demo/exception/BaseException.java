package com.lj.spring.web.demo.exception;

import lombok.Getter;
import lombok.Setter;

/**
 * 添加异常基础异常信息，所有的异常都需要集成此类
 *
 * @Author liujun
 * @Date 2018/11/15 11:47
 */
@Setter
@Getter
public class BaseException extends RuntimeException {
    private String code;

    private String message;

    public BaseException(String code, String message) {
        super();
        this.code = code;
        this.message = message;
    }

    public BaseException(String message) {
        super(message);
        this.message = message;
    }

    public BaseException(String code, String message, Throwable throwable, boolean enableSuppression, boolean writableStackTrace) {
        super(message, throwable, enableSuppression, writableStackTrace);
        this.code = code;
        this.message = message;
    }

    public BaseException(String message, Throwable throwable) {
        super(message, throwable);
        this.message = message;
    }

    public BaseException(Throwable throwable) {
        super(throwable);
    }
}
