webpackJsonp([11],{378:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=a(423),d=function(e){function t(){var e,a,o,r;n(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return a=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={valueSelected:"A"},o.handleOnChange=function(e,t){console.log(t),"C"===t&&o.setState({valueSelected:"A"})},r=a,l(o,r)}return o(t,e),r(t,[{key:"componentDidMount",value:function(){Array.from(document.getElementsByTagName("pre")).forEach(function(e){window.hljs.highlightBlock(e)})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h3",{className:"docs-title"},"RadioButton"),i.default.createElement("p",{className:"docs-desc"},"设置defaultSelected来设置选中值"),i.default.createElement("div",{style:{width:"180px"}},i.default.createElement(c.RadioButtonGroup,{defaultSelected:"A",name:"simple"},i.default.createElement(c.RadioButton,{label:"Chose A",value:"A"}),i.default.createElement(c.RadioButton,{label:"Chose B",value:"B"}),i.default.createElement(c.RadioButton,{label:"Chose C",value:"C"}))),i.default.createElement("pre",{className:"react"},'import {RadioButton, RadioButtonGroup} from \'zui-react/RadioButton\';\n\n<RadioButtonGroup defaultSelected="A" name="simple">\n  <RadioButton\n    label="Chose A"\n    value="A"\n  />\n  <RadioButton\n    label="Chose B"\n    value="B"\n  />\n  <RadioButton\n    label="Chose C"\n    value="C"\n  />\n</RadioButtonGroup>'),i.default.createElement("h3",{className:"docs-title"},"controlled"),i.default.createElement("p",{className:"docs-desc"},"设置labelPosition来设置label位置"),i.default.createElement("p",{className:"docs-desc"},"通过value和设置handleOnChange来设置其为controlled"),i.default.createElement("div",{style:{width:"180px"}},i.default.createElement(c.RadioButtonGroup,{defaultSelected:"A",name:"simple",labelPosition:"left",valueSelected:this.state.valueSelected,onChange:this.handleOnChange},i.default.createElement(c.RadioButton,{label:"Chose A",value:"A"}),i.default.createElement(c.RadioButton,{label:"Chose B",value:"B"}),i.default.createElement(c.RadioButton,{label:"Chose C=A",value:"C"}),i.default.createElement(c.RadioButton,{label:"Chose D",value:"D",disabled:!0}))),i.default.createElement("pre",{className:"react"},'import {RadioButton, RadioButtonGroup} from \'zui-react/RadioButton\';\n\nhandleOnChange = (event, value) => {\n  console.log(value);\n  if (value === \'C\') {\n    this.setState({\n      valueSelected: \'A\',\n    });\n  }\n}\n\n<RadioButtonGroup\n  defaultSelected="A"\n  name="simple"\n  labelPosition="left"\n  valueSelected={this.state.valueSelected}\n  onChange={this.handleOnChange}\n>\n  <RadioButton\n    label="Chose A"\n    value="A"\n  />\n  <RadioButton\n    label="Chose B"\n    value="B"\n  />\n  <RadioButton\n    label="Chose C=A"\n    value="C"\n  />\n  <RadioButton\n    label="Chose D"\n    value="D"\n    disabled={true}\n  />\n</RadioButtonGroup>'))}}]),t}(u.Component);t.default=d},405:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),d=n(c),s=a(2),f=n(s),p=a(16),h=n(p),b=a(424),m=n(b),v=a(425),y=n(v),C=function(e){function t(){var e,a,n,l;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.handleOnChange=function(e){n.props.disabled||n.props.onCheck&&!n.props.checked&&n.props.onCheck(e,n.props.value)},l=a,r(n,l)}return u(t,e),i(t,[{key:"render",value:function(){var e,t=this.props,a=t.label,n=t.labelStyle,o=t.labelPosition,r=t.name,u=t.className,i=t.disabled,c=t.style,s=t.checked,f=t.value,p=(0,h.default)((e={"zui-radio":!0},l(e,u,!!u),l(e,"disabled",i),l(e,"is-checked",s),l(e,"position-left","left"===o),e)),b=(0,h.default)({"zui-radio-uncheck-icon":!0,"is-checked":s}),v=(0,h.default)({"zui-radio-check-icon":!0,"is-checked":s}),C="left"===o?[d.default.createElement("label",{key:"label",className:"zui-radio-label",style:n},a),d.default.createElement("div",{key:"radiobox",className:"zui-radio-icon-wrap"},d.default.createElement(m.default,{className:b}),d.default.createElement(y.default,{className:v}))]:[d.default.createElement("div",{key:"radiobox",className:"zui-radio-icon-wrap"},d.default.createElement(m.default,{className:b}),d.default.createElement(y.default,{className:v})),d.default.createElement("label",{key:"label",className:"zui-radio-label",style:n},a)],g={type:"radio",className:"zui-toggle-radio",onChange:this.handleOnChange,value:f,name:r,checked:s};return d.default.createElement("div",{className:p,style:c},d.default.createElement("input",g),d.default.createElement("div",{className:"zui-radio-track-wrap"},C))}}]),t}(c.Component);C.propTypes={checked:f.default.bool,className:f.default.string,disabled:f.default.bool,label:f.default.string,labelPosition:f.default.oneOf(["left","right"]),labelStyle:f.default.object,name:f.default.string,onCheck:f.default.func,style:f.default.object,value:f.default.any},C.defaultProps={checked:!1,disabled:!1},t.default=C},411:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),s=n(d),f=a(2),p=n(f),h=a(405),b=n(h),m=a(13),v=(n(m),function(e){function t(){var e,a,n,l;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={numberCheckedRadioButtons:0,selected:""},n.handleChange=function(e,t){n.updateRadioButtons(t),0===n.state.numberCheckedRadioButtons&&n.props.onChange&&n.props.onChange(e,t)},l=a,r(n,l)}return u(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this,t=0,a="",n=this.props,l=n.valueSelected,o=n.defaultSelected;void 0!==l?a=l:void 0!==o&&(a=o),s.default.Children.forEach(this.props.children,function(a){a.type,b.default,e.hasCheckAttribute(a)&&t++},this),this.setState({numberCheckedRadioButtons:t,selected:a})}},{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("valueSelected")&&this.setState({selected:e.valueSelected})}},{key:"updateRadioButtons",value:function(e){0===this.state.numberCheckedRadioButtons&&this.setState({selected:e})}},{key:"hasCheckAttribute",value:function(e){return e.props.hasOwnProperty("checked")&&e.props.checked}},{key:"render",value:function(){var e=this,t=s.default.Children.map(this.props.children,function(t){var a=t.props,n=(a.name,a.value,a.label,a.onCheck,a.checked,l(a,["name","value","label","onCheck","checked"]));return s.default.createElement(b.default,i({},n,{ref:t.props.value,name:e.props.name,key:t.props.value,value:t.props.value,label:t.props.label,labelPosition:t.props.labelPosition||e.props.labelPosition,onCheck:e.handleChange,checked:t.props.value===e.state.selected}))});return s.default.createElement("div",{style:this.props.style,className:this.props.className},t)}}]),t}(d.Component));v.propTypes={children:p.default.node,className:p.default.string,defaultSelected:p.default.any,labelPosition:p.default.oneOf(["left","right"]),name:p.default.string.isRequired,onChange:p.default.func,style:p.default.object,valueSelected:p.default.any},v.defaultProps={labelPosition:"right"},t.default=v},423:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.RadioButtonGroup=t.RadioButton=void 0;var l=a(405),o=n(l),r=a(411),u=n(r);t.RadioButton=o.default,t.RadioButtonGroup=u.default,t.default=o.default},424:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),o=n(l),r=a(95),u=n(r),i=a(94),c=n(i),d=function(e){return o.default.createElement(c.default,e,o.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))};d=(0,u.default)(d),d.displayName="ToggleRadioButtonUnchecked",t.default=d},425:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),o=n(l),r=a(95),u=n(r),i=a(94),c=n(i),d=function(e){return o.default.createElement(c.default,e,o.default.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))};d=(0,u.default)(d),d.displayName="ToggleRadioButtonChecked",t.default=d}});