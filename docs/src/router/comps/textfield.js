import React, {Component} from 'react';
import TextField from 'zui-react/TextField';

class TextFieldPage extends Component {
  state = {
    valueTextFiled: '',
    errorMsg: '',
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleTextFieldChange = (event, newValue) => {
    this.setState({
      valueTextFiled: newValue,
    });
  }
  handleTextFieldChange2 = (event, newValue) => {
    if (isNaN(newValue)) {
      this.setState({
        errorMsg: '请输入合法数字',
      });
    } else {
      this.setState({
        errorMsg: '',
      });
    }
  }
  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">defaultValue：设置默认值</p>
        <p className="docs-desc">labelText：设置label</p>
        <p className="docs-desc">hintText：设置提示信息</p>
        <TextField
          id="test"
          defaultValue="小明"
          labelText="你的姓名"
          hintText="请输入你的姓名"
        />
        <pre className="react">
          {
            `import TextField from 'zui-react/TextField';

<TextField
  id="test"
  defaultValue="小明"
  labelText="你的姓名"
  hintText="请输入你的姓名"
/>`
          }
        </pre>

        <h3 className="docs-title">Controlled</h3>
        <p className="docs-desc">value：设置controlled值</p>
        <p className="docs-desc">onChange：设置回调函数，两个参数分别是事件对象和新的value</p>
        <TextField
          id="controlled"
          value={this.state.valueTextFiled}
          labelText="你的姓名(controlled)"
          hintText="请输入你的姓名(controlled input)"
          onChange={this.handleTextFieldChange}
        />
        <pre className="react">
          {
            `handleTextFieldChange = (event, newValue) => {
  this.setState({
    valueTextFiled: newValue,
  });
}

<TextField
  id="controlled"
  value={this.state.valueTextFiled}
  labelText="你的姓名(controlled)"
  hintText="请输入你的姓名(controlled input)"
  onChange={this.handleTextFieldChange}
/>`
          }
        </pre>
        <h3 className="docs-title">uncontrolled</h3>
        <p className="docs-desc">可设置一个defaultValue作为初始值</p>
        <TextField
          id="test"
          labelText="身份证号码"
          hintText="请输入您的身份证号"
          onChange={(event, v) => console.log(v)}
        />
        <pre className="react">
          {
            `<TextField
  id="test"
  labelText="身份证号码"
  hintText="请输入您的身份证号"
  onChange={(event, v) => console.log(v)}
/>`
          }
        </pre>
        <h3 className="docs-title">设置type</h3>
        <p className="docs-desc">支持原生input的type值</p>
        <TextField
          type="password"
          id="test"
          labelText="密码"
          hintText="请输入您的密码"
        />
        <pre className="react">
          {
            `<TextField
  type="password"
  id="test"
  labelText="密码"
  hintText="请输入您的密码"
/>`
          }
        </pre>
        <h3 className="docs-title">没有label</h3>
        <TextField
          id="test"
          hintText="没有label"
        />
        <pre className="react">
          {
            `<TextField
  id="test"
  hintText="没有label"
/>`
          }
        </pre>
        <h3 className="docs-title">disabled</h3>
        <TextField
          id="test"
          disabled={true}
          labelText="身份证号码"
          hintText="请输入您的身份证号"
        />
        <pre className="react">
          {
            `<TextField
  id="test"
  disabled={true}
  labelText="身份证号码"
  hintText="请输入您的身份证号"
/>`
          }
        </pre>
        <h3 className="docs-title">多行文本框, 类似textarea</h3>
        <p className="docs-desc">设置multiLine为true，并设置初始行数参数row</p>
        <p className="docs-desc">同时可以设置rowsMax，到达max后出现滚动条</p>
        <TextField
          labelText="多行"
          hintText="这是多行文本框的提示文字，这里可以出现多行的提示"
          multiLine={true}
          rows={2}
          rowsMax={4}
        />
        <pre className="react">
          {
            `<TextField
  labelText="多行"
  hintText="这是多行文本框的提示文字，这里可以出现多行的提示"
  multiLine={true}
  rows={2}
  rowsMax={4}
/>`
          }
        </pre>
        <h3 className="docs-title">设置错误信息</h3>
        <TextField
          id="test1"
          labelText="身份证号码"
          hintText="请输入您的身份证号"
          errorText="这是错误信息"
        />
        <pre className="react">
          {
            `<TextField
  id="test1"
  labelText="身份证号码"
  hintText="请输入您的身份证号"
  errorText="这是错误信息"
/>`
          }
        </pre>
        <h3 className="docs-title">多行文本框，并设置错误信息</h3>
        <p className="docs-desc">下面的例子只能输入数字</p>
        <TextField
          labelText="多行"
          hintText="这是多行文本框的提示文字，这里可以出现多行的提示"
          multiLine={true}
          rows={2}
          rowsMax={4}
          onChange={this.handleTextFieldChange2}
          errorText={this.state.errorMsg}
        />
        <pre className="react">
          {
            `handleTextFieldChange2 = (event, newValue) => {
  if (isNaN(newValue)) {
    this.setState({
      errorMsg: '请输入合法数字',
    });
  } else {
    this.setState({
      errorMsg: '',
    });
  }
}

<TextField
  labelText="多行"
  hintText="这是多行文本框的提示文字，这里可以出现多行的提示"
  multiLine={true}
  rows={2}
  rowsMax={4}
  onChange={this.handleTextFieldChange2}
  errorText={this.state.errorMsg}
/>`
          }
        </pre>
      </div>
    );
  }
}

export default TextFieldPage;
