import React, {Component} from 'react';
import Avatar from 'zui-react/Avatar';
import FontIcon from 'zui-react/FontIcon';
import SvgIcon from 'zui-react/SvgIcon';

const example = [
  'import Avatar from "zui-react/Avatar"',
  '\n',
  '<Avatar src="https://facebook.github.io/react/img/logo.svg"/>',
].join('\n');

const example1 = [
  'import Avatar from "zui-react/Avatar";',
  '\n',
  '<Avatar src="https://facebook.github.io/react/img/logo.svg"',
  '   size={30}',
  '   style={{marginLeft:"20px"}}',
  '/>',
].join('\n');

const example2 = [
  "import FontIcon from 'zui-react/FontIcon';",
  '\n',
  '<Avatar',
  '   icon={',
  '     <FontIcon className="iconfont icon-iphone" />',
  '   }',
  '   backgroundColor="black"',
  '/>',
].join('\n');

const example3 = [
  '<Avatar',
  '   icon={',
  '    <SvgIcon color="red" hoverColor="green">',
  '      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />',
  '    </SvgIcon>',
  '   }',
  '/>',
].join('\n');

class AvatorPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">基本使用</h3>
        <p className="docs-desc">设置src为背景图片。</p>
        <Avatar
          src="https://facebook.github.io/react/img/logo.svg"
        />
        <pre className="react">
          {
            example
          }
        </pre>
        <h3 className="docs-title">设置size及style</h3>
        <Avatar
          src="https://facebook.github.io/react/img/logo.svg"
          size={30}
          style={{marginLeft: '20px'}}
        />
        <pre className="react">
          {example1}
        </pre>
        <h3 className="docs-title">设置文字</h3>
        <Avatar>TAT</Avatar>
        <pre className="react">
          {'<Avatar>TAT</Avatar>'}
        </pre>
        <pre className="react">
          {example1}
        </pre>
        <h3 className="docs-title">以FontIcon为内容</h3>
        <p className="docs-desc">本文档中引入了某iconfont字体集。</p>
        <p className="docs-desc">可以直接设置color和backgroundColor属性来设置前景色和背景色。</p>
        <Avatar
          icon={
            <FontIcon className="iconfont icon-iphone" />
          }
          backgroundColor="black"
        />
        <Avatar
          icon={
            <FontIcon className="iconfont icon-iphone" />
          }
          color="black"
          style={{marginLeft: '20px'}}
        />
        <pre className="react">
          {example2}
        </pre>
        <h3 className="docs-title">以SvgIcon为内容</h3>
        <Avatar
          icon={
            <SvgIcon color="red" hoverColor="green">
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
            </SvgIcon>
          }
        />
        <pre className="react">
          {example3}
        </pre>
      </div>
    );
  }
}

export default AvatorPage;
