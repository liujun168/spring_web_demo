package com.lj.spring.web.demo.utils.dto;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 公用响应结果
 *
 * @Author liujun
 * @Date 2018/11/15 11:54
 */
public class SimpleResult<T> {
    /**
     * 响应代码
     */
    private String code;
    /**
     * 响应消息
     */
    private String msg;
    /**
     * 响应结果
     */
    private T result;

    public SimpleResult() {

    }

    public SimpleResult(String code, String msg) {
        setCode(code);
        setMsg(msg);
    }

    public static <T> SimpleResult<T> newInstance() {
        return new SimpleResult<>();
    }

    public static <T> SimpleResult<T> newInstance(String code, String msg) {
        return new SimpleResult<>(code, msg);
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

    @JsonIgnore
    @JSONField(serialize = false)
    public boolean isSuccess() {
        return "00000".equalsIgnoreCase(code);
    }
}
