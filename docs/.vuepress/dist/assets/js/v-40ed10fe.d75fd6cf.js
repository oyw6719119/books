"use strict";(self.webpackChunkgitbook=self.webpackChunkgitbook||[]).push([[110],{141:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-40ed10fe",path:"/Java.html",title:"Java",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Java.md",git:{updatedTime:null,contributors:[]}}},5:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(252).uE)('<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><ul><li>动态初始化：数组声明且为数组元素分配空间与赋值的操作分开进行</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> names<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nnames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nnames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> “钱学森”<span class="token punctuation">;</span>\nnames<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> “邓稼先”<span class="token punctuation">;</span>\nnames<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> “袁隆平”<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>静态初始化：在定义数组的同时就为数组元素分配空间并赋值。</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> arr1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>数组是引用对象，new出来的数组存放在堆中</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110181119602.png" alt="image-20211018111936268"></p><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><table><thead><tr><th></th><th>成员变量</th><th>局部变量</th></tr></thead><tbody><tr><td>声明的位置</td><td>直接声明在类中</td><td>方法形参或内部、代码块内、构造器内</td></tr><tr><td>修饰符</td><td>private、public、static、final等</td><td>不能用权限修饰符修饰，可以用final修饰</td></tr><tr><td>初始化值</td><td>有默认初始化值</td><td>没有默认初始化值，必须显式赋值，方可使用</td></tr><tr><td>内存加载位置</td><td>堆空间或静态域内</td><td>栈空间</td></tr></tbody></table><p>JavaSE 5.0 中提供了**Varargs(<strong>variable number of arguments</strong>)**机制，允许直接定义能和多个实参相匹配的形参。从而，可以用一种更简单的方式，来传递个数可变的实参。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//JDK 5.0以前：采用数组形参来定义方法，传入多个同一类型变量</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//JDK5.0：采用可变个数形参来定义方法，传入多个同一类型变量</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span><span class="token class-name">String</span>…books<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>说明：</strong></p><ol><li>声明格式：方法名(参数的类型名 ...参数名)</li><li>可变参数：方法参数部分指定类型的参数个数是可变多个：0个，1个或多个</li><li>可变个数形参的方法与同名的方法之间，彼此构成重载</li><li>可变参数方法的使用与方法参数部分使用数组是一致的</li><li>方法的参数部分有可变形参，需要放在形参声明的<strong>最后</strong></li><li>在一个方法的形参位置，最多只能声明<strong>一个</strong>可变个数形参</li></ol><p>为什么java引用类型传的是地址？</p><table><thead><tr><th>修饰符</th><th>类内部</th><th>同一个包</th><th>不同包的子类</th><th>同一个工程</th></tr></thead><tbody><tr><td>private</td><td>Yes</td><td></td><td></td><td></td></tr><tr><td>缺省</td><td>Yes</td><td>Yes</td><td></td><td></td></tr><tr><td>protected</td><td>Yes</td><td>Yes</td><td>Yes</td><td></td></tr><tr><td>public</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr></tbody></table><p>类的属性赋值</p><ul><li><p>赋值的位置：</p><p>① 默认初始化</p><p>② 显式初始化</p><p>③ 构造器中初始化</p><p>④ 通过“对象.属性“或“对象.方法”的方式赋值</p></li><li><p>赋值的先后顺序：</p><p>① - ② - ③ - ④</p></li></ul>',18),p={},e=(0,s(744).Z)(p,[["render",function(n,a){return t}]])},744:(n,a)=>{a.Z=(n,a)=>{for(const[s,t]of a)n[s]=t;return n}}}]);