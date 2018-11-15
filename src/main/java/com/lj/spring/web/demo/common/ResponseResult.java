package com.lj.spring.web.demo.common;

/**
 * 接口返回的消息体
 *
 * @Author liujun
 * @Date 2018/11/15 14:17
 */
public class ResponseResult {

    /**
     * 响应代码
     */
    private String code = ResultCode.defaultFailCode.getCode();
    /**
     * 一般消息
     */
    private String message;

    /**
     * 返回结果
     */
    private Object data;

    public ResponseResult() {
    }

    public ResponseResult(String code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
