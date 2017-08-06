import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'zui-react/Button';
import Popover from 'zui-react/Popover';

class PopoverPage extends Component {
  state = {
    open: false,
    open2: false,
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

  handleOpenPopover = () => {
    this.setState({
      open: true,
    });
  }
  handleMouseEnter = () => {
    this.setState({
      open2: true,
    });
  }
  handleMouseLeave = () => {
    this.setState({
      open2: false,
    });
  }
  handleRequestClose = (reason) => {
    console.log(reason);
    this.setState({
      open: false,
    });
  }
  handleRequestClose2 = (reason) => {
    console.log(reason);
  }
  render() {
    const style = {
      height: '200px',
      lineHeight: '200px',
      backgroundColor: '#fff',
      width: '150px',
      textAlign: 'center',
    };
    return (
      <div>
        <h3 className="docs-title">通过click事件触发</h3>
        <p className="docs-desc">将触发事件component的ref设置成anchorEl</p>
        <Button
          label="click me"
          disableTouchRipple={false}
          ref={(el) => this.anchor = ReactDOM.findDOMNode(el)}
          onTouchTap={this.handleOpenPopover}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.anchor}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <div style={style}>this is popover</div>
        </Popover>
        <pre className="react">
          {
            `
import Button from 'zui-react/Button';
import Popover from 'zui-react/Popover';

render(){
  const style = {
    height: '200px',
    lineHeight: '200px',
    backgroundColor: '#fff',
    width: '150px',
    textAlign: 'center',
  };

  return(
    <Button
    label="click me"
    disableTouchRipple={false}
    ref={(el) => this.anchor = ReactDOM.findDOMNode(el)}
    onTouchTap={this.handleOpenPopover}
    />
    <Popover
    open={this.state.open}
    anchorEl={this.anchor}
    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    onRequestClose={this.handleRequestClose}
    >
    <div style={{height: '200px', lineHeight: '200px'}}>this is a popover</div>
    </Popover>
  )
}`
          }
        </pre>
        <h3 className="docs-title">通过鼠标的hover触发</h3>
        <p className="docs-desc">注意要将useLayerForClickAway设置成false</p>
        <Button
          label="hover me"
          disableTouchRipple={false}
          ref={(el) => this.anchor2 = ReactDOM.findDOMNode(el)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
        <Popover
          open={this.state.open2}
          anchorEl={this.anchor2}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose2}
          useLayerForClickAway={false}
        >
          <div style={style}>this is a popover</div>
        </Popover>
        <pre className="react">
          {
            `<Button
  label="hover me"
  disableTouchRipple={false}
  ref={(el) => this.anchor2 = ReactDOM.findDOMNode(el)}
  onMouseEnter={this.handleMouseEnter}
  onMouseLeave={this.handleMouseLeave}
/>
<Popover
  open={this.state.open2}
  anchorEl={this.anchor2}
  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
  targetOrigin={{horizontal: 'left', vertical: 'top'}}
  onRequestClose={this.handleRequestClose2}
  useLayerForClickAway={false}
>
  <div style={style}>this is popover</div>
</Popover>`
          }
        </pre>
      </div>
    );
  }
}

export default PopoverPage;
