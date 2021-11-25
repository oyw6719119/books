"use strict";(self.webpackChunkgitbook=self.webpackChunkgitbook||[]).push([[367],{634:(e,l,r)=>{r.r(l),r.d(l,{data:()=>n});const n={key:"v-7522d784",path:"/Linux.html",title:"Linux",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:1,title:"Linux",slug:"linux",children:[{level:2,title:"Linux云服务器",slug:"linux云服务器",children:[]},{level:2,title:"Linux系统启动过程",slug:"linux系统启动过程",children:[{level:3,title:"内核的引导",slug:"内核的引导",children:[{level:4,title:"运行级别",slug:"运行级别",children:[]}]}]},{level:2,title:"Linux系统目录结构",slug:"linux系统目录结构",children:[]},{level:2,title:"文件基本属性",slug:"文件基本属性",children:[]}]}],filePathRelative:"Linux.md",git:{updatedTime:1633532064e3,contributors:[{name:"oyw6719119",email:"1254691710@qq.com",commits:2}]}}},6052:(e,l,r)=>{r.r(l),r.d(l,{default:()=>G});var n=r(6252);const i=(0,n._)("h1",{id:"linux",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),(0,n.Uk)(" Linux")],-1),t=(0,n._)("h2",{id:"linux云服务器",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linux云服务器","aria-hidden":"true"},"#"),(0,n.Uk)(" Linux云服务器")],-1),a=(0,n._)("p",null,"简介",-1),u={href:"https://www.runoob.com/linux/linux-cloud-server.html#tx",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("腾讯云"),h=(0,n.Uk)("：腾讯云目前活动多一些，性价比也高，"),p={href:"https://curl.qcloud.com/AbZapp4Q",target:"_blank",rel:"noopener noreferrer"},d=(0,n._)("strong",null,"直达链接",-1),c=(0,n.Uk)(),s=(0,n._)("strong",null,"如果需要购置海外服务器（国内要备案），可以点击：",-1),g={href:"https://curl.qcloud.com/5C1FtZ3S",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)(" https://curl.qcloud.com/5C1FtZ3S"),b=(0,n._)("strong",null,"。",-1),x={href:"https://www.runoob.com/linux/linux-cloud-server.html#ali",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("阿里云"),k=(0,n.Uk)("：折扣力度也很大，"),_={href:"https://www.aliyun.com/minisite/goods?userCode=i5mn5r7m",target:"_blank",rel:"noopener noreferrer"},w=(0,n._)("strong",null,"直达链接",-1),v=(0,n.Uk)(),L=(0,n.Uk)("。"),U={href:"https://www.runoob.com/linux/linux-cloud-server.html#hw",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Uk)("华为云"),y=(0,n.Uk)("：领券购买也很划算，"),W={href:"https://activity.huaweicloud.com/cps/recommendstore.html?fromacct=f3797f3d-4da5-4a2f-9149-130ad807c940&utm_source=dGlhbnFpeGlu=&utm_medium=cps&utm_campaign=201905",target:"_blank",rel:"noopener noreferrer"},C=(0,n._)("strong",null,"直达链接",-1),S=(0,n.Uk)(),j=(0,n.Uk)("。"),F=(0,n.uE)('<h2 id="linux系统启动过程" tabindex="-1"><a class="header-anchor" href="#linux系统启动过程" aria-hidden="true">#</a> Linux系统启动过程</h2><h3 id="内核的引导" tabindex="-1"><a class="header-anchor" href="#内核的引导" aria-hidden="true">#</a> 内核的引导</h3><p>当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘）来启动。</p><p>操作系统接管硬件以后，首先读入 /boot 目录下的内核文件</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081702.png" alt="bg2013081702"></p><p>运行init</p><p>init 进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。</p><p>init 程序首先是需要读取配置文件 /etc/inittab。</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081703.png" alt="bg2013081703"></p><h4 id="运行级别" tabindex="-1"><a class="header-anchor" href="#运行级别" aria-hidden="true">#</a> 运行级别</h4><p>许多程序需要开机启动。它们在Windows叫做&quot;服务&quot;（service），在Linux就叫做&quot;守护进程&quot;（daemon）。</p><p>init进程的一大任务，就是去运行这些开机启动的程序。</p><p>但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用作桌面就不需要。</p><p>Linux允许为不同的场合，分配不同的开机启动程序，这就叫做&quot;运行级别&quot;（runlevel）。也就是说，启动时根据&quot;运行级别&quot;，确定要运行哪些程序。</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081704.png" alt="bg2013081704"></p><p>Linux系统有7个运行级别(runlevel)：</p><ul><li><p>运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动</p></li><li><p>运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆</p></li><li><p>运行级别2：多用户状态(没有NFS)</p></li><li><p>运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式</p></li><li><p>运行级别4：系统未使用，保留</p></li><li><p>运行级别5：X11控制台，登陆后进入图形GUI模式</p></li><li><p>运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动</p></li></ul><h2 id="linux系统目录结构" tabindex="-1"><a class="header-anchor" href="#linux系统目录结构" aria-hidden="true">#</a> Linux系统目录结构</h2><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/d0c50-linux2bfile2bsystem2bhierarchy.jpg" alt="d0c50-linux2bfile2bsystem2bhierarchy"></p><h2 id="文件基本属性" tabindex="-1"><a class="header-anchor" href="#文件基本属性" aria-hidden="true">#</a> 文件基本属性</h2>',20),Z={},G=(0,r(3744).Z)(Z,[["render",function(e,l){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,t,a,(0,n._)("p",null,[(0,n._)("a",u,[o,(0,n.Wm)(r)]),h,(0,n._)("a",p,[d,c,(0,n.Wm)(r)])]),(0,n._)("p",null,[s,(0,n._)("a",g,[m,(0,n.Wm)(r)]),b]),(0,n._)("p",null,[(0,n._)("a",x,[f,(0,n.Wm)(r)]),k,(0,n._)("a",_,[w,v,(0,n.Wm)(r)]),L]),(0,n._)("p",null,[(0,n._)("a",U,[q,(0,n.Wm)(r)]),y,(0,n._)("a",W,[C,S,(0,n.Wm)(r)]),j]),F],64)}]])},3744:(e,l)=>{l.Z=(e,l)=>{for(const[r,n]of l)e[r]=n;return e}}}]);