import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from 'zui-react/Button';
import 'zui-react/zui-theme-default.css';

injectTapEventPlugin();

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div>
        <Button label="确定按钮" />
      </div>
    );
  }
}

export default Router;
