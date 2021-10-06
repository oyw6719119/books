"use strict";(self.webpackChunkgitbook=self.webpackChunkgitbook||[]).push([[389],{683:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-1997c6e8",path:"/gitbook_build.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"教程",slug:"教程",children:[]},{level:3,title:"插件篇",slug:"插件篇",children:[]}],filePathRelative:"gitbook_build.md",git:{}}},6:(n,s,a)=>{a.r(s),a.d(s,{default:()=>P});var p=a(252);const e=(0,p._)("h3",{id:"教程",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#教程","aria-hidden":"true"},"#"),(0,p.Uk)(" 教程")],-1),t={href:"https://www.cnblogs.com/phyger/p/14035937.html#ghpages_681",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("打造完美写作系统：Gitbook+Github Pages+Github Actions"),l=(0,p._)("p",null,"用上面的方法完成githubPages的搭建，github Actions使用没成功，Windows写批处理程序实现同样效果",-1),r=(0,p.uE)('<li><p>更新完笔记，重构gitbook(0-gitbook_build.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook\ngitbook build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>',1),c=(0,p.uE)('<p>上传git(1-git_updata.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>\n<span class="token function">git</span> push https://github.com/用户名/仓库名\n<span class="token builtin class-name">cd</span> _book\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;邮箱&quot;</span>\n<span class="token function">git</span> config --global user.name <span class="token string">&quot;用户名&quot;</span>\n<span class="token function">git</span> init\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/用户名/仓库名\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>\n<span class="token function">git</span> branch -M main\n<span class="token function">git</span> push --quiet --force <span class="token string">&quot;https://github.com/用户名/仓库名&quot;</span> main:gh-pages <span class="token comment">#没有成功在下一行加上&quot;pause&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>（<strong>重点</strong>）目录结构：<br><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041151795.png" alt="image-20211004115111743"></p><p>git上传常见错误：</p>',4),i={href:"https://www.cnblogs.com/fairylyl/p/15059437.html",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("Git 错误：OpenSSL SSL_read: Connection was reset, errno 10054"),b={href:"https://blog.csdn.net/wkc1996/article/details/119458835",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("CDN加速GitHub搭配PicGo自建图床，Typora使用起来太爽了"),k=(0,p._)("h3",{id:"插件篇",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#插件篇","aria-hidden":"true"},"#"),(0,p.Uk)(" 插件篇")],-1),m={href:"https://www.cnblogs.com/mingyue5826/p/10307051.html#214-%E7%94%9F%E6%88%90%E9%A1%B5%E5%86%85%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("插件整理"),h=(0,p.uE)('<p>插件安装：在gitbook init目录中输入</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitbook <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),q=(0,p.Uk)("页内目录生成插件"),f={href:"https://blog.csdn.net/xo19882011/article/details/114917307",target:"_blank",rel:"noopener noreferrer"},v=(0,p.Uk)("ref"),_=(0,p.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;intopic-toc&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041506497.png" alt="image-20211004150613446"></p><p>页脚</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;tbfed-pagefooter&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;tbfed-pagefooter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Copyright &amp;copy oyw6719119 2021&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;modify_label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最近修订时间：&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;modify_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041940031.png" alt="image-20211004194017542"></p><p>回到顶部</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;back-to-top-button&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041941235.png" alt="image-20211004194154378"></p>',8),y=(0,p.Uk)("统计网页打开数量 "),j={href:"https://blog.csdn.net/u012887259/article/details/102425733",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Uk)("ref"),x=(0,p.uE)('<p>没有实际效果</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;pageview-count&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110051601244.png" alt="image-20211005160051605"></p>',3),U=(0,p.Uk)("代码块复制按钮 "),E={href:"https://blog.csdn.net/bocai_xiaodaidai/article/details/100696794",target:"_blank",rel:"noopener noreferrer"},C=(0,p.Uk)("ref"),W=(0,p.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;code&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;copyButtons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>copyButtons: false 表示关闭复制按钮</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052300755.png" alt="image-20211005230042701"></p>',3),L=(0,p.Uk)("自由调节左侧边栏 "),G={href:"https://lingsword.gitbooks.io/gitbook-use/content/plugins.html#splitter",target:"_blank",rel:"noopener noreferrer"},B=(0,p.Uk)("ref"),D=(0,p.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;splitter&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052309627.png" alt="image-20211005230908037"></p><p>悬浮页内目录（可收起）</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t<span class="token string">&quot;anchor-navigation-ex&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token property">&quot;anchor-navigation-ex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n         <span class="token comment">// 标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示</span>\n\t\t<span class="token property">&quot;showLevel&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;isShowTocTitleIcon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel1Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel2Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;tocLevel3Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',4),S=(0,p.Uk)("隐藏元素 "),Y={href:"https://blog.csdn.net/weixin_37865166/article/details/91899788?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"},A=(0,p.Uk)("ref"),H=(0,p.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;hide-element&quot;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;hide-element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.gitbook-link&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',1),I={},P=(0,a(744).Z)(I,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[(0,p._)("a",t,[o,(0,p.Wm)(a)])]),l,(0,p._)("ol",null,[r,(0,p._)("li",null,[c,(0,p._)("ol",null,[(0,p._)("li",null,[(0,p._)("a",i,[u,(0,p.Wm)(a)])])])])]),(0,p._)("p",null,[(0,p._)("a",b,[g,(0,p.Wm)(a)])]),k,(0,p._)("p",null,[(0,p._)("a",m,[d,(0,p.Wm)(a)])]),h,(0,p._)("p",null,[q,(0,p._)("a",f,[v,(0,p.Wm)(a)])]),_,(0,p._)("p",null,[y,(0,p._)("a",j,[w,(0,p.Wm)(a)])]),x,(0,p._)("p",null,[U,(0,p._)("a",E,[C,(0,p.Wm)(a)])]),W,(0,p._)("p",null,[L,(0,p._)("a",G,[B,(0,p.Wm)(a)])]),D,(0,p._)("p",null,[S,(0,p._)("a",Y,[A,(0,p.Wm)(a)])]),H],64)}]])},744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);