webpackJsonp([8],{366:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h3",{className:"docs-title"},"快速上手(以webpack打包为例)"),l.default.createElement("p",{className:"docs-desc"},"介绍如何在项目中使用zui-react。"),l.default.createElement("h3",{className:"docs-title"},"react-tap-event-plugin"),l.default.createElement("p",{className:"docs-desc"},"zui-react的大部分组件需要这个插件来实现移动端的tap事件。"),l.default.createElement("p",{className:"docs-desc"},"所以需要在项目的最开始引入这个插件。"),l.default.createElement("pre",{className:"javascript"},"import injectTapEventPlugin from 'react-tap-event-plugin';\n\ninjectTapEventPlugin();"),l.default.createElement("h3",{className:"docs-title"},"以使用Button组件为例"),l.default.createElement("pre",{className:"javascript"},"import React, {Component} from 'react';\nimport Button from 'zui-react/Button';\nimport injectTapEventPlugin from 'react-tap-event-plugin';\nimport 'zui-react/zui-theme-default.css';\n\ninjectTapEventPlugin();\nconst Example = function({props}) = {\n   return (<Button label=\"默认按钮\" />)\n}"),l.default.createElement("p",{className:"docs-desc"},"这里引用组件时使用了 import Button from 'zui-react/Button';"),l.default.createElement("p",{className:"docs-desc"},"也可以使用 import {Button} from 'zui-react';"),l.default.createElement("p",{className:"docs-desc"},"前一种写法打包后的代码量更少"))}}]),t}(u.Component);t.default=i}});