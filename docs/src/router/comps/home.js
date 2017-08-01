import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">基本信息</h3>
        <p className="docs-desc">zui-react 是一个基于 ReactJs 的 web UI 组件库。</p>
        <p className="docs-desc docs-color-green"><Link to="/installation">从如何安装开始</Link></p>
      </div>
    );
  }
}

export default Home;
