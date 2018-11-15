package com.lj.spring.web.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @RequestMapping("/get.json")
    public String getData() {
        System.out.println("run here");
        return "data";
    }
}
