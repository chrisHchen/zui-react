import React, {Component} from 'react';

const cndCode = '<!-- 引入样式 -->' + '\n' +
                '<link rel="stylesheet" href="https://unpkg.com/zui-react/zui-theme-default.css">' + '\n' +
                '<!-- 引入组件库 -->' + '\n' +
                '<script src="https://unpkg.com/zui-react/zui-react.umd.js"></script>';

class Installation extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">npm 安装</h3>
        <p className="docs-desc">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <pre className="Bash">
          {
            'npm install --save zui-react'
          }
        </pre>
        <h3 className="docs-title">CDN</h3>
        <p className="docs-desc">目前可以通过 unpkg.com/zui-react 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
        <pre className="html">
          {cndCode}
        </pre>
      </div>
    );
  }
}

export default Installation;
