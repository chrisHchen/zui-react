import React, {Component} from 'react';
import Bundle from '../bundle';

class Comps extends Component {
  render() {
    return (
      <div>
        <Bundle load={() => import('./home')} path="/" exact={true} />
        <Bundle load={() => import('./home')} path="/home" exact={true} />
        <Bundle load={() => import('./installation')} path="/installation" />
        <Bundle load={() => import('./quickstart')} path="/quickstart" />
        <Bundle load={() => import('./avatar')} path="/avatar" />
        <Bundle load={() => import('./button')} path="/button" />
        <Bundle load={() => import('./fontIcon')} path="/fonticon" />
        <Bundle load={() => import('./svgIcon')} path="/svgicon" />
        <Bundle load={() => import('./popover')} path="/popover" />
        <Bundle load={() => import('./drawer')} path="/drawer" />
        <Bundle load={() => import('./list')} path="/list" />
      </div>
    );
  }
}

export default Comps;
