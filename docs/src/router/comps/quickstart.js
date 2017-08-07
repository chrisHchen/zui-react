import React, {Component} from 'react';

class quickstart extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">快速上手(以webpack打包为例)</h3>
        <p className="docs-desc">介绍如何在项目中使用zui-react。</p>
        <h3 className="docs-title">react-tap-event-plugin</h3>
        <p className="docs-desc">zui-react的大部分组件需要这个插件来实现移动端的tap事件。</p>
        <p className="docs-desc">所以需要在项目的最开始引入这个插件。</p>
        <pre className="javascript">
          {
            'import injectTapEventPlugin from \'react-tap-event-plugin\';' + '\n' +
            '\n' +
            'injectTapEventPlugin();'
          }
        </pre>
        <h3 className="docs-title">以使用Button组件为例</h3>
        <pre className="javascript">
          {
            'import React, {Component} from \'react\';' + '\n' +
            'import Button from \'zui-react/Button\';' + '\n' +
            'import injectTapEventPlugin from \'react-tap-event-plugin\';' + '\n' +
            '//引入全局样式' + '\n' +
            'import \'zui-react/zui-theme-default.css\';' + '\n' +
            '\n' +
            'injectTapEventPlugin();' +
            '\n' +
            'const Example = function({props}) = {' + '\n' +
            '   return (<Button label="默认按钮" />)' + '\n' +
            '}'
          }
        </pre>
        <p className="docs-desc">这里引用组件时使用了 import Button from 'zui-react/Button';</p>
        <p className="docs-desc">{'也可以使用 import {Button} from \'zui-react\';'}</p>
        <p className="docs-desc">前一种写法打包后的代码量更少</p>
      </div>
    );
  }
}

export default quickstart;
