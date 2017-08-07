webpackJsonp([16],{380:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),u=n(l),c=r(155),m=n(c),f=r(426),d=n(f),p=function(e){function t(){var e,r,n,i;a(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={completed:0},i=r,o(n,i)}return i(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)}),this.timer=setTimeout(function(){return e.progress(5)},1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"progress",value:function(e){var t=this;if(e>100)this.setState({completed:100});else{this.setState({completed:e});var r=10*Math.random();this.timer=setTimeout(function(){return t.progress(e+r)},100)}}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h3",{className:"docs-title"},"Progress分为圆形和条形两种"),u.default.createElement("p",{className:"docs-desc"},"圆形的例子如下"),u.default.createElement(m.default,null),u.default.createElement("pre",{className:"react"},"import CircularProgress from 'zui-react/CircularProgress';\n\n<CircularProgress />\n            "),u.default.createElement("h3",{className:"docs-title"},"可以设置size和thickness来自定义大小"),u.default.createElement(m.default,{size:60,thickness:5}),u.default.createElement("pre",{className:"react"},"import CircularProgress from 'zui-react/CircularProgress';\n\n<CircularProgress size={60} thickness={5} />\n            "),u.default.createElement("h3",{className:"docs-title"},"可以自己定义完成度"),u.default.createElement("p",{className:"docs-desc"},"设置mode为determinate"),u.default.createElement(m.default,{mode:"determinate",value:this.state.completed}),u.default.createElement("pre",{className:"react"},"\nimport CircularProgress from 'zui-react/CircularProgress';\n\nstate = {\n  completed: 0,\n}\n\ncomponentDidMount() {\n  this.timer = setTimeout(() => this.progress(5), 1000);\n}\n\ncomponentWillUnmount() {\n  clearTimeout(this.timer);\n}\n\nprogress(completed) {\n  if (completed > 100) {\n    this.setState({completed: 100});\n  } else {\n    this.setState({completed});\n    const diff = Math.random() * 10;\n    this.timer = setTimeout(() => this.progress(completed + diff), 100);\n  }\n}\n\n<CircularProgress\n  mode=\"determinate\"\n  value={this.state.completed}\n/>\n            "),u.default.createElement("h3",{className:"docs-title"},"线性进度条LinearProgress"),u.default.createElement(d.default,null),u.default.createElement("pre",{className:"react"},"import LinearProgress from 'zui-react/LinearProgress';';\n\n<LinearProgress />\n            "),u.default.createElement("h3",{className:"docs-title"},"线性进度条同样可以自己定义完成度"),u.default.createElement(d.default,{mode:"determinate",value:this.state.completed}),u.default.createElement("pre",{className:"react"},"import LinearProgress from 'zui-react/LinearProgress';\n\nstate = {\n  completed: 0,\n}\n\ncomponentDidMount() {\n  this.timer = setTimeout(() => this.progress(5), 1000);\n}\n\ncomponentWillUnmount() {\n  clearTimeout(this.timer);\n}\n\nprogress(completed) {\n  if (completed > 100) {\n    this.setState({completed: 100});\n  } else {\n    this.setState({completed});\n    const diff = Math.random() * 10;\n    this.timer = setTimeout(() => this.progress(completed + diff), 100);\n  }\n}\n\n<LinearProgress mode=\"determinate\" value={this.state.completed} />\n            "))}}]),t}(l.Component);t.default=p},426:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(427),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},427:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,r){var n=Math.min(Math.max(t,e),r),a=r-t;return Math.round((n-t)/a*1e4)/1e4*100}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),m=r(2),f=n(m),d=r(16),p=n(d),h=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.timers={},this.timers.bar1=this.barUpdate("bar1",0,this.bar1,[[-35,100],[100,-90]],0),this.timers.bar2=setTimeout(function(){e.barUpdate("bar2",0,e.bar2,[[-200,100],[107,-8]],0)},850)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timers.bar1),clearTimeout(this.timers.bar2)}},{key:"barUpdate",value:function(e,t,r,n,a){var o=this;"indeterminate"===this.props.mode&&(a=a||420,t=t||0,t%=4,0===t?(r.style.left=n[0][0]+"%",r.style.right=n[0][1]+"%"):1===t?r.style.transitionDuration="840ms":2===t?(r.style.left=n[1][0]+"%",r.style.right=n[1][1]+"%"):3===t&&(r.style.transitionDuration="0ms"),this.timers[e]=setTimeout(function(){return o.barUpdate(e,t+1,r,n)},a))}},{key:"render",value:function(){var e=this,t=this.props,r=t.style,n=t.mode,a=t.value,o=t.max,i=t.min,l={};"determinate"===n&&(l.width=s(a,i,o)+"%");var u=(0,p.default)({"zui-linear-progress-bar":!0,determinated:"determinate"===n}),m=(0,p.default)({"zui-linear-progress-bar-first":!0,indeterminated:"indeterminate"===n}),f=(0,p.default)({"zui-linear-progress-bar-second":!0,indeterminated:"indeterminate"===n});return c.default.createElement("div",{style:r,className:"zui-linear-progress"},c.default.createElement("div",{className:u,style:l},c.default.createElement("div",{ref:function(t){return e.bar1=t},className:m}),c.default.createElement("div",{ref:function(t){return e.bar2=t},className:f})))}}]),t}(u.Component);h.propTypes={color:f.default.string,max:f.default.number,min:f.default.number,mode:f.default.oneOf(["determinate","indeterminate"]),style:f.default.object,value:f.default.number},h.defaultProps={mode:"indeterminate",value:0,min:0,max:100},t.default=h}});