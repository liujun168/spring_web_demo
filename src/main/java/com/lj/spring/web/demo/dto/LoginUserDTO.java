package com.lj.spring.web.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Setter
@Getter
@ToString
public class LoginUserDTO implements Serializable {

    @JsonProperty(value = "userName")
    private String userName;

    @JsonProperty(value = "password")
    private String password;
}
