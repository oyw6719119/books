"use strict";(self.webpackChunkgitbook=self.webpackChunkgitbook||[]).push([[126],{3798:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-67304e1e",path:"/errorcollect.html",title:"Vue",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:1,title:"Vue",slug:"vue",children:[]},{level:1,title:"Maven",slug:"maven",children:[{level:3,title:"parent标签出现问题",slug:"parent标签出现问题",children:[]},{level:3,title:"项目依赖在仓库（本地、远程）中一定有，但在pom文件中依然报错",slug:"项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错",children:[]}]}],filePathRelative:"errorcollect.md",git:{updatedTime:null,contributors:[]}}},5685:(a,n,e)=>{e.r(n),e.d(n,{default:()=>m});var s=e(6252);const t=(0,s.uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><p>TypeError: this.getOptions is not a function：版本不兼容webpack</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当前vue的环境不支持解析template，需要换个环境，具体查看Vue的笔记</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),p={href:"https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("安装插件"),r=(0,s.uE)('<div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>vue与vue-template-compiler版本不一致，重装</p><h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h1><h3 id="parent标签出现问题" tabindex="-1"><a class="header-anchor" href="#parent标签出现问题" aria-hidden="true">#</a> parent标签出现问题</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;parent.relativePath&#39;</span> of POM xxx, please verify your project structure\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),o=(0,s.Uk)("要解决这个问题的方法也很简单，在parent标签下添加一个"),i=(0,s.Uk)("标签即可。"),c={href:"https://blog.csdn.net/qq_45193304/article/details/108092077",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("参考"),d=(0,s.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.xxx.yyy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xx-yyycommon-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错" tabindex="-1"><a class="header-anchor" href="#项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错" aria-hidden="true">#</a> 项目依赖在仓库（本地、远程）中一定有，但在pom文件中依然报错</h3><p>在idea的maven设置中更新索引</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202111301722404.png" alt="image-20211130172210912"></p>',4),g={},m=(0,e(3744).Z)(g,[["render",function(a,n){const e=(0,s.up)("OutboundLink"),g=(0,s.up)("relativePath");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[(0,s._)("a",p,[l,(0,s.Wm)(e)])]),r,(0,s._)("p",null,[o,(0,s.Wm)(g),i,(0,s._)("a",c,[u,(0,s.Wm)(e)])]),d],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[e,s]of n)a[e]=s;return a}}}]);