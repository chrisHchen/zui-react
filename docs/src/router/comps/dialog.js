import React, {Component} from 'react';
import Dialog from 'zui-react/Dialog';
import Button from 'zui-react/Button';

class DialogPage extends Component {
  state = {
    openDialog: false,
    openDialog1: false,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleClose = () => {
    this.setState({openDialog: false});
  };
  handleClose1 = () => {
    this.setState({openDialog1: false});
  };
  handleConfirm = () => {
    console.log('confirmed');
    this.setState({openDialog: false});
  };
  render() {
    return (
      <div>
        <h3 className="docs-title">Dialog基本用法</h3>
        <p className="docs-desc">设置open，以及onRequestClose和onRequestConfirm回调函数</p>
        <Button label="show dialog" onClick={() => this.setState({openDialog: true})} />
        <Dialog
          open={this.state.openDialog}
          onRequestClose={this.handleClose}
          onRequestConfirm={this.handleConfirm}
        >
        this is content
        </Dialog>
        <pre className="react">
          {
            `import Dialog from 'zui-react/Dialog';
state = {
  openDialog: false,
}

handleClose = () => {
  this.setState({openDialog: false});
};
handleConfirm = () => {
  console.log('confirmed');
  this.setState({openDialog: false});
};

<Button label="show dialog" onClick={() => this.setState({openDialog: true})} />
<Dialog
  open={this.state.openDialog}
  onRequestClose={this.handleClose}
  onRequestConfirm={this.handleConfirm}
>
            `
          }
        </pre>
        <h3 className="docs-title">Actions</h3>
        <p className="docs-desc">设置actions来设置dialog的按钮</p>
        <p className="docs-desc">用size来设置dialog的大小，有tiny，small，large，full四种，默认为small</p>
        <p className="docs-desc">另外，设置modal=true,则Dialog不能通过点击背景关闭</p>
        <Button label="modal dialog" onClick={() => this.setState({openDialog1: true})} />
        <Dialog
          open={this.state.openDialog1}
          onRequestClose={this.handleClose1}
          modal={true}
          size="large"
          actions={[
            <Button type="info" label="关闭" onClick={() => this.setState({openDialog1: false})} />,
            <Button label="好的" onClick={() => this.setState({openDialog1: false})} />,
          ]}
        >
          modal
        </Dialog>
        <pre className="react">
          {
            `import Dialog from 'zui-react/Dialog';

state = {
  openDialog1: false,
}

handleClose1 = () => {
  this.setState({openDialog1: false});
}

<Button label="modal dialog" onClick={() => this.setState({openDialog1: true})} />
<Dialog
  open={this.state.openDialog1}
  onRequestClose={this.handleClose1}
  modal={true}
  size="large"
  actions={[
    <Button type="info" label="关闭" onClick={() => this.setState({openDialog1: false})} />,
    <Button label="好的" onClick={() => this.setState({openDialog1: false})} />,
  ]}
>
            `
          }
        </pre>
      </div>
    );
  }
}

export default DialogPage;
