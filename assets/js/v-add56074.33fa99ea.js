"use strict";(self.webpackChunkgitbook=self.webpackChunkgitbook||[]).push([[260],{6191:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-add56074",path:"/BlogBuild.html",title:"GitBook",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:1,title:"GitBook",slug:"gitbook",children:[{level:2,title:"教程",slug:"教程",children:[]},{level:2,title:"插件篇",slug:"插件篇",children:[]}]},{level:1,title:"VuePress",slug:"vuepress",children:[{level:2,title:"错误收集",slug:"错误收集",children:[{level:3,title:"严格的html语法检查",slug:"严格的html语法检查",children:[]}]}]}],filePathRelative:"BlogBuild.md",git:{updatedTime:1638326853e3,contributors:[{name:"oyw6719119",email:"1254691710@qq.com",commits:1}]}}},3575:(n,s,a)=>{a.r(s),a.d(s,{default:()=>T});var e=a(6252);const p=(0,e._)("h1",{id:"gitbook",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#gitbook","aria-hidden":"true"},"#"),(0,e.Uk)(" GitBook")],-1),t=(0,e._)("h2",{id:"教程",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#教程","aria-hidden":"true"},"#"),(0,e.Uk)(" 教程")],-1),o={href:"https://www.cnblogs.com/phyger/p/14035937.html#ghpages_681",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("打造完美写作系统：Gitbook+Github Pages+Github Actions"),r=(0,e._)("p",null,"用上面的方法完成githubPages的搭建，github Actions使用没成功，Windows写批处理程序实现同样效果",-1),i=(0,e.uE)('<li><p>更新完笔记，重构gitbook(0-gitbook_build.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook\ngitbook build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>',1),c=(0,e.uE)('<p>上传git(1-git_updata.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>\n<span class="token function">git</span> push https://github.com/用户名/仓库名\n<span class="token builtin class-name">cd</span> _book\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;邮箱&quot;</span>\n<span class="token function">git</span> config --global user.name <span class="token string">&quot;用户名&quot;</span>\n<span class="token function">git</span> init\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/用户名/仓库名\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>\n<span class="token function">git</span> branch -M main\n<span class="token function">git</span> push --quiet --force <span class="token string">&quot;https://github.com/用户名/仓库名&quot;</span> main:gh-pages <span class="token comment">#没有成功在下一行加上&quot;pause&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>（<strong>重点</strong>）目录结构：<br><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041151795.png" alt="image-20211004115111743"></p><p>git上传常见错误：</p>',4),u={href:"https://www.cnblogs.com/fairylyl/p/15059437.html",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("Git 错误：OpenSSL SSL_read: Connection was reset, errno 10054"),g={href:"https://blog.csdn.net/wkc1996/article/details/119458835",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("CDN加速GitHub搭配PicGo自建图床，Typora使用起来太爽了"),d=(0,e._)("h2",{id:"插件篇",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#插件篇","aria-hidden":"true"},"#"),(0,e.Uk)(" 插件篇")],-1),m={href:"https://www.cnblogs.com/mingyue5826/p/10307051.html#214-%E7%94%9F%E6%88%90%E9%A1%B5%E5%86%85%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("插件整理"),q=(0,e.uE)('<p>插件安装：在gitbook init目录中输入</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitbook <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),v=(0,e.Uk)("页内目录生成插件"),f={href:"https://blog.csdn.net/xo19882011/article/details/114917307",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("ref"),y=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;intopic-toc&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041506497.png" alt="image-20211004150613446"></p><p>页脚</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;tbfed-pagefooter&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;tbfed-pagefooter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Copyright &amp;copy oyw6719119 2021&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;modify_label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最近修订时间：&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;modify_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041940031.png" alt="image-20211004194017542"></p><p>回到顶部</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;back-to-top-button&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041941235.png" alt="image-20211004194154378"></p>',8),j=(0,e.Uk)("统计网页打开数量 "),w={href:"https://blog.csdn.net/u012887259/article/details/102425733",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("ref"),U=(0,e.uE)('<p>没有实际效果</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;pageview-count&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110051601244.png" alt="image-20211005160051605"></p>',3),E=(0,e.Uk)("代码块复制按钮 "),B={href:"https://blog.csdn.net/bocai_xiaodaidai/article/details/100696794",target:"_blank",rel:"noopener noreferrer"},C=(0,e.Uk)("ref"),W=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;code&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;copyButtons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>copyButtons: false 表示关闭复制按钮</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052300755.png" alt="image-20211005230042701"></p>',3),G=(0,e.Uk)("自由调节左侧边栏 "),L={href:"https://lingsword.gitbooks.io/gitbook-use/content/plugins.html#splitter",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("ref"),D=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;splitter&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052309627.png" alt="image-20211005230908037"></p><p>悬浮页内目录（可收起）</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t<span class="token string">&quot;anchor-navigation-ex&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token property">&quot;anchor-navigation-ex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n         <span class="token comment">// 标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示</span>\n\t\t<span class="token property">&quot;showLevel&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;isShowTocTitleIcon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel1Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel2Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel3Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',4),I=(0,e.Uk)("隐藏元素 "),S={href:"https://blog.csdn.net/weixin_37865166/article/details/91899788?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("ref"),A=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;hide-element&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;hide-element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.gitbook-link&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h1><h2 id="错误收集" tabindex="-1"><a class="header-anchor" href="#错误收集" aria-hidden="true">#</a> 错误收集</h2><h3 id="严格的html语法检查" tabindex="-1"><a class="header-anchor" href="#严格的html语法检查" aria-hidden="true">#</a> 严格的html语法检查</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> Invalid value used as weak map key\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>vuepress2.x 是基于 Vue3.x开发，相比 Vuepress1.x 对 html 的使用更严格。如下图所示的非标准 html 标签在开发阶段没问题，编译却无法通过。具体错误位置</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202112011013498.png" alt="image-20211201101343002"></p><p>这是一个xml标签，我要求它以普通文本的形式展现，所以要加“\\”转义尖括号</p>',8),H={},T=(0,a(3744).Z)(H,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,t,(0,e._)("p",null,[(0,e._)("a",o,[l,(0,e.Wm)(a)])]),r,(0,e._)("ol",null,[i,(0,e._)("li",null,[c,(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("a",u,[b,(0,e.Wm)(a)])])])])]),(0,e._)("p",null,[(0,e._)("a",g,[k,(0,e.Wm)(a)])]),d,(0,e._)("p",null,[(0,e._)("a",m,[h,(0,e.Wm)(a)])]),q,(0,e._)("p",null,[v,(0,e._)("a",f,[_,(0,e.Wm)(a)])]),y,(0,e._)("p",null,[j,(0,e._)("a",w,[x,(0,e.Wm)(a)])]),U,(0,e._)("p",null,[E,(0,e._)("a",B,[C,(0,e.Wm)(a)])]),W,(0,e._)("p",null,[G,(0,e._)("a",L,[P,(0,e.Wm)(a)])]),D,(0,e._)("p",null,[I,(0,e._)("a",S,[Y,(0,e.Wm)(a)])]),A],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);