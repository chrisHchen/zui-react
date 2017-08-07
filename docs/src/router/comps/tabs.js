import React, {Component} from 'react';
import {Tab, Tabs} from 'zui-react/Tab';

const example = [
  "import React, {Component} from 'react';",
  "import {Tab, Tabs} from '../Tab';",
  '\n',
  '<Tabs initialSelectedIndex={1} onChange={(val, event, tab) => console.log(val, event, tab)}>',
  '  <Tab name="用户管理" onActive={(tab) => console.log(tab)}>',
  '    <div>用户管理</div>',
  '  </Tab>',
  '  <Tab name="用户配置">',
  '    <div>用户配置</div>',
  '  </Tab>',
  '  <Tab name="角色管理菜单">',
  '    角色管理',
  '  </Tab>',
  '</Tabs>',
].join('\n');

const example2 = [
  "import React, {Component} from 'react';",
  "import {Tab, Tabs} from '../Tab';",
  '\n',
  'handleChange = (value, event, tab) => {',
  '  console.log(value, event, tab);',
  '  this.setState({',
  '    value: value,',
  '  });',
  '};',
  '\n',
  '<Tabs value={this.state.value} onChange={this.handleChange}>',
  '  <Tab name="用户管理" value="a">',
  '    <div>用户管理</div>',
  '  </Tab>',
  '  <Tab name="用户配置" value="b" onActive={(tab) => console.log(tab)}>',
  '    <div>用户配置</div>',
  '  </Tab>',
  '  <Tab name="角色管理菜单" value="c">',
  '    角色管理',
  '  </Tab>',
  '</Tabs>',
].join('\n');

class FontIconPage extends Component {
  state = {
    value: 'a',
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleChange = (value, event, tab) => {
    console.log(value, event, tab);
    this.setState({
      value: value,
    });
  };
  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">设置initialSelectedIndex来设置初始时active的tab</p>
        <p className="docs-desc">tab变化时会调用onChange回调函数，三个参数分别为index，事件对象，tab对象</p>
        <p className="docs-desc">另外还可以设置tab的onActive回调</p>
        <Tabs initialSelectedIndex={1} onChange={(val, event, tab) => console.log(val, event, tab)}>
          <Tab name="用户管理" onActive={(tab) => console.log(tab)}>
            <div>用户管理</div>
          </Tab>
          <Tab name="用户配置">
            <div>用户配置</div>
          </Tab>
          <Tab name="角色管理菜单">
            角色管理
          </Tab>
        </Tabs>
        <pre className="react">
          {
            example
          }
        </pre>
        <h3 className="docs-title">Controllled</h3>
        <p className="docs-desc">通过设置value值将Tabs设定为controlled,此时onChange回调函数执行时第一个参数为选中tab的value</p>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab name="用户管理" value="a">
            <div>用户管理</div>
          </Tab>
          <Tab name="用户配置" value="b" onActive={(tab) => console.log(tab)}>
            <div>用户配置</div>
          </Tab>
          <Tab name="角色管理菜单" value="c">
            角色管理
          </Tab>
        </Tabs>
        <pre className="react">
          {
            example2
          }
        </pre>
      </div>
    );
  }
}

export default FontIconPage;
