# Vue

 TypeError: this.getOptions is not a function：版本不兼容webpack

```error
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

当前vue的环境不支持解析template，需要换个环境，具体查看Vue的笔记

````error
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
````

[安装插件](https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4)

````error
[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
````

vue与vue-template-compiler版本不一致，重装



# Maven

### parent标签出现问题

````bash
'parent.relativePath' of POM xxx, please verify your project structure
````

要解决这个问题的方法也很简单，在parent标签下添加一个<relativePath/>标签即可。[参考](https://blog.csdn.net/qq_45193304/article/details/108092077)

````xml
<parent>
  <groupId>com.xxx.yyy</groupId>
  <artifactId>xx-yyycommon-parent</artifactId>
  <version>1.0-SNAPSHOT</version>
  <relativePath/>
</parent>
````

### 项目依赖在仓库（本地、远程）中一定有，但在pom文件中依然报错

在idea的maven设置中更新索引

![image-20211130172210912](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202111301722404.png)

