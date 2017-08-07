import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from 'zui-react/RadioButton';

class FontIconPage extends Component {
  state = {
    valueSelected: 'A',
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleOnChange = (event, value) => {
    console.log(value);
    if (value === 'C') {
      this.setState({
        valueSelected: 'A',
      });
    }
  }
  render() {
    return (
      <div>
        <h3 className="docs-title">RadioButton</h3>
        <p className="docs-desc">设置defaultSelected来设置选中值</p>
        <div style={{width: '180px'}}>
          <RadioButtonGroup defaultSelected="A" name="simple">
            <RadioButton
              label="Chose A"
              value="A"
            />
            <RadioButton
              label="Chose B"
              value="B"
            />
            <RadioButton
              label="Chose C"
              value="C"
            />
          </RadioButtonGroup>
        </div>
        <pre className="react">
          {
            `import {RadioButton, RadioButtonGroup} from 'zui-react/RadioButton';

<RadioButtonGroup defaultSelected="A" name="simple">
  <RadioButton
    label="Chose A"
    value="A"
  />
  <RadioButton
    label="Chose B"
    value="B"
  />
  <RadioButton
    label="Chose C"
    value="C"
  />
</RadioButtonGroup>`
          }
        </pre>

        <h3 className="docs-title">controlled</h3>
        <p className="docs-desc">设置labelPosition来设置label位置</p>
        <p className="docs-desc">通过value和设置handleOnChange来设置其为controlled</p>
        <div style={{width: '180px'}}>
          <RadioButtonGroup
            defaultSelected="A"
            name="simple"
            labelPosition="left"
            valueSelected={this.state.valueSelected}
            onChange={this.handleOnChange}
          >
            <RadioButton
              label="Chose A"
              value="A"
            />
            <RadioButton
              label="Chose B"
              value="B"
            />
            <RadioButton
              label="Chose C=A"
              value="C"
            />
            <RadioButton
              label="Chose D"
              value="D"
              disabled={true}
            />
          </RadioButtonGroup>
        </div>
        <pre className="react">
          {
            `import {RadioButton, RadioButtonGroup} from 'zui-react/RadioButton';

handleOnChange = (event, value) => {
  console.log(value);
  if (value === 'C') {
    this.setState({
      valueSelected: 'A',
    });
  }
}

<RadioButtonGroup
  defaultSelected="A"
  name="simple"
  labelPosition="left"
  valueSelected={this.state.valueSelected}
  onChange={this.handleOnChange}
>
  <RadioButton
    label="Chose A"
    value="A"
  />
  <RadioButton
    label="Chose B"
    value="B"
  />
  <RadioButton
    label="Chose C=A"
    value="C"
  />
  <RadioButton
    label="Chose D"
    value="D"
    disabled={true}
  />
</RadioButtonGroup>`
          }
        </pre>

      </div>
    );
  }
}

export default FontIconPage;
