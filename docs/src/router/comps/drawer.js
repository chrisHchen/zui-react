import React, {Component} from 'react';
import Drawer from 'zui-react/Drawer';
import Button from 'zui-react/Button';

const example = [
  "import React, {Component} from 'react';",
  "import Drawer from 'zui-react/Drawer';",
  "import Button from 'zui-react/Button';",
  '\n',
  'handleToggle = () => {',
  '  this.setState({drawerOpen: !this.state.drawerOpen});',
  '};',
  '\n',
  '<Button',
  '  label="Toggle Drawer width=150"',
  '  onTouchTap={this.handleToggle}',
  '/>',
  '<Drawer open={this.state.drawerOpen} width={150}>',
  '  <div>Menu Item 1</div>',
  '  <div>Menu Item 2</div>',
  '  <div>width=150</div>',
  '</Drawer>',
].join('\n');

const example2 = [
  "import React, {Component} from 'react';",
  "import Drawer from 'zui-react/Drawer';",
  "import Button from 'zui-react/Button';",
  '\n',
  'handleToggle = () => {',
  '  this.setState({drawerOpen: !this.state.drawerOpen});',
  '};',
  '\n',
  '<Button',
  '  label="Toggle Drawer"',
  '  onTouchTap={this.handleToggle}',
  '/>',
  '<Drawer open={this.state.drawerOpen}>',
  '  <div>Menu Item 1</div>',
  '  <div>Menu Item 2</div>',
  '</Drawer>',
].join('\n');

const example3 = [
  "import React, {Component} from 'react';",
  "import Drawer from 'zui-react/Drawer';",
  "import Button from 'zui-react/Button';",
  '\n',
  'handleToggle = () => {',
  '  this.setState({drawerOpen: !this.state.drawerOpen});',
  '};',
  '\n',
  '<Button',
  '  label="Toggle Drawer not right-side"',
  '  onTouchTap={this.handleToggle}',
  '/>',
  '<Drawer',
  '  open={this.state.drawerOpen}',
  '  width={200}',
  '  openSecondary={true}',
  '  onRequestChange={(drawerOpen4) => this.setState({drawerOpen4})}',
  '>',
  '  <div>Menu Item 1</div>',
  '  <div>Menu Item 2</div>',
  '  <div>right-side</div>',
  '</Drawer>',
].join('\n');

const example4 = [
  "import React, {Component} from 'react';",
  "import Drawer from 'zui-react/Drawer';",
  "import Button from 'zui-react/Button';",
  '\n',
  'handleToggle = () => {',
  '  this.setState({drawerOpen: !this.state.drawerOpen});',
  '};',
  '\n',
  '<Button',
  '  label="Toggle Drawer not docked"',
  '  onTouchTap={this.handleToggle}',
  '/>',
  '<Drawer',
  '  open={this.state.drawerOpen}',
  '  width={150}',
  '  docked={false}',
  '  onRequestChange={(drawerOpen) => {',
  '    this.setState({drawerOpen});',
  '  }}',
  '>',
  '  <div>Menu Item 1</div>',
  '  <div>Menu Item 2</div>',
  '  <div>not docked</div>',
  '</Drawer>',
].join('\n');

class DrawerPage extends Component {
  state = {
    drawerOpen: false,
    drawerOpen2: false,
    drawerOpen3: false,
    drawerOpen4: false,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  handleToggle = () => {
    this.setState({drawerOpen: !this.state.drawerOpen});
  };
  handleToggle2 = () => {
    this.setState({drawerOpen2: !this.state.drawerOpen2});
  };
  handleToggle3 = () => {
    this.setState({drawerOpen3: !this.state.drawerOpen3});
  };
  handleToggle4 = () => {
    this.setState({drawerOpen4: !this.state.drawerOpen4});
  };

  render() {
    return (
      <div>
        <h3 className="docs-title">基本使用</h3>
        <p className="docs-desc">通过open属性来开启或关闭Drawer</p>
        <Button
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.drawerOpen}>
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
        </Drawer>
        <pre className="react">
          {example}
        </pre>
        <h3 className="docs-title">宽度</h3>
        <p className="docs-desc">通过width属性设置Drawer的宽度</p>
        <Button
          label="Toggle Drawer width=150"
          onTouchTap={this.handleToggle2}
        />
        <Drawer open={this.state.drawerOpen2} width={150}>
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>width=150</div>
        </Drawer>
        <pre className="react">
          {example2}
        </pre>

        <h3 className="docs-title">位置</h3>
        <p className="docs-desc">通过openSecondary属性设置Drawer的出现在左边</p>
        <Button
          label="Toggle Drawer not right-side"
          onTouchTap={this.handleToggle4}
        />
        <Drawer
          open={this.state.drawerOpen4}
          width={200}
          openSecondary={true}
          onRequestChange={(drawerOpen4) => this.setState({drawerOpen4})}
        >
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>right-side</div>
        </Drawer>
        <pre className="react">
          {example3}
        </pre>

        <h3 className="docs-title">是否是docked</h3>
        <p className="docs-desc">将docked属性设置为false可以将Drawer设置为非docked</p>
        <Button
          label="Toggle Drawer not docked"
          onTouchTap={this.handleToggle3}
        />
        <Drawer
          open={this.state.drawerOpen3}
          width={150}
          docked={false}
          onRequestChange={(drawerOpen3) => {
            this.setState({drawerOpen3});
          }}
        >
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>not docked</div>
        </Drawer>
        <pre className="react">
          {example4}
        </pre>
      </div>
    );
  }
}

export default DrawerPage;
