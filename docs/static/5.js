webpackJsonp([5],{365:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h3",{className:"docs-title"},"npm 安装"),l.default.createElement("p",{className:"docs-desc"},"推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。"),l.default.createElement("pre",{className:"Bash"},"npm install --save zui-react"),l.default.createElement("h3",{className:"docs-title"},"CDN"),l.default.createElement("p",{className:"docs-desc"},"目前可以通过 unpkg.com/zui-react 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。"),l.default.createElement("pre",{className:"html"},'\x3c!-- 引入样式 --\x3e\n<link rel="stylesheet" href="https://unpkg.com/zui-react/zui-theme-default.css">\n\x3c!-- 引入组件库 --\x3e\n<script src="https://unpkg.com/zui-react/zui-react.umd.js"><\/script>'))}}]),t}(u.Component);t.default=s}});