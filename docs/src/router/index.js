import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'zui-react/zui-theme-default.css';
import {HashRouter} from 'react-router-dom';
import Drawer from 'zui-react/Drawer';
import RoutesInDrawer from './RoutesInDrawer';
import Comps from './comps/index';

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
          <div style={{marginLeft: '250px', padding: '20px'}}>
            <Comps />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
