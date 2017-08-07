import React, {Component} from 'react';
import Toggle from 'zui-react/Toggle';

// const example = [
//   "import React, {Component} from 'react';",
//   "import Toggle from 'zui-react/Toggle';",
//   '\n',
//   '<FontIcon',
//   '  className="iconfont icon-iphone"',
//   '  style={{marginRight: "15px"}}',
//   '/>',
//   '<FontIcon',
//   '  className="iconfont icon-iphone"',
//   '  color="red"',
//   '  style={{marginRight: "15px"}} />',
//   '<FontIcon',
//   '  className="iconfont icon-iphone"',
//   '  color="blue"',
//   '  hoverColor="green"',
//   '  style={{marginRight: "15px"}}',
//   '/>',
// ].join('\n');

class TogglePage extends Component {
  state = {
    toggled: false,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleOnToggle = (event, toggled) => {
    console.log(toggled);
    this.setState({
      toggled: toggled,
    });
  }
  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">onToggle回调函数有2各参数：事件对象和是否开启</p>
        <Toggle
          label="simple"
          onToggle={(event, isSwitched) => console.log(isSwitched)}
        />
        <pre className="react">
          {
            `import Toggle from 'zui-react/Toggle';

<Toggle
  label="simple"
  onToggle={(event, isSwitched) => console.log(isSwitched)}
/>`
          }
        </pre>
        <h3 className="docs-title">disabled</h3>
        <Toggle
          label="disabled"
          disabled={true}
        />
        <pre className="react">
          {
            `<Toggle
  label="disabled"
  disabled={true}
/>`
          }
        </pre>
        <h3 className="docs-title">label的位置</h3>
        <p className="docs-desc">通过labelPosition来设置label的位置</p>
        <div style={{width: '180px'}}>
          <Toggle
            label="label right"
            labelPosition="right"
          />
        </div>
        <pre className="react">
          {
            `<Toggle
  label="label right"
  labelPosition="right"
/>`
          }
        </pre>
        <h3 className="docs-title">defaultToggled</h3>
        <div style={{width: '180px'}}>
          <Toggle
            label="defaultToggled"
            defaultToggled={true}
            onToggle={(event, isSwitched) => console.log(isSwitched)}
          />
        </div>
        <pre className="react">
          {
            `<Toggle
  label="defaultToggled"
  defaultToggled={true}
  onToggle={(event, isSwitched) => console.log(isSwitched)}
/>`
          }
        </pre>
        <h3 className="docs-title">Controlled</h3>
        <div style={{width: '180px'}}>
          <Toggle
            label="controlled"
            toggled={this.state.toggled}
            onToggle={this.handleOnToggle}
          />
        </div>
        <pre className="react">
          {

            `handleOnToggle = (event, toggled) => {
  console.log(toggled);
  this.setState({
      toggled: toggled,
    });
}

<Toggle
  label="controlled"
  toggled={this.state.toggled}
  onToggle={this.handleOnToggle}
/>`
          }
        </pre>
      </div>
    );
  }
}

export default TogglePage;
