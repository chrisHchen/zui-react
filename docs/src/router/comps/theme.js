import React, {Component} from 'react';

class Theme extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">修改主题色</h3>
        <p className="docs-desc">1. 在 https://github.com/chrisHchen/zui-react.git 下载源码并安装依赖</p>
        <pre className="Bash">
          {
            'npm install'
          }
        </pre>
        <p className="docs-desc">2. 在src-theme-variables.css中修改对应的主题参数</p>
        <p className="docs-desc">3. 重新打包css</p>
        <pre className="Bash">
          {
            'npm run build:umd'
          }
        </pre>
        <p className="docs-desc">4. 在生成的build文件夹下会有一个zui-theme-default.css文件，它就是自定义化后的打包文件，直接使用即可</p>
      </div>
    );
  }
}

export default Theme;
