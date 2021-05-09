const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const NET_PATH = '/blogs/net'
const INTERVIEW_PATH = '/blogs/interview'
const BROWSER_PATH = '/blogs/browser'
const VUE_PATH = '/blogs/vue'
const WEBPACK_PATH = '/blogs/webpack'

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('JS相关', JAVASCRIPT_PATH)],
  [BROWSER_PATH]: [createSideBarConfig('浏览器', BROWSER_PATH)],
  [NET_PATH]: [createSideBarConfig("网络相关", NET_PATH)],
  [VUE_PATH]: [createSideBarConfig('Vue', VUE_PATH)],
  [INTERVIEW_PATH]: [createSideBarConfig('面试题', INTERVIEW_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS相关', CSS_PATH)],
  [WEBPACK_PATH]: [createSideBarConfig('webpack', WEBPACK_PATH)]
}