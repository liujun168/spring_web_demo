package com.lj.spring.web.demo.exception;

import com.lj.qs.manage.pm.common.ResultCode;
import com.lj.qs.manage.pm.utils.dto.SimpleResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;


/**
 * @Author liujun
 * @Date 2018/11/15 11:46
 */
@RestControllerAdvice
public class MyExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(MyExceptionHandler.class);

    /**
     * 应用到所有@RequestMapping注解方法，在其执行之前初始化数据绑定器
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {

    }

    /**
     * 缺少参数
     *
     * @param e 异常
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public SimpleResult handleMethodArgumentNotValid(MethodArgumentNotValidException e) {
        return SimpleResult.newInstance(ResultCode.paramsError.getCode(), e.getBindingResult().getFieldError().getDefaultMessage());
    }

    /**
     * 不支持此请求方式
     */
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler(value = HttpRequestMethodNotSupportedException.class)
    public SimpleResult methodNotSupported() {
        return SimpleResult.newInstance(ResultCode.RequestMethodNotSupported.getCode(), ResultCode.RequestMethodNotSupported.getMessage());
    }

    /**
     * 缺少方法体
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public SimpleResult messageNotReadable() {
        log.warn("缺少POST方法体");
        return SimpleResult.newInstance(ResultCode.MessageNotReadable.getCode(), ResultCode.MessageNotReadable.getMessage());
    }
}
