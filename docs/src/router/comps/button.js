import React, {Component} from 'react';
import Button from 'zui-react/Button';
const example1 = [
  "import Button from 'zui-react/Button';",
  '',
  'render(){',
  ' return(',
  "   <Button label='默认按钮' />",
  "   <Button type='text' label='确定按钮'/>",
  "   <Button disabled={true} label='确定按钮'/>",
  ' )',
  '}',
].join('\n');

const example2 = [
  "import Button from 'zui-react/Button';",
  '',
  'render(){',
  ' return(',
  "   <Button label='默认按钮' />",
  "   <Button type='info' label='信息按钮' />",
  "   <Button type='success' label='成功按钮' />",
  "   <Button type='warning' label='警告按钮' />",
  "   <Button type='danger' label='危险按钮' />",
  ' )',
  '}',
].join('\n');

const example3 = [
  '<Button',
  ' type="text"',
  ' label="波纹按钮"',
  ' disableTouchRipple={false}',
  '/>',
  '<Button',
  ' type="text"',
  ' label="自定义颜色波纹按钮"',
  ' disableTouchRipple={false}',
  ' touchRippleColor="#00ff00"',
  '/>',
  '<Button',
  ' className="test"',
  ' label="确定按钮"',
  ' disableTouchRipple={false}',
  ' centerRipple={true}',
  ' touchRippleColor="red"',
  '/>',
].join('\n');

class ButtonPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  handleClick = (event) => { // eslint-disable-line no-unused-vars
    console.log('handleClick');
  }

  handleTouchTap = (event) => { // eslint-disable-line no-unused-vars
    console.log('handleTouchTap');
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">基本使用</h3>
        <p className="docs-desc">常用的操作按钮。</p>
        <div>
          <Button label="默认按钮" />
          <Button type="text" label="确定按钮" />
          <Button disabled={true} label="确定按钮" />
        </div>
        <pre className="react">
          {example1}
        </pre>
        <h3 className="docs-title">颜色</h3>
        <p className="docs-desc">不同的颜色倾向代表不同的提示</p>
        <div>
          <Button label="默认按钮" />
          <Button type="info" label="信息按钮" />
          <Button type="success" label="成功按钮" />
          <Button type="warning" label="警告按钮" />
          <Button type="danger" label="危险按钮" />
        </div>
        <pre className="react">
          {example2}
        </pre>
        <h3 className="docs-title">波纹</h3>
        <p className="docs-desc">按钮的波纹效果默认是disable的，如果需要波纹可以设置disableTouchRipple为false</p>
        <p className="docs-desc">设置touchRippleColor属性可以设置波纹的颜色</p>
        <p className="docs-desc">设置centerRipple属性为true可以使波纹的起始点为按钮中部</p>
        <Button
          type="text"
          label="波纹按钮"
          disableTouchRipple={false}
        />
        <Button
          type="text"
          label="自定义颜色波纹按钮"
          disableTouchRipple={false}
          touchRippleColor="#00ff00"
        />
        <Button
          className="hoho"
          label="确定按钮"
          disableTouchRipple={false}
          centerRipple={true}
          touchRippleColor="red"
        />
        <pre className="react">
          {example3}
        </pre>
        <h3 className="docs-title">禁止按钮</h3>
        <Button disabled={true} label="禁止按钮" />
        <pre className="react">
          {'<Button disabled={true} label="禁止按钮"/>'}
        </pre>
        <h3 className="docs-title">自定义style的按钮</h3>
        <Button style={{backgroundColor: '#666'}} label="确定按钮" />
        <pre className="react">
          {'<Button style={{backgroundColor: \'#666\'}} label="确定按钮" />'}
        </pre>
        <h3 className="docs-title">带跳转的按钮</h3>
        <Button href="http://github.com" label="确定按钮" />
        <pre className="react">
          {'<Button href="http://github.com" label="确定按钮" />'}
        </pre>
        <h3 className="docs-title">按钮事件</h3>
        <Button label="click按钮" onClick={this.handleClick} />
        <Button label="touchTap按钮" onTouchTap={this.handleTouchTap} />
        <pre className="react">
          {'<Button label="click按钮" onClick={this.handleClick} />'}
          {'\n'}
          {'<Button label="touchTap按钮" onTouchTap={this.handleTouchTap} />'}
        </pre>
      </div>
    );
  }
}

export default ButtonPage;
