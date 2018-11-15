package com.lj.spring.web.demo.common;

/**
 * @Author liujun
 * @Date 2018/11/15 12:00
 */
public enum ResultCode {
    defaultFailCode("-1", "失败"),
    defaultSuccessCode("00000", "成功"),
    paramsError("10001", "参数异常"),
    MissingParameter("10005", "缺少必要参数"),
    MessageNotReadable("10006", "参数解析失败"),
    JsonFormatInvalid("10007", "JSON 格式不正确"),
    RequestMethodNotSupported("10008", "不支持此请求方式");
    private String code;
    private String message;

    ResultCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return this.code;
    }

    public String getMessage() {
        return this.message;
    }
}