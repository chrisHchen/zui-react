import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'zui-react/zui-theme-default.css';
import {HashRouter} from 'react-router-dom';
import Drawer from 'zui-react/Drawer';
import RoutesInDrawer from './RoutesInDrawer';

injectTapEventPlugin();

class Router extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Drawer open={true}>
            <RoutesInDrawer />
          </Drawer>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
