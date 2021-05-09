(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{550:function(e,v,_){"use strict";_.r(v);var t=_(5),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("在这里，如果你还没有接触过 Promise, 务必去看看 "),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN 文档"),_("OutboundLink")],1),e._v("，了解使用方式，不然后面很会懵。")]),e._v(" "),_("p",[e._v("Promise 中的执行函数是同步进行的，但是里面存在着异步操作，在异步操作结束后会调用 resolve 方法，或者中途遇到错误调用 reject 方法，这两者都是作为微任务进入到 EventLoop 中。但是你有没有想过，Promise 为什么要引入微任务的方式来进行回调操作？")]),e._v(" "),_("h2",{attrs:{id:"解决方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[e._v("#")]),e._v(" 解决方式")]),e._v(" "),_("p",[e._v("回到问题本身，其实就是如何处理回调的问题。总结起来有三种方式:")]),e._v(" "),_("ol",[_("li",[e._v("使用同步回调，直到异步任务进行完，再进行后面的任务。")]),e._v(" "),_("li",[e._v("使用异步回调，将回调函数放在进行"),_("code",[e._v("宏任务队列")]),e._v("的队尾。")]),e._v(" "),_("li",[e._v("使用异步回调，将回调函数放到"),_("code",[e._v("当前宏任务中")]),e._v("的最后面。")])]),e._v(" "),_("h2",{attrs:{id:"优劣对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优劣对比"}},[e._v("#")]),e._v(" 优劣对比")]),e._v(" "),_("p",[e._v("第一种方式显然不可取，因为同步的问题非常明显，会让整个脚本阻塞住，当前任务等待，后面的任务都无法得到执行，而这部分"),_("code",[e._v("等待的时间")]),e._v("是可以拿来完成其他事情的，导致 CPU 的利用率非常低，而且还有另外一个致命的问题，就是无法实现"),_("code",[e._v("延迟绑定")]),e._v("的效果。")]),e._v(" "),_("p",[e._v("如果采用第二种方式，那么执行回调(resolve/reject)的时机应该是在前面"),_("code",[e._v("所有的宏任务")]),e._v("完成之后，倘若现在的任务队列非常长，那么回调迟迟得不到执行，造成"),_("code",[e._v("应用卡顿")]),e._v("。")]),e._v(" "),_("p",[e._v("为了解决上述方案的问题，另外也考虑到"),_("code",[e._v("延迟绑定")]),e._v("的需求，Promise 采取第三种方式, 即"),_("code",[e._v("引入微任务")]),e._v(", 即把 resolve(reject) 回调的执行放在当前宏任务的末尾。")]),e._v(" "),_("p",[e._v("这样，利用"),_("code",[e._v("微任务")]),e._v("解决了两大痛点:")]),e._v(" "),_("ul",[_("li",[_("ol",[_("li",[e._v("采用"),_("strong",[e._v("异步回调")]),e._v("替代同步回调解决了浪费 CPU 性能的问题。")])])]),e._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[e._v("放到"),_("strong",[e._v("当前宏任务最后")]),e._v("执行，解决了回调执行的实时性问题。")])])])]),e._v(" "),_("p",[e._v("好，Promise 的基本实现思想已经讲清楚了，相信大家已经知道了它"),_("code",[e._v("为什么这么设计")]),e._v("，接下来就让我们一步步弄清楚它内部到底是"),_("code",[e._v("怎么设计的")]),e._v("。")])])}),[],!1,null,null,null);v.default=r.exports}}]);