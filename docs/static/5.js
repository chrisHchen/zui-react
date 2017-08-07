webpackJsonp([5],{374:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),s=n(393),f=o(s),p=n(402),d=o(p),h=["import React, {Component} from 'react';","import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';","\n","<Dropdown","  anchorEl={","    <Button",'      onClick={() => console.log("button click")}','      type="primary"','      label="下拉菜单1"',"    />","  }",'  anchorAlign="middle"',"  onChange={(event, value) => console.log(event.target, value)}",">","  <DropdownMenu",'    className="tt"','    onClick={() => console.log("click")}',"  >","    <DropdownMenuItem",'      className="itts"',"      value={1}","      onTouchTap={() => {",'        console.log("tap");',"      }}","    >","      <div>menu1</div>","    </DropdownMenuItem>","    <DropdownMenuItem",'      className="itts"',"      value={2}","    >","      <div>menu2</div>","    </DropdownMenuItem>","  </DropdownMenu>","</Dropdown>"].join("\n"),y=["import React, {Component} from 'react';","import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';","\n","<Dropdown","  anchorEl={","    <Button",'      type="info"','      label="下拉菜单2"',"    />","  }",'  trigger="click"','  anchorAlign="left"',"  onChange={(event, value) => console.log(event.target, value)}",">","  <DropdownMenu",'    onMouseEnter={() => console.log("onMouseEnter")}',"  >","{","  Array.from({length: 4}).map((_, index) =>",'    (<DropdownMenuItem className="itts" value={index} key={index}>',"      <div>menu{index}</div>","    </DropdownMenuItem>)","  )","}","  </DropdownMenu>","</Dropdown>"].join("\n"),m=["import React, {Component} from 'react';","import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';","\n","<Dropdown","  hideOnClick={false}","  anchorEl={","    <Button",'      type="warning"','      label="点击后不隐藏菜单"',"    />","  }",'  trigger="click"','  anchorAlign="left"',"  onChange={(event, value) => console.log(event.target, value)}",">","  <DropdownMenu",'    onMouseEnter={() => console.log("onMouseEnter")}',"  >","{","  Array.from({length: 4}).map((_, index) =>",'    (<DropdownMenuItem className="itts" value={index} key={index}>',"      <div>menu{index}</div>","    </DropdownMenuItem>)","  )","}","  </DropdownMenu>","</Dropdown>"].join("\n"),v=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h3",{className:"docs-title"},"基本用法"),c.default.createElement("p",{className:"docs-desc"},"通过设置anchorEl来设置Dropdown的着陆点"),c.default.createElement("p",{className:"docs-desc"},"通过anchorAlign和targetAlign来设置Dropdown与着陆点的对齐方式：可选项left, middle, right,默认为middle"),c.default.createElement("p",{className:"docs-desc"},"通过trigger设置触发条件：选项为click, hover, 默认为hover"),c.default.createElement("p",{className:"docs-desc"},"通过onChange设置选中dropDown后的回调函数:调用时传2个参数：原生事件对象和选中菜单的value"),c.default.createElement(d.default,{anchorEl:c.default.createElement(f.default,{onClick:function(){return console.log("button click")},type:"primary",label:"下拉菜单1"}),anchorAlign:"middle",onChange:function(e,t){return console.log(e.target,t)}},c.default.createElement(p.DropdownMenu,{className:"tt",onClick:function(){return console.log("click")}},c.default.createElement(p.DropdownMenuItem,{className:"itts",value:1,onTouchTap:function(){console.log("tap")}},c.default.createElement("div",null,"menu1")),c.default.createElement(p.DropdownMenuItem,{className:"itts",value:2},c.default.createElement("div",null,"menu2")))),c.default.createElement("pre",{className:"react"},h),c.default.createElement("h3",{className:"docs-title"},"通过click触发,并设置anchorAlign为left"),c.default.createElement(d.default,{anchorEl:c.default.createElement(f.default,{type:"info",label:"下拉菜单2"}),trigger:"click",anchorAlign:"left",onChange:function(e,t){return console.log(e.target,t)}},c.default.createElement(p.DropdownMenu,{onMouseEnter:function(){return console.log("onMouseEnter")}},Array.from({length:4}).map(function(e,t){return c.default.createElement(p.DropdownMenuItem,{className:"itts",value:t,key:t},c.default.createElement("div",null,"menu",t))}))),c.default.createElement("pre",{className:"react"},y),c.default.createElement("h3",{className:"docs-title"},"hideOnClick"),c.default.createElement("p",{className:"docs-desc"},"设置hideOnClick为false则点击后不隐藏菜单"),c.default.createElement(d.default,{hideOnClick:!1,anchorEl:c.default.createElement(f.default,{type:"warning",label:"点击后不隐藏菜单"}),align:"middle",onChange:function(e,t){return console.log(e.target,t)}},c.default.createElement(p.DropdownMenu,null,Array.from({length:4}).map(function(e,t){return c.default.createElement(p.DropdownMenuItem,{className:"itts",value:t,key:t},c.default.createElement("div",null,"menu",t))}))),c.default.createElement("pre",{className:"react"},m))}}]),t}(u.Component);t.default=v},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(387),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default},387:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),f=o(s),p=n(2),d=o(p),h=n(42),y=o(h),m=n(148),v=o(m),g=n(388),b=o(g),w=n(93),O=o(w),E=n(389),_=o(E),C=n(391),k=o(C),j=n(392),M=n(147),P=o(M),T={root:{display:"none"}},A=function(e){function t(e,n){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.renderLayer=function(){var e=o.props,t=e.animated,n=e.animation,a=(e.anchorEl,e.anchorOrigin,e.autoCloseWhenOffScreen,e.canAutoPosition,e.children),i=(e.onRequestClose,e.style),l=e.targetOrigin,c=(e.useLayerForClickAway,e.trigger,r(e,["animated","animation","anchorEl","anchorOrigin","autoCloseWhenOffScreen","canAutoPosition","children","onRequestClose","style","targetOrigin","useLayerForClickAway","trigger"])),s=i;if(!t)return s={position:"fixed"},o.state.open?f.default.createElement("div",u({style:u(s,i)},c),a):null;var p=n||k.default;return f.default.createElement(p,u({targetOrigin:l,style:s,open:o.state.open&&!o.state.closing},c),a)},o.componentClickAway=function(e){e.preventDefault(),("click"===o.props.trigger||!P.default.isDescendant(o.props.anchorEl,e.target)&&o.props.anchorEl!==e.target)&&o.requestClose("clickAway")},o.setPlacement=function(e){if(o.state.open&&o.layer.getLayer()){var t=o.layer.getLayer().children[0];if(t){var n=o.props,r=n.targetOrigin,a=n.anchorOrigin,i=o.props.anchorEl||o.anchorEl,l=o.getAnchorPosition(i),u=o.getTargetPosition(t),c={top:l[a.vertical]-u[r.vertical],left:l[a.horizontal]-u[r.horizontal]};e&&o.props.autoCloseWhenOffScreen&&o.autoCloseWhenOffScreen(l),o.props.canAutoPosition&&(u=o.getTargetPosition(t),c=o.applyAutoPositionIfNeeded(l,u,r,a,c)),t.style.top=Math.max(0,c.top)+"px",t.style.left=Math.max(0,c.left)+"px",t.style.maxHeight=window.innerHeight+"px"}}},o.handleResize=(0,_.default)(o.setPlacement,100),o.handleScroll=(0,_.default)(o.setPlacement.bind(o,!0),50),o.state={open:e.open,closing:!1},o}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.setPlacement()}},{key:"componentWillReceiveProps",value:function(e){e.open!==this.props.open&&(e.open?(clearTimeout(this.timeout),this.timeout=null,this.anchorEl=e.anchorEl||this.props.anchorEl,this.setState({open:!0,closing:!1})):e.animated?this.gracefullyClose():this.setState({open:!1}))}},{key:"componentDidUpdate",value:function(){this.setPlacement()}},{key:"componentWillUnmount",value:function(){this.handleResize.cancel(),this.handleScroll.cancel(),this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},{key:"gracefullyClose",value:function(){var e=this;null===this.timeout&&(this.setState({closing:!0}),this.timeout=setTimeout(function(){e.setState({open:!1},function(){e.timeout=null})},500))}},{key:"requestClose",value:function(e){this.gracefullyClose(),this.props.onRequestClose&&this.props.onRequestClose(e)}},{key:"getAnchorPosition",value:function(e){e||(e=y.default.findDOMNode(this));var t=e.getBoundingClientRect(),n={top:t.top,left:t.left,width:e.offsetWidth,height:e.offsetHeight};return n.right=t.right||n.left+n.width,(0,j.isIOS)()&&"INPUT"===document.activeElement.tagName?n.bottom=(0,j.getOffsetTop)(e)+n.height:n.bottom=t.bottom||n.top+n.height,n.middle=n.left+(n.right-n.left)/2,n.center=n.top+(n.bottom-n.top)/2,n}},{key:"getTargetPosition",value:function(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}},{key:"autoCloseWhenOffScreen",value:function(e){(e.top<0||e.top>window.innerHeight||e.left<0||e.left>window.innerWidth)&&this.requestClose("offScreen")}},{key:"getOverlapMode",value:function(e,t,n){return[e,t].indexOf(n)>=0?"auto":e===t?"inclusive":"exclusive"}},{key:"getPositions",value:function(e,t){var n=u({},e),o=u({},t),r={x:["left","right"].filter(function(e){return e!==o.horizontal}),y:["top","bottom"].filter(function(e){return e!==o.vertical})},a={x:this.getOverlapMode(n.horizontal,o.horizontal,"middle"),y:this.getOverlapMode(n.vertical,o.vertical,"center")};return r.x.splice("auto"===a.x?0:1,0,"middle"),r.y.splice("auto"===a.y?0:1,0,"center"),"auto"!==a.y&&(n.vertical="top"===n.vertical?"bottom":"top","inclusive"===a.y&&(o.vertical=o.vertical)),"auto"!==a.x&&(n.horizontal="left"===n.horizontal?"right":"left","inclusive"===a.y&&(o.horizontal=o.horizontal)),{positions:r,anchorPos:n}}},{key:"applyAutoPositionIfNeeded",value:function(e,t,n,o,r){var a=this.getPositions(o,n),i=a.positions,l=a.anchorPos;if(r.top<0||r.top+t.bottom>window.innerHeight){var u=e[l.vertical]-t[i.y[0]];u+t.bottom<=window.innerHeight?r.top=Math.max(0,u):(u=e[l.vertical]-t[i.y[1]])+t.bottom<=window.innerHeight&&(r.top=Math.max(0,u))}if(r.left<0||r.left+t.right>window.innerWidth){var c=e[l.horizontal]-t[i.x[0]];c+t.right<=window.innerWidth?r.left=Math.max(0,c):(c=e[l.horizontal]-t[i.x[1]])+t.right<=window.innerWidth&&(r.left=Math.max(0,c))}return r}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{style:T.root},f.default.createElement(v.default,{target:"window",onScroll:this.handleScroll,onResize:this.handleResize}),f.default.createElement(b.default,{ref:function(t){return e.layer=t},open:this.state.open,componentClickAway:this.componentClickAway,useLayerForClickAway:this.props.useLayerForClickAway,render:this.renderLayer}))}}]),t}(s.Component);A.propTypes={anchorEl:d.default.object,anchorOrigin:O.default.origin,animated:d.default.bool,animation:d.default.func,autoCloseWhenOffScreen:d.default.bool,canAutoPosition:d.default.bool,children:d.default.node,className:d.default.string,onRequestClose:d.default.func,open:d.default.bool,style:d.default.object,targetOrigin:O.default.origin,trigger:d.default.string,useLayerForClickAway:d.default.bool},A.defaultProps={anchorOrigin:{vertical:"bottom",horizontal:"left"},animated:!0,autoCloseWhenOffScreen:!0,canAutoPosition:!0,onRequestClose:function(){},open:!1,style:{overflowY:"auto"},targetOrigin:{vertical:"top",horizontal:"left"},useLayerForClickAway:!0},t.default=A},388:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=n(2),s=o(c),f=n(42),p=n(147),d=o(p),h=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.onClickAway=function(e){if(!e.defaultPrevented&&o.props.componentClickAway&&o.props.open){var t=o.layer;(e.target!==t&&e.target===window||document.documentElement.contains(e.target)&&!d.default.isDescendant(t,e.target))&&o.props.componentClickAway(e)}},i=n,a(o,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.renderLayer()}},{key:"componentDidUpdate",value:function(){this.renderLayer()}},{key:"componentWillUnmount",value:function(){this.unrenderLayer()}},{key:"getLayer",value:function(){return this.layer}},{key:"unrenderLayer",value:function(){this.layer&&(this.props.useLayerForClickAway?(this.layer.style.position="relative",this.layer.removeEventListener("touchstart",this.onClickAway),this.layer.removeEventListener("click",this.onClickAway)):(window.removeEventListener("touchstart",this.onClickAway),window.removeEventListener("click",this.onClickAway)),(0,f.unmountComponentAtNode)(this.layer),document.body.removeChild(this.layer),this.layer=null)}},{key:"renderLayer",value:function(){var e=this,t=this.props,n=t.open,o=t.render;if(n){this.layer||(this.layer=document.createElement("div"),document.body.appendChild(this.layer),this.props.useLayerForClickAway?(this.layer.className="zui-modalLayer",this.layer.addEventListener("touchstart",this.onClickAway),this.layer.addEventListener("click",this.onClickAway)):setTimeout(function(){window.addEventListener("touchstart",e.onClickAway),window.addEventListener("click",e.onClickAway)},0));var r=o();this.layerElement=(0,f.unstable_renderSubtreeIntoContainer)(this,r,this.layer)}else this.unrenderLayer()}},{key:"render",value:function(){return null}}]),t}(u.Component);h.propTypes={componentClickAway:s.default.func,open:s.default.bool.isRequired,render:s.default.func.isRequired,useLayerForClickAway:s.default.bool},h.defaultProps={useLayerForClickAway:!0},t.default=h},389:function(e,t,n){(function(t){function n(e,t,n){function o(t){var n=y,o=m;return y=m=void 0,C=t,g=e.apply(o,n)}function a(e){return C=e,b=setTimeout(s,t),k?o(e):g}function i(e){var n=e-w,o=e-C,r=t-n;return j?E(r,v-o):r}function c(e){var n=e-w,o=e-C;return void 0===w||n>=t||n<0||j&&o>=v}function s(){var e=_();if(c(e))return f(e);b=setTimeout(s,i(e))}function f(e){return b=void 0,M&&y?o(e):(y=m=void 0,g)}function p(){void 0!==b&&clearTimeout(b),C=0,y=w=m=b=void 0}function d(){return void 0===b?g:f(_())}function h(){var e=_(),n=c(e);if(y=arguments,m=this,w=e,n){if(void 0===b)return a(w);if(j)return b=setTimeout(s,t),o(w)}return void 0===b&&(b=setTimeout(s,t)),g}var y,m,v,g,b,w,C=0,k=!1,j=!1,M=!0;if("function"!=typeof e)throw new TypeError(u);return t=l(t)||0,r(n)&&(k=!!n.leading,j="maxWait"in n,v=j?O(l(n.maxWait)||0,t):v,M="trailing"in n?!!n.trailing:M),h.cancel=p,h.flush=d,h}function o(e,t,o){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return r(o)&&(a="leading"in o?!!o.leading:a,i="trailing"in o?!!o.trailing:i),n(e,t,{leading:a,maxWait:t,trailing:i})}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==typeof e}function i(e){return"symbol"==typeof e||a(e)&&w.call(e)==s}function l(e){if("number"==typeof e)return e;if(i(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=d.test(e);return n||h.test(e)?y(e.slice(2),n?2:8):p.test(e)?c:+e}var u="Expected a function",c=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,y=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),b=Object.prototype,w=b.toString,O=Math.max,E=Math.min,_=function(){return g.Date.now()};e.exports=o}).call(t,n(390))},390:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},391:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(16),m=o(y),v=n(93),g=o(v),b=function(e){function t(){var e,n,o,r;i(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={open:!1},r=n,l(o,r)}return u(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({open:!0})}},{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open})}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.style,i=(t.targetOrigin,t.children),l=a(t,["className","style","targetOrigin","children"]),u=(0,m.default)((e={},r(e,n,!!n),r(e,"zui-popover-default-ani-root",!0),r(e,"open",!!this.state.open),e));return p.default.createElement("div",c({style:o,className:u},l),p.default.createElement("div",{className:"zui-popover-default-ani-horizontal"},p.default.createElement("div",{className:"zui-popover-default-ani-vertical"},i)))}}]),t}(f.Component);b.propTypes={children:h.default.node,className:h.default.string,open:h.default.bool.isRequired,style:h.default.object,targetOrigin:g.default.origin.isRequired},b.defaultProps={style:{}},t.default=b},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getOffsetTop=function(e){for(var t=e.offsetTop,n=e.offsetParent;null!=n;)t+=n.offsetTop,n=n.offsetParent;return t},t.isIOS=function(){return/iPad|iPhone|iPod/.test(window.navigator.userAgent)&&!window.MSStream}},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(394),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default},394:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(149),m=o(y),v=n(386),g=o(v),b=n(16),w=o(b),O=function(e){function t(){var e,n,o,r;i(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={isKeyboardFocused:!1,touch:!1},o.handleKeyboardFocus=function(e,t){o.setState({isKeyboardFocused:t}),o.props.onKeyboardFocus(e,t)},o.handleMouseEnter=function(e){o.props.onMouseEnter(e)},o.handleMouseLeave=function(e){o.props.onMouseLeave(e)},o.handleTouchStart=function(e){o.setState({touch:!0}),o.props.onTouchStart(e)},r=n,l(o,r)}return u(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){e.disabled&&this.setState({isKeyboardFocused:!1})}},{key:"createChildren",value:function(e){return e=f.Children.toArray(e),e=e.filter(function(e){return e.type===g.default}),e.push(p.default.createElement("span",{key:"label",className:"zui-button_inner"},this.props.label)),e}},{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.className,i=t.disabled,l=t.label,u=t.type,s=a(t,["children","className","disabled","label","type"]),f=n?this.createChildren(n):p.default.createElement("span",{key:"label",className:"zui-button_inner"},l),d=(this.state.isKeyboardFocused||this.state.touch)&&!i,h=(0,w.default)((e={"zui-button":!0,focused:d,"is-disabled":i},r(e,"zui-button_"+u,!i),r(e,o,!0),e));return p.default.createElement(m.default,c({},s,{className:h,disabled:i,onKeyboardFocus:this.handleKeyboardFocus,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart}),f)}}]),t}(f.Component);O.propTypes={children:h.default.node,className:h.default.string,disableTouchRipple:h.default.bool,disabled:h.default.bool,label:h.default.string,onKeyboardFocus:h.default.func,onMouseEnter:h.default.func,onMouseLeave:h.default.func,onTouchStart:h.default.func,style:h.default.object,type:h.default.oneOf(["primary","success","warning","danger","info","text"])},O.defaultProps={type:"primary",disabled:!1,style:{},className:"",onKeyboardFocus:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onTouchStart:function(){},disableTouchRipple:!0},t.default=O},395:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(16),m=o(y),v=n(396),g=o(v),b=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"createChildren",value:function(e){var t=this;return f.Children.map(e,function(e){if(e.type===g.default){var n=c({onChange:t.props.onChange},e.props);return(0,f.cloneElement)(e,n)}return null})}},{key:"render",value:function(){var e=this.props,t=e.containerElement,n=e.children,o=e.className,i=(e.onChange,a(e,["containerElement","children","className","onChange"])),l=(0,m.default)(r({"zui-dropdown-menu":!0},o,!!o)),u=c({},i,{className:l});return p.default.createElement(t,u,this.createChildren(n))}}]),t}(f.Component);b.zuiName="DropdownMenu",b.propTypes={children:h.default.node,className:h.default.string,containerElement:h.default.oneOfType([h.default.string,h.default.element]),onChange:h.default.func},b.defaultProps={containerElement:"ul"},t.default=b},396:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(16),m=o(y),v=function(e){function t(){var e,n,o,r;i(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.handleTouchTap=function(e){var t=o.props,n=t.onChange,r=t.onTouchTap;n(e,t.value),r&&r(e)},r=n,l(o,r)}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.containerElement,n=e.children,o=e.className,i=(e.onChange,a(e,["containerElement","children","className","onChange"])),l=(0,m.default)(r({"zui-dropdown-menu-item":!0},o,!!o)),u=c({},i,{onTouchTap:this.handleTouchTap,className:l});return p.default.createElement(t,u,n)}}]),t}(f.Component);v.zuiName="DropdownMenuItem",v.propTypes={children:h.default.node,className:h.default.string,containerElement:h.default.oneOfType([h.default.string,h.default.element]),onChange:h.default.func,onTouchTap:h.default.func,value:h.default.oneOfType([h.default.string,h.default.number])},v.defaultProps={containerElement:"li"},t.default=v},397:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),f=o(s),p=n(2),d=o(p),h=n(386),y=o(h),m=n(42),v=o(m),g=n(403),b=o(g),w=n(395),O=o(w),E=n(151),_=o(E),C=function(e){function t(){var e,n,o,r;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={open:!1},o.handleMouseEnter=function(){o.onAnchorEl=!0,o.timeoutTarget&&clearTimeout(o.timeoutTarget),o.setState({open:!0})},o.handleMouseLeave=function(){o.onAnchorEl=!1,o.onTargetEl||(o.timeoutAnchor=setTimeout(function(){o.setState({open:!1})},300))},o.handleClick=function(e){o.props.anchorEl.props.onClick&&o.props.anchorEl.props.onClick(e),o.setState({open:!o.state.open})},o.handleRequestClose=function(){o.setState({open:!1})},o.handleChange=function(e,t){o.props.hideOnClick&&o.setState({open:!1}),o.props.onChange(e,t)},r=n,i(o,r)}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.trigger;this.el&&("hover"===e?(_.default.on(this.el,"mouseenter",this.handleMouseEnter),_.default.on(this.el,"mouseleave",this.handleMouseLeave)):_.default.on(this.el,"click",this.handleClick))}},{key:"componentWillUnmount",value:function(){"hover"===this.props.trigger?(_.default.off(this.el,"mouseEnter",this.handleMouseEnter),_.default.off(this.el,"mouseLeave",this.handleMouseLeave)):_.default.off(this.el,"click",this.handleClick),this.timeoutAnchor&&clearTimeout(this.timeoutAnchor),this.timeoutTarget&&clearTimeout(this.timeoutTarget)}},{key:"createWrappedChildren",value:function(e){var t=this;return s.Children.map(e,function(e){var n=e.props,o=n.onMouseEnter,a=n.onMouseLeave,i=(n.children,r(n,["onMouseEnter","onMouseLeave","children"]));return e.type===O.default?(0,s.cloneElement)(e,u({onMouseEnter:function(e){t.onTargetEl=!0,t.timeoutAnchor&&clearTimeout(t.timeoutAnchor),o&&o(e)},onMouseLeave:function(e){t.onTargetEl=!1,t.onAnchorEl||"hover"!==t.props.trigger||(t.timeoutTarget=setTimeout(function(){t.setState({open:!1})},300)),a&&a(e)},onChange:t.handleChange},i)):null})}},{key:"createAnchorChildren",value:function(e){var t=this.props,n=t.anchorAlign,o=t.animation,r=t.children,a=t.targetAlign,i=t.useLayerForClickAway,l=t.trigger,u=f.default.createElement(y.default,{open:this.state.open,anchorEl:this.el,animation:o,anchorOrigin:{horizontal:a,vertical:"bottom"},targetOrigin:{horizontal:n,vertical:"top"},onRequestClose:this.handleRequestClose,useLayerForClickAway:i,trigger:l,key:"popover"},this.createWrappedChildren(r));return e=s.Children.toArray(e),e.push(u),e}},{key:"render",value:function(){var e=this;return(0,s.cloneElement)(this.props.anchorEl,{ref:function(t){return e.el=v.default.findDOMNode(t)}},this.createAnchorChildren(this.props.anchorEl.props.children))}}]),t}(s.Component);C.propTypes={anchorAlign:d.default.oneOf(["left","middle","right"]),anchorEl:d.default.element.isRequired,animation:d.default.func,children:d.default.node,hideOnClick:d.default.bool,onChange:d.default.func,targetAlign:d.default.oneOf(["left","middle","right"]),trigger:d.default.oneOf(["hover","click"]),useLayerForClickAway:d.default.bool},C.defaultProps={anchorAlign:"middle",animation:b.default,onChange:function(){},trigger:"hover",targetAlign:"middle",useLayerForClickAway:!1,hideOnClick:!0},t.default=C},402:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Dropdown=t.DropdownMenuItem=t.DropdownMenu=void 0;var r=n(395),a=o(r),i=n(396),l=o(i),u=n(397),c=o(u),s=n(397),f=o(s);t.DropdownMenu=a.default,t.DropdownMenuItem=l.default,t.Dropdown=c.default,t.default=f.default},403:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(16),m=o(y),v=n(93),g=o(v),b=n(150),w=o(b),O=function(e){function t(){var e,n,o,r;i(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={open:!1},r=n,l(o,r)}return u(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({open:!0})}},{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open})}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.style,i=t.children,l=(t.targetOrigin,a(t,["className","style","children","targetOrigin"])),u=(0,m.default)((e={},r(e,n,!!n),r(e,"zui-popover-vertical-ani-root",!0),r(e,"open",!!this.state.open),e));return p.default.createElement(w.default,c({style:o,className:u,zDepth:1},l),i)}}]),t}(f.Component);O.propTypes={children:h.default.node,className:h.default.string,open:h.default.bool.isRequired,style:h.default.object,targetOrigin:g.default.origin},O.defaultProps={style:{}},t.default=O}});