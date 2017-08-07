import React, {Component} from 'react';
import Checkbox from 'zui-react/Checkbox';

class CheckBoxPage extends Component {
  state = {
    checked: true,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleOnCheck = (event, checked) => {
    console.log(checked);
    this.setState({
      checked: checked,
    });
  }
  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">onCheck回调函数在变化时变调用，并传递一个isSwitched参数</p>
        <Checkbox
          label="simple"
          onCheck={(event, isSwitched) => console.log(isSwitched)}
        />
        <pre className="react">
          {
            `import Checkbox from 'zui-react/Checkbox';

<Checkbox
  label="simple"
  onCheck={(event, isSwitched) => console.log(isSwitched)}
/>`
          }
        </pre>
        <h3 className="docs-title">Disabled</h3>
        <Checkbox
          label="disabled"
          disabled={true}
        />
        <pre className="react">
          {
            `<Checkbox
  label="disabled"
  disabled={true}
/>`
          }
        </pre>
        <h3 className="docs-title">设置label位置</h3>
        <h3 className="docs-title">labelPosition: left或者right</h3>
        <Checkbox
          label="label right"
          labelPosition="left"
        />
        <pre className="react">
          {
            `<Checkbox
  label="label right"
  labelPosition="left"
/>`
          }
        </pre>
        <h3 className="docs-title">defaultChecked</h3>
        <h3 className="docs-title">设置默认是否选中</h3>
        <Checkbox
          label="defaultChecked"
          defaultChecked={true}
          onCheck={(event, isSwitched) => console.log(isSwitched)}
        />
        <pre className="react">
          {
            `<Checkbox
  label="defaultChecked"
  defaultChecked={true}
  onCheck={(event, isSwitched) => console.log(isSwitched)}
/>`
          }
        </pre>
        <h3 className="docs-title">Controlled</h3>
        <h3 className="docs-title">设置checked</h3>
        <Checkbox
          label="controlled"
          checked={this.state.checked}
          onCheck={this.handleOnCheck}
        />
        <pre className="react">
          {
            `state = {
  checked: true,
}

handleOnCheck = (event, checked) => {
  console.log(checked);
  this.setState({
    checked: checked,
  });
}

<Checkbox
  label="controlled"
  checked={this.state.checked}
  onCheck={this.handleOnCheck}
/>`
          }
        </pre>

      </div>
    );
  }
}

export default CheckBoxPage;
