import React, {Component} from 'react';
import ZaButton from '../Button/ZaButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Hello extends Component {
  handleTouchTap = () => {
    console.log('touchTap');  // eslint-disable-line
  }
  handleClick = () => {
    console.log('click');  // eslint-disable-line
  }
  render() {
    return (
      <div>
        <ZaButton label="确定按钮" />
        <ZaButton
          type="info" label="确定按钮"
          onTouchTap={this.handleTouchTap}
          onClick={this.handleClick}
        />
        <ZaButton type="success" label="确定按钮" />
        <ZaButton type="warning" label="确定按钮" />
        <ZaButton type="danger" label="确定按钮" />
        <ZaButton
          type="text"
          label="确定按钮"
          disableTouchRipple={false}
          touchRippleColor="#000"
          onClick={this.handleClick}
        />
        <ZaButton
          type="text"
          label="确定按钮确定按钮"
          disableTouchRipple={false}
          touchRippleColor="red"
          onClick={this.handleClick}
        />
        <ZaButton
          disabled={true} label="确定按钮"
          disableTouchRipple={false}
        />
        <ZaButton
          className="hoho"
          label="确定按钮"
          disableTouchRipple={false}
          centerRipple={true}
          touchRippleColor="red"
        />
        <ZaButton style={{backgroundColor: '#666'}} label="确定按钮" />
        <ZaButton href="http://www.baidu.com" label="确定按钮" />
        <ZaButton label="default">确定按钮</ZaButton>
      </div>
    );
  }
}

export default Hello;
