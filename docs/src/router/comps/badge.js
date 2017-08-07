import React, {Component} from 'react';
import {Badge, SvgIcon, Button} from 'zui-react';

class BadgePage extends Component {
  state = {
    isHidden: false,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleClickBadge = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  render() {
    return (
      <div>
        <h3 className="docs-title">基于icon的Badge</h3>
        <p className="docs-desc">value值为Badge的value</p>
        <Badge value={20}>
          <SvgIcon color="red" hoverColor="green">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
          </SvgIcon>
        </Badge>
        <pre className="react">
          {
            `
import {Badge, SvgIcon, Button} from 'zui-react';

<Badge value={20}>
  <SvgIcon color="red" hoverColor="green">
    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
  </SvgIcon>
</Badge>
`
          }
        </pre>

        <h3 className="docs-title">基于Button的Badge</h3>
        <Badge value={20}>
          <Button label="确定按钮" />
        </Badge>
        <pre className="react">
          {
            `
import {Badge, SvgIcon, Button} from 'zui-react';

<Badge value={20}>
  <Button label="确定按钮" />
</Badge>
`
          }
        </pre>

        <h3 className="docs-title">设置isDot为true，Badge变为一个红点</h3>
        <Badge value={20} isDot={true}>
          <Button label="确定按钮" />
        </Badge>
        <pre className="react">
          {
            `
import {Badge, SvgIcon, Button} from 'zui-react';

<Badge value={20} isDot={true}>
  <Button label="确定按钮" />
</Badge>
`
          }
        </pre>

        <h3 className="docs-title">设置hidden可隐藏Badge</h3>
        <Badge value={20} isDot={true} hidden={this.state.isHidden}>
          <Button label="确定按钮" onClick={this.handleClickBadge} />
        </Badge>
        <pre className="react">
          {
            `
import {Badge, SvgIcon, Button} from 'zui-react';

state = {
  isHidden: false,
}

handleClickBadge = () => {
  this.setState({
    isHidden: !this.state.isHidden,
  });
}

<Badge value={20} isDot={true} hidden={this.state.isHidden}>
  <Button label="确定按钮" onClick={this.handleClickBadge} />
</Badge>
`
          }
        </pre>
      </div>
    );
  }
}

export default BadgePage;
