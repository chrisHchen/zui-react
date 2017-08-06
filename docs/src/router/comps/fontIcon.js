import React, {Component} from 'react';
import FontIcon from 'zui-react/FontIcon';

const example = [
  "import React, {Component} from 'react';",
  "import FontIcon from 'zui-react/FontIcon';",
  '\n',
  '<FontIcon',
  '  className="iconfont icon-iphone"',
  '  style={{marginRight: "15px"}}',
  '/>',
  '<FontIcon',
  '  className="iconfont icon-iphone"',
  '  color="red"',
  '  style={{marginRight: "15px"}} />',
  '<FontIcon',
  '  className="iconfont icon-iphone"',
  '  color="blue"',
  '  hoverColor="green"',
  '  style={{marginRight: "15px"}}',
  '/>',
].join('\n');

class FontIconPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">FontIcon</h3>
        <p className="docs-desc">根据class来设置icon内容，并可设置color和hoverColor属性</p>
        <FontIcon className="iconfont icon-iphone" style={{marginRight: '15px'}} />
        <FontIcon className="iconfont icon-iphone" color="red" style={{marginRight: '15px'}} />
        <FontIcon
          className="iconfont icon-iphone"
          color="blue"
          hoverColor="green"
          style={{marginRight: '15px'}}
        />
        <pre className="react">
          {
            example
          }
        </pre>

      </div>
    );
  }
}

export default FontIconPage;
