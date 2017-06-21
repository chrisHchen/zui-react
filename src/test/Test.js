import React, {Component} from 'react';
import Button from '../Button';
import SvgIcon from '../SvgIcon';
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
        <Button label="确定按钮" />
        <Button
          type="info" label="确定按钮"
          onTouchTap={this.handleTouchTap}
          onClick={this.handleClick}
        />
        <Button type="success" label="确定按钮" />
        <Button type="warning" label="确定按钮" />
        <Button type="danger" label="确定按钮" />
        <Button
          type="text"
          label="确定按钮"
          disableTouchRipple={false}
          touchRippleColor="#000"
          onClick={this.handleClick}
        />
        <Button
          type="text"
          label="确定按钮确定按钮"
          disableTouchRipple={false}
          touchRippleColor="green"
          onClick={this.handleClick}
        />
        <Button
          disabled={true} label="确定按钮"
          disableTouchRipple={false}
        />
        <Button
          className="hoho"
          label="确定按钮"
          disableTouchRipple={false}
          centerRipple={true}
          touchRippleColor="red"
        />
        <Button style={{backgroundColor: '#666'}} label="确定按钮" />
        <Button href="http://www.baidu.com" label="确定按钮" />
        <Button label="default">确定按钮</Button>
        <div>
          <SvgIcon color="red">
            <path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" />
            <path
              fillOpacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7
              5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
            />
          </SvgIcon>
          <SvgIcon color="red" hoverColor="green">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
          </SvgIcon>
        </div>
      </div>
    );
  }
}

export default Hello;
