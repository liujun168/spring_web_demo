package com.lj.spring.web.demo.controller;

import com.lj.spring.web.demo.common.Constant;
import com.lj.spring.web.demo.dto.LoginUserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("")
public class LoginController {

    @RequestMapping("/")
    public String index() {//@SessionAttribute(WebSecurityConfig.SESSION_KEY) String account, Model model
//        model.addAttribute("name", account);
        return "redirect:login.html";
    }

    @PostMapping("/login")
    public String login(LoginUserDTO dto, HttpSession session) {
        System.out.println("dto = " + dto.toString());
        session.setAttribute(Constant.SESSION_ID, dto.getUserName());
        return "redirect:index.html";
    }

    @PostMapping("/test/login.json")
    @ResponseBody
    public String loginTest(LoginUserDTO dto) {
        System.out.println("dto = " + dto.toString());
        return "ok";
    }

}
