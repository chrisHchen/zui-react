import React, {Component} from 'react';
import Button from 'zui-react/Button';
import Message from 'zui-react/Message';

class FontIconPage extends Component {
  state = {
    open: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  };

  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }
  handleRequestClose = (reason) => {
    console.log(reason);
    this.setState({
      open: false,
    });
  };
  handleRequestClose1 = (reason) => {
    console.log(reason);
    this.setState({
      open1: false,
    });
  };
  handleRequestClose2 = (reason) => {
    console.log(reason);
    this.setState({
      open2: false,
    });
  };
  handleRequestClose3 = (reason) => {
    console.log(reason);
    this.setState({
      open3: false,
    });
  };
  handleRequestClose4 = (reason) => {
    console.log(reason);
    this.setState({
      open4: false,
    });
  };
  handleRequestClose5 = (reason) => {
    console.log(reason);
    this.setState({
      open5: false,
    });
  };
  render() {
    return (
      <div>
        <h3 className="docs-title">Message</h3>
        <p className="docs-desc">设置type：共有info, success, warning, error四种，默认是info</p>
        <p className="docs-desc">handleRequestClose：参数有clickaway和timeout两种类型，默认timeout为3000毫秒</p>
        <Button label="default" onClick={() => this.setState({open: true})} />
        <Button type="info" label="info" onClick={() => this.setState({open1: true})} />
        <Button type="success" label="success" onClick={() => this.setState({open2: true})} />
        <Button type="warning" label="warning" onClick={() => this.setState({open3: true})} />
        <Button type="danger" label="danger" onClick={() => this.setState({open4: true})} />
        <Message
          open={this.state.open}
          message="this is a message"
          onRequestClose={this.handleRequestClose}
        />
        <Message
          open={this.state.open1}
          message="this is a info"
          onRequestClose={this.handleRequestClose1}
        />
        <Message
          open={this.state.open2}
          message="this is a success"
          onRequestClose={this.handleRequestClose2}
          type="success"
        />
        <Message
          open={this.state.open3}
          message="this is a warning"
          onRequestClose={this.handleRequestClose3}
          type="warning"
        />
        <Message
          open={this.state.open4}
          message="this is a error"
          onRequestClose={this.handleRequestClose4}
          type="error"
        />
        <pre className="react">
          {
            `
import Button from 'zui-react/Button';
import Message from 'zui-react/Message';

handleRequestClose = (reason) => {
  console.log(reason);
  this.setState({
    open: false,
  });
};
handleRequestClose1 = (reason) => {
  console.log(reason);
  this.setState({
    open1: false,
  });
};
handleRequestClose2 = (reason) => {
  console.log(reason);
  this.setState({
    open2: false,
  });
};
handleRequestClose3 = (reason) => {
  console.log(reason);
  this.setState({
    open3: false,
  });
};
handleRequestClose4 = (reason) => {
  console.log(reason);
  this.setState({
    open4: false,
  });
};

<Button label="default" onClick={() => this.setState({open: true})} />
<Button type="info" label="info" onClick={() => this.setState({open1: true})} />
<Button type="success" label="success" onClick={() => this.setState({open2: true})} />
<Button type="warning" label="warning" onClick={() => this.setState({open3: true})} />
<Button type="danger" label="danger" onClick={() => this.setState({open4: true})} />
<Message
  open={this.state.open}
  message="this is a message"
  onRequestClose={this.handleRequestClose}
/>
<Message
  open={this.state.open1}
  message="this is a info"
  onRequestClose={this.handleRequestClose1}
/>
<Message
  open={this.state.open2}
  message="this is a success"
  onRequestClose={this.handleRequestClose2}
  type="success"
/>
<Message
  open={this.state.open3}
  message="this is a warning"
  onRequestClose={this.handleRequestClose3}
  type="warning"
/>
<Message
  open={this.state.open4}
  message="this is a error"
  onRequestClose={this.handleRequestClose4}
  type="error"
/>
`
          }
        </pre>
        <h3 className="docs-title">设置autoHideDuration</h3>
        <p className="docs-desc">设置autoHideDuration,message会在duration到期时消失。单位为毫秒</p>
        <p className="docs-desc">设置autoHideDuration为0时只能手动clickaway才能消失</p>
        <Button label="autoHideDuration=0" onClick={() => this.setState({open5: true})} />
        <Message
          open={this.state.open5}
          message="this is a message"
          onRequestClose={this.handleRequestClose5}
          autoHideDuration={0}
        />
        <pre className="react">
          {
            `
state = {
  open: false,
};

handleRequestClose = (reason) => {
  console.log(reason);
  this.setState({
    open: false,
  });
};

<Button label="autoHideDuration=0" onClick={() => this.setState({open: true})} />
<Message
  open={this.state.open}
  message="this is a message"
  onRequestClose={this.handleRequestClose5}
  autoHideDuration={0}
/>
          `
          }
        </pre>
      </div>
    );
  }
}

export default FontIconPage;
