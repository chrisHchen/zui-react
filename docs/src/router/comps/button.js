import React, {Component} from 'react';
import Button from 'zui-react/Button';

class ButtonPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
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
          {
            `
          import Button from 'zui-react/Button';

          render(){
            return(
              <Button label="默认按钮" />
              <Button type="text" label="确定按钮"/>
              <Button disabled={true} label="确定按钮"/>
            )
          }
          `
          }
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
          {
            `
            import Button from 'zui-react/Button';

            render(){
              return(
                <Button label="默认按钮" />
                <Button type="info" label="信息按钮" />
                <Button type="success" label="成功按钮" />
                <Button type="warning" label="警告按钮" />
                <Button type="danger" label="危险按钮" />
              )
            }
            `
          }
        </pre>
      </div>
    );
  }
}

export default ButtonPage;
