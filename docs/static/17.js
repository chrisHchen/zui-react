webpackJsonp([17],{369:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(1),i=n(u),s=o(400),f=n(s),p=["import React, {Component} from 'react';","import FontIcon from 'zui-react/FontIcon';","\n","<FontIcon",'  className="iconfont icon-iphone"','  style={{marginRight: "15px"}}',"/>","<FontIcon",'  className="iconfont icon-iphone"','  color="red"','  style={{marginRight: "15px"}} />',"<FontIcon",'  className="iconfont icon-iphone"','  color="blue"','  hoverColor="green"','  style={{marginRight: "15px"}}',"/>"].join("\n"),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h3",{className:"docs-title"},"FontIcon"),i.default.createElement("p",{className:"docs-desc"},"根据class来设置icon内容，并可设置color和hoverColor属性"),i.default.createElement(f.default,{className:"iconfont icon-iphone",style:{marginRight:"15px"}}),i.default.createElement(f.default,{className:"iconfont icon-iphone",color:"red",style:{marginRight:"15px"}}),i.default.createElement(f.default,{className:"iconfont icon-iphone",color:"blue",hoverColor:"green",style:{marginRight:"15px"}}),i.default.createElement("pre",{className:"react"},p))}}]),t}(u.Component);t.default=d},400:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(401),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=r.default},401:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=o(1),p=n(f),d=o(2),h=n(d),y=o(16),v=n(y),m=function(e){function t(){var e,o,n,r;l(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return o=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={hovered:!1},n.handleMouseLeave=function(e){void 0!==n.props.hoverColor&&n.setState({hovered:!1}),n.props.onMouseLeave(e)},n.handleMouseEnter=function(e){void 0!==n.props.hoverColor&&n.setState({hovered:!0}),n.props.onMouseEnter(e)},r=o,c(n,r)}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.hoverColor,o=e.color,n=(e.onMouseLeave,e.onMouseEnter,e.style),l=e.className,c=a(e,["hoverColor","color","onMouseLeave","onMouseEnter","style","className"]),u=o||"currentColor",s=t||u,f=i({},n,{color:this.state.hovered?s:u}),d=(0,v.default)(r({"zui-fonticon":!0},l,!0));return p.default.createElement("span",i({},c,{className:d,style:f,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter}))}}]),t}(f.Component);m.propTypes={className:h.default.string,color:h.default.string,hoverColor:h.default.string,onMouseEnter:h.default.func,onMouseLeave:h.default.func,style:h.default.object},m.defaultProps={onMouseEnter:function(){},onMouseLeave:function(){},style:{}},t.default=m}});