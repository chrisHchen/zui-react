import React, {Component} from 'react';
import Select from 'zui-react/Select';

const options = [{
  key: 1,
  value: '选项1',
}, {
  key: 2,
  value: '选项2',
}, {
  key: 3,
  value: '选项3',
}];

class SelectPage extends Component {
  state = {
    value: '',
    value1: '',
  }

  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  handleChange = (event, key) => {
    this.setState({value: key});
  }
  handleChange1 = (event, key) => {
    this.setState({value1: key});
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">Select</h3>
        <p className="docs-desc">options为数组，目前支持key，value两个属性</p>
        <p className="docs-desc">onChange回调的第二个参数会返回选中项的key，第一个参数是事件对象</p>
        <Select
          defaultValue={1}
          options={options}
          onChange={(event, key) => console.log(key)}
        />
        <pre className="react">
          {
            `
import Select from 'zui-react/Select';

const options = [{
  key: 1,
  value: '选项1',
}, {
  key: 2,
  value: '选项2',
}, {
  key: 3,
  value: '选项3',
}];

<Select
  defaultValue={1}
  options={options}
  onChange={(event, key) => console.log(key)}
/>
`
          }
        </pre>

        <h3 className="docs-title">Controlled</h3>
        <p className="docs-desc">设置value和onChange回调的来设置选中值</p>
        <Select
          hintText="请选择"
          value={this.state.value}
          options={options}
          onChange={this.handleChange}
        />
        <pre className="react">
          {
            `
import Select from 'zui-react/Select';

const options = [{
  key: 1,
  value: '选项1',
}, {
  key: 2,
  value: '选项2',
}, {
  key: 3,
  value: '选项3',
}];

state = {
  value: '',
}

handleChange = (event, key) => {
  this.setState({value: key});
}

<Select
  hintText="请选择"
  value={this.state.value}
  options={options}
  onChange={this.handleChange}
/>
`
          }
        </pre>

      </div>
    );
  }
}

export default SelectPage;
