webpackJsonp([1],{367:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o(1),i=r(u),s=o(373),f=r(s),p=o(371),d=r(p),h=o(94),m=r(h),v=['import Avatar from "zui-react/Avatar"',"\n",'<Avatar src="https://facebook.github.io/react/img/logo.svg"/>'].join("\n"),b=['import Avatar from "zui-react/Avatar";',"\n",'<Avatar src="https://facebook.github.io/react/img/logo.svg"',"   size={30}",'   style={{marginLeft:"20px"}}',"/>"].join("\n"),y=["import FontIcon from 'zui-react/FontIcon';","\n","<Avatar","   icon={",'     <FontIcon className="iconfont icon-iphone" />',"   }",'   backgroundColor="black"',"/>"].join("\n"),g=["<Avatar","   icon={",'    <SvgIcon color="red" hoverColor="green">','      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />',"    </SvgIcon>","   }","/>"].join("\n"),E=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h3",{className:"docs-title"},"基本使用"),i.default.createElement("p",{className:"docs-desc"},"设置src为背景图片。"),i.default.createElement(f.default,{src:"https://facebook.github.io/react/img/logo.svg"}),i.default.createElement("pre",{className:"react"},v),i.default.createElement("h3",{className:"docs-title"},"设置size及style"),i.default.createElement(f.default,{src:"https://facebook.github.io/react/img/logo.svg",size:30,style:{marginLeft:"20px"}}),i.default.createElement("pre",{className:"react"},b),i.default.createElement("h3",{className:"docs-title"},"设置文字"),i.default.createElement(f.default,null,"TAT"),i.default.createElement("pre",{className:"react"},"<Avatar>TAT</Avatar>"),i.default.createElement("pre",{className:"react"},b),i.default.createElement("h3",{className:"docs-title"},"以FontIcon为内容"),i.default.createElement("p",{className:"docs-desc"},"本文档中引入了某iconfont字体集。"),i.default.createElement("p",{className:"docs-desc"},"可以直接设置color和backgroundColor属性来设置前景色和背景色。"),i.default.createElement(f.default,{icon:i.default.createElement(d.default,{className:"iconfont icon-iphone"}),backgroundColor:"black"}),i.default.createElement(f.default,{icon:i.default.createElement(d.default,{className:"iconfont icon-iphone"}),color:"black",style:{marginLeft:"20px"}}),i.default.createElement("pre",{className:"react"},y),i.default.createElement("h3",{className:"docs-title"},"以SvgIcon为内容"),i.default.createElement(f.default,{icon:i.default.createElement(m.default,{color:"red",hoverColor:"green"},i.default.createElement("path",{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"}))}),i.default.createElement("pre",{className:"react"},g))}}]),t}(u.Component);t.default=E},371:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(372),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=n.default},372:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=o(1),p=r(f),d=o(2),h=r(d),m=o(16),v=r(m),b=function(e){function t(){var e,o,r,n;l(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return o=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={hovered:!1},r.handleMouseLeave=function(e){void 0!==r.props.hoverColor&&r.setState({hovered:!1}),r.props.onMouseLeave(e)},r.handleMouseEnter=function(e){void 0!==r.props.hoverColor&&r.setState({hovered:!0}),r.props.onMouseEnter(e)},n=o,c(r,n)}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.hoverColor,o=e.color,r=(e.onMouseLeave,e.onMouseEnter,e.style),l=e.className,c=a(e,["hoverColor","color","onMouseLeave","onMouseEnter","style","className"]),u=o||"currentColor",s=t||u,f=i({},r,{color:this.state.hovered?s:u}),d=(0,v.default)(n({"zui-fonticon":!0},l,!0));return p.default.createElement("span",i({},c,{className:d,style:f,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter}))}}]),t}(f.Component);b.propTypes={className:h.default.string,color:h.default.string,hoverColor:h.default.string,onMouseEnter:h.default.func,onMouseLeave:h.default.func,style:h.default.object},b.defaultProps={onMouseEnter:function(){},onMouseLeave:function(){},style:{}},t.default=b},373:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(374),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=n.default},374:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=o(1),p=r(f),d=o(2),h=r(d),m=o(16),v=r(m),b=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor,o=e.icon,r=e.src,l=e.style,c=e.size,u=e.color,s=e.className,d=a(e,["backgroundColor","icon","src","style","size","color","className"]),h=(0,v.default)(n({"zui-avator-wrap":!0},s,!!s)),m={fontSize:c/2+"px"},b={fontSize:.6*c+"px"};return t&&(m.backgroundColor=t),c&&(m.width=m.height=c+"px",b.width=b.height=.6*c+"px",b.margin=.2*c+"px"),u&&(m.color=u),m=i({},l,m),r?p.default.createElement("img",i({style:m},d,{src:r,className:h})):p.default.createElement("div",i({},d,{style:m,className:h}),o&&(0,f.cloneElement)(o,{color:u||o.props.color||"#fff",style:i(b,o.props.style)}),this.props.children)}}]),t}(f.Component);b.propTypes={backgroundColor:h.default.string,children:h.default.node,className:h.default.string,color:h.default.string,icon:h.default.element,size:h.default.number,src:h.default.string,style:h.default.object},b.defaultProps={size:40},t.default=b}});