(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{513:function(s,a,e){"use strict";e.r(a);var t=e(5),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("这是一个可以无限难的问题。出这个题目的目的就是为了考察你的 web 基础深入到什么程度。由于水平和篇幅有限，在这里我将把其中一些重要的过程给大家梳理一遍，相信能在绝大部分的情况下给出一个比较惊艳的答案。")]),s._v(" "),e("p",[s._v("这里我提前声明，由于是一个综合性非常强的问题，可能会在某一个点上深挖出非常多的细节，我个人觉得学习是一个循序渐进的过程，在明白了整体过程后再去自己研究这些细节，会对整个知识体系有更深的理解。同时，关于延申出来的细节点我都有参考资料，看完这篇之后不妨再去深入学习一下，扩展知识面。")]),s._v(" "),e("p",[s._v("好，正题开始。")]),s._v(" "),e("p",[s._v("此时此刻，你在浏览器地址栏输入了百度的网址:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("https"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("www.baidu.com")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"网络请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[s._v("#")]),s._v(" 网络请求")]),s._v(" "),e("h3",{attrs:{id:"_1-构建请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建请求"}},[s._v("#")]),s._v(" 1. 构建请求")]),s._v(" "),e("p",[s._v("浏览器会构建请求行:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求方法是GET，路径为根路径，HTTP协议版本为1.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_2-查找强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-查找强缓存"}},[s._v("#")]),s._v(" 2. 查找强缓存")]),s._v(" "),e("p",[s._v("先检查强缓存，如果命中直接使用，否则进入下一步。关于强缓存，如果不清楚可以参考上一篇文章。")]),s._v(" "),e("h3",{attrs:{id:"_3-dns解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns解析"}},[s._v("#")]),s._v(" 3. DNS解析")]),s._v(" "),e("p",[s._v("由于我们输入的是域名，而数据包是通过"),e("code",[s._v("IP地址")]),s._v("传给对方的。因此我们需要得到域名对应的"),e("code",[s._v("IP地址")]),s._v("。这个过程需要依赖一个服务系统，这个系统将域名和 IP 一一映射，我们将这个系统就叫做"),e("strong",[s._v("DNS")]),s._v("（域名系统）。得到具体 IP 的过程就是"),e("code",[s._v("DNS")]),s._v("解析。")]),s._v(" "),e("p",[s._v("当然，值得注意的是，浏览器提供了"),e("strong",[s._v("DNS数据缓存功能")]),s._v("。即如果一个域名已经解析过，那会把解析的结果缓存下来，下次处理直接走缓存，不需要经过 "),e("code",[s._v("DNS解析")]),s._v("。")]),s._v(" "),e("p",[s._v("另外，如果不指定端口的话，默认采用对应的 IP 的 80 端口。")]),s._v(" "),e("h3",{attrs:{id:"_4-建立-tcp-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-建立-tcp-连接"}},[s._v("#")]),s._v(" 4. 建立 TCP 连接")]),s._v(" "),e("p",[s._v("这里要提醒一点，Chrome 在同一个域名下要求同时最多只能有 6 个 TCP 连接，超过 6 个的话剩下的请求就得等待。")]),s._v(" "),e("p",[s._v("假设现在不需要等待，我们进入了 TCP 连接的建立阶段。首先解释一下什么是 TCP:")]),s._v(" "),e("blockquote",[e("p",[s._v("TCP（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。")])]),s._v(" "),e("p",[s._v("建立 "),e("code",[s._v("TCP连接")]),s._v("经历了下面三个阶段:")]),s._v(" "),e("ol",[e("li",[s._v("通过"),e("strong",[s._v("三次握手")]),s._v("(即总共发送3个数据包确认已经建立连接)建立客户端和服务器之间的连接。")]),s._v(" "),e("li",[s._v("进行数据传输。这里有一个重要的机制，就是接收方接收到数据包后必须要向发送方"),e("code",[s._v("确认")]),s._v(", 如果发送方没有接到这个"),e("code",[s._v("确认")]),s._v("的消息，就判定为数据包丢失，并重新发送该数据包。当然，发送的过程中还有一个优化策略，就是把"),e("code",[s._v("大的数据包拆成一个个小包")]),s._v("，依次传输到接收方，接收方按照这个小包的顺序把它们"),e("code",[s._v("组装")]),s._v("成完整数据包。")]),s._v(" "),e("li",[s._v("断开连接的阶段。数据传输完成，现在要断开连接了，通过"),e("strong",[s._v("四次挥手")]),s._v("来断开连接。")])]),s._v(" "),e("p",[s._v("读到这里，你应该明白 TCP 连接通过什么手段来保证数据传输的可靠性，一是"),e("code",[s._v("三次握手")]),s._v("确认连接，二是"),e("code",[s._v("数据包校验")]),s._v("保证数据到达接收方，三是通过"),e("code",[s._v("四次挥手")]),s._v("断开连接。")]),s._v(" "),e("p",[s._v("当然，如果再深入地问，比如"),e("strong",[s._v("为什么要三次握手，两次不行吗？第三次握手失败了怎么办？为什么要四次挥手")]),s._v("等等这一系列的问题，涉及计算机网络的基础知识，比较底层，但是也是非常重要的细节，希望你能好好研究一下，另外这里有一篇不错的文章，"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/86426969",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击进入相应的推荐文章"),e("OutboundLink")],1),s._v("，相信这篇文章能给你启发。")]),s._v(" "),e("h3",{attrs:{id:"_5-发送-http-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-发送-http-请求"}},[s._v("#")]),s._v(" 5.发送 HTTP 请求")]),s._v(" "),e("p",[s._v("现在"),e("code",[s._v("TCP连接")]),s._v("建立完毕，浏览器可以和服务器开始通信，即开始发送 HTTP 请求。浏览器发 HTTP 请求要携带三样东西:"),e("strong",[s._v("请求行")]),s._v("、"),e("strong",[s._v("请求头")]),s._v("和"),e("strong",[s._v("请求体")]),s._v("。")]),s._v(" "),e("p",[s._v("首先，浏览器会向服务器发送"),e("strong",[s._v("请求行")]),s._v(",关于"),e("strong",[s._v("请求行")]),s._v("， 我们在这一部分的第一步就构建完了，贴一下内容:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求方法是GET，路径为根路径，HTTP协议版本为1.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("结构很简单，由"),e("strong",[s._v("请求方法")]),s._v("、"),e("strong",[s._v("请求URI")]),s._v("和"),e("strong",[s._v("HTTP版本协议")]),s._v("组成。")]),s._v(" "),e("p",[s._v("同时也要带上"),e("strong",[s._v("请求头")]),s._v("，比如我们之前说的"),e("strong",[s._v("Cache-Control")]),s._v("、"),e("strong",[s._v("If-Modified-Since")]),s._v("、"),e("strong",[s._v("If-None-Match")]),s._v("都由可能被放入请求头中作为缓存的标识信息。当然了还有一些其他的属性，列举如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: keep-alive\nCookie: /* 省略cookie信息 */\nHost: www.baidu.com\nPragma: no-cache\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("最后是请求体，请求体只有在"),e("code",[s._v("POST")]),s._v("方法下存在，常见的场景是"),e("strong",[s._v("表单提交")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"网络响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络响应"}},[s._v("#")]),s._v(" 网络响应")]),s._v(" "),e("p",[s._v("HTTP 请求到达服务器，服务器进行对应的处理。最后要把数据传给浏览器，也就是返回网络响应。")]),s._v(" "),e("p",[s._v("跟请求部分类似，网络响应具有三个部分:"),e("strong",[s._v("响应行")]),s._v("、"),e("strong",[s._v("响应头")]),s._v("和"),e("strong",[s._v("响应体")]),s._v("。")]),s._v(" "),e("p",[s._v("响应行类似下面这样:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由"),e("code",[s._v("HTTP协议版本")]),s._v("、"),e("code",[s._v("状态码")]),s._v("和"),e("code",[s._v("状态描述")]),s._v("组成。")]),s._v(" "),e("p",[s._v("响应头包含了服务器及其返回数据的一些信息, 服务器生成数据的时间、返回的数据类型以及对即将写入的Cookie信息。")]),s._v(" "),e("p",[s._v("举例如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Cache-Control: no-cache\nConnection: keep-alive\nContent-Encoding: gzip\nContent-Type: text/html;charset=utf-8\nDate: Wed, 04 Dec 2019 12:29:13 GMT\nServer: apache\nSet-Cookie: rsv_i=f9a0SIItKqzv7kqgAAgphbGyRts3RwTg%2FLyU3Y5Eh5LwyfOOrAsvdezbay0QqkDqFZ0DfQXby4wXKT8Au8O7ZT9UuMsBq2k; path=/; domain=.baidu.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("响应完成之后怎么办？TCP 连接就断开了吗？")]),s._v(" "),e("p",[s._v("不一定。这时候要判断"),e("code",[s._v("Connection")]),s._v("字段, 如果请求头或响应头中包含"),e("strong",[s._v("Connection: Keep-Alive")]),s._v("，表示建立了持久连接，这样"),e("code",[s._v("TCP")]),s._v("连接会一直保持，之后请求统一站点的资源会复用这个连接。")]),s._v(" "),e("p",[s._v("否则断开"),e("code",[s._v("TCP")]),s._v("连接, 请求-响应流程结束。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("到此，我们来总结一下主要内容，也就是浏览器端的网络请求过程：")]),s._v(" "),e("p",[e("img",{attrs:{src:s.$withBase("/week10/2.jpg"),alt:"project"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);