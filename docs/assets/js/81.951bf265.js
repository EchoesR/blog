(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{582:function(o,e,v){"use strict";v.r(e);var _=v(5),t=Object(_.a)({},(function(){var o=this,e=o.$createElement,v=o._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h2",{attrs:{id:"cookie-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-简介"}},[o._v("#")]),o._v(" Cookie 简介")]),o._v(" "),v("p",[o._v("前面说到了 HTTP 是一个无状态的协议，每次 http 请求都是独立、无关的，默认不需要保留状态信息。但有时候需要保存一些状态，怎么办呢？")]),o._v(" "),v("p",[o._v("HTTP 为此引入了 Cookie。Cookie 本质上就是浏览器里面存储的一个很小的文本文件，内部以键值对的方式来存储(在chrome开发者面板的Application这一栏可以看到)。向同一个域名下发送请求，都会携带相同的 Cookie，服务器拿到 Cookie 进行解析，便能拿到客户端的状态。而服务端可以通过响应头中的"),v("code",[o._v("Set-Cookie")]),o._v("字段来对客户端写入"),v("code",[o._v("Cookie")]),o._v("。举例如下:")]),o._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[o._v("// 请求头\nCookie: a=xxx;b=xxx\n// 响应头\nSet-Cookie: a=xxx\nset-Cookie: b=xxx\n")])]),o._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[o._v("1")]),v("br"),v("span",{staticClass:"line-number"},[o._v("2")]),v("br"),v("span",{staticClass:"line-number"},[o._v("3")]),v("br"),v("span",{staticClass:"line-number"},[o._v("4")]),v("br"),v("span",{staticClass:"line-number"},[o._v("5")]),v("br")])]),v("h2",{attrs:{id:"cookie-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-属性"}},[o._v("#")]),o._v(" Cookie 属性")]),o._v(" "),v("h3",{attrs:{id:"生存周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生存周期"}},[o._v("#")]),o._v(" 生存周期")]),o._v(" "),v("p",[o._v("Cookie 的有效期可以通过"),v("strong",[o._v("Expires")]),o._v("和"),v("strong",[o._v("Max-Age")]),o._v("两个属性来设置。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("Expires")]),o._v("即"),v("code",[o._v("过期时间")])]),o._v(" "),v("li",[v("strong",[o._v("Max-Age")]),o._v("用的是一段时间间隔，单位是秒，从浏览器收到报文开始计算。")])]),o._v(" "),v("p",[o._v("若 Cookie 过期，则这个 Cookie 会被删除，并不会发送给服务端。")]),o._v(" "),v("h3",{attrs:{id:"作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[o._v("#")]),o._v(" 作用域")]),o._v(" "),v("p",[o._v("关于作用域也有两个属性: "),v("strong",[o._v("Domain")]),o._v("和"),v("strong",[o._v("path")]),o._v(", 给 "),v("strong",[o._v("Cookie")]),o._v(" 绑定了域名和路径，在发送请求之前，发现域名或者路径和这两个属性不匹配，那么就不会带上 Cookie。值得注意的是，对于路径来说，"),v("code",[o._v("/")]),o._v("表示域名下的任意路径都允许使用 Cookie。")]),o._v(" "),v("h3",{attrs:{id:"安全相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全相关"}},[o._v("#")]),o._v(" 安全相关")]),o._v(" "),v("p",[o._v("如果带上"),v("code",[o._v("Secure")]),o._v("，说明只能通过 HTTPS 传输 cookie。")]),o._v(" "),v("p",[o._v("如果 cookie 字段带上"),v("code",[o._v("HttpOnly")]),o._v("，那么说明只能通过 HTTP 协议传输，不能通过 JS 访问，这也是预防 XSS 攻击的重要手段。")]),o._v(" "),v("p",[o._v("相应的，对于 CSRF 攻击的预防，也有"),v("code",[o._v("SameSite")]),o._v("属性。")]),o._v(" "),v("p",[v("code",[o._v("SameSite")]),o._v("可以设置为三个值，"),v("code",[o._v("Strict")]),o._v("、"),v("code",[o._v("Lax")]),o._v("和"),v("code",[o._v("None")]),o._v("。")]),o._v(" "),v("p",[v("strong",[o._v("a.")]),o._v(" 在"),v("code",[o._v("Strict")]),o._v("模式下，浏览器完全禁止第三方请求携带Cookie。比如请求"),v("code",[o._v("sanyuan.com")]),o._v("网站只能在"),v("code",[o._v("sanyuan.com")]),o._v("域名当中请求才能携带 Cookie，在其他网站请求都不能。")]),o._v(" "),v("p",[v("strong",[o._v("b.")]),o._v(" 在"),v("code",[o._v("Lax")]),o._v("模式，就宽松一点了，但是只能在 "),v("code",[o._v("get 方法提交表单")]),o._v("况或者"),v("code",[o._v("a 标签发送 get 请求")]),o._v("的情况下可以携带 Cookie，其他情况均不能。")]),o._v(" "),v("p",[v("strong",[o._v("c.")]),o._v(" 在"),v("code",[o._v("None")]),o._v("模式下，也就是默认模式，请求会自动携带上 Cookie。")]),o._v(" "),v("h2",{attrs:{id:"cookie-的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的缺点"}},[o._v("#")]),o._v(" Cookie 的缺点")]),o._v(" "),v("ol",[v("li",[v("p",[o._v("容量缺陷。Cookie 的体积上限只有"),v("code",[o._v("4KB")]),o._v("，只能用来存储少量的信息。")])]),o._v(" "),v("li",[v("p",[o._v("性能缺陷。Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ，请求都会携带上完整的 Cookie，这样随着请求数的增多，其实会造成巨大的性能浪费的，因为请求携带了很多不必要的内容。但可以通过"),v("code",[o._v("Domain")]),o._v("和"),v("code",[o._v("Path")]),o._v("指定"),v("strong",[o._v("作用域")]),o._v("来解决。")])]),o._v(" "),v("li",[v("p",[o._v("安全缺陷。由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在 Cookie 的有效期内重新发送给服务器，这是相当危险的。另外，在"),v("code",[o._v("HttpOnly")]),o._v("为 false 的情况下，Cookie 信息能直接通过 JS 脚本来读取。")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);