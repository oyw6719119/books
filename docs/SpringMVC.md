### @RequestMapping注解的继承问题

在学习openfeign的过程中遇到一个问题：在接口上标识@RequestMapping，implements与extends会发生什么

**implements**

API

````java
package com.example.demo.api;

import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/user")
public interface UserApi {
    @RequestMapping("/api")
    String demo();
}
````

UserController

````java
package com.example.demo.controller;

import com.example.demo.api.UserApi;
import com.example.demo.facade.UserFacade;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserApi {
    @Override
    public String demo() {
        System.out.println("@RequestMapping注解可通过implements继承，端口号：8888,");
//        System.out.println("@RequestMapping注解可通过extends继承，端口号：8888,");
        return null;
    }

}
````

启动服务，测试能通过，结论是@RequestMapping能通过implements从接口上继承该注解，像java机制的向下转型

**extends**

在上面的基础上改进

UserFacade

````java
package com.example.demo.facade;

import com.example.demo.api.UserApi;

public interface UserFacade extends UserApi {
}
````

UserController

````java
package com.example.demo.controller;

import com.example.demo.api.UserApi;
import com.example.demo.facade.UserFacade;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserFacade {
    @Override
    public String demo() {
//        System.out.println("@RequestMapping注解可通过implements继承，端口号：8888,");
        System.out.println("@RequestMapping注解可通过extends继承，端口号：8888,");
        return null;
    }
}
````

启动服务，测试能通过，结论是@RequestMapping能通过extends从接口传递注解

**重点来了，实现同一个标注了@RequestMapping的接口会发生什么**

````java
package com.example.demo.controller;

import com.example.demo.facade.UserFacade;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController2 implements UserFacade {
    @Override
    public String demo() {
        System.out.println("@RequestMapping注解标识的接口同时被两个类实现");
        return null;
    }
}
````

结果是报错

````bash
There is already 'userController' bean method
````

从底层源码思考，映射路径与控制器的映射关系在底层是以map形式存在的，key与value是一对一的关系。