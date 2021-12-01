"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5bbfe21e",
  "path": "/ErrorCollect.html",
  "title": "Vue",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 1,
      "title": "Vue",
      "slug": "vue",
      "children": []
    },
    {
      "level": 1,
      "title": "Maven",
      "slug": "maven",
      "children": [
        {
          "level": 3,
          "title": "parent标签出现问题",
          "slug": "parent标签出现问题",
          "children": []
        },
        {
          "level": 3,
          "title": "项目依赖在仓库（本地、远程）中一定有，但在pom文件中依然报错",
          "slug": "项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "ErrorCollect.md",
  "git": {
    "updatedTime": 1638320503000,
    "contributors": [
      {
        "name": "oyw6719119",
        "email": "1254691710@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ErrorCollect_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/ErrorCollect.html.vue?vue&type=template&id=b0344880



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_relativePath = (0,external_vue_.resolveComponent)("relativePath")

  _push(`<!--[--><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><p>TypeError: this.getOptions is not a function：版本不兼容webpack</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当前vue的环境不支持解析template，需要换个环境，具体查看Vue的笔记</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><a href="https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4" target="_blank" rel="noopener noreferrer">安装插件`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>vue与vue-template-compiler版本不一致，重装</p><h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h1><h3 id="parent标签出现问题" tabindex="-1"><a class="header-anchor" href="#parent标签出现问题" aria-hidden="true">#</a> parent标签出现问题</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;parent.relativePath&#39;</span> of POM xxx, please verify your project structure
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>要解决这个问题的方法也很简单，在parent标签下添加一个`)
  _push((0,server_renderer.ssrRenderComponent)(_component_relativePath, null, null, _parent))
  _push(`标签即可。<a href="https://blog.csdn.net/qq_45193304/article/details/108092077" target="_blank" rel="noopener noreferrer">参考`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.xxx.yyy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>xx-yyycommon-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错" tabindex="-1"><a class="header-anchor" href="#项目依赖在仓库-本地、远程-中一定有-但在pom文件中依然报错" aria-hidden="true">#</a> 项目依赖在仓库（本地、远程）中一定有，但在pom文件中依然报错</h3><p>在idea的maven设置中更新索引</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202111301722404.png" alt="image-20211130172210912"></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/ErrorCollect.html.vue?vue&type=template&id=b0344880

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/ErrorCollect.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const ErrorCollect_html = (__exports__);

/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ })

};
;
//# sourceMappingURL=795.app.js.map