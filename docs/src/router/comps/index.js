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
        <Bundle load={() => import('./dropdown')} path="/dropdown" />
        <Bundle load={() => import('./tabs')} path="/tabs" />
        <Bundle load={() => import('./toggle')} path="/toggle" />
        <Bundle load={() => import('./checkbox')} path="/checkbox" />
        <Bundle load={() => import('./radiobutton')} path="/radioButton" />
        <Bundle load={() => import('./textfield')} path="/textField" />
        <Bundle load={() => import('./progress')} path="/progress" />
        <Bundle load={() => import('./badge')} path="/badge" />
        <Bundle load={() => import('./message')} path="/message" />
        <Bundle load={() => import('./dialog')} path="/dialog" />
        <Bundle load={() => import('./select')} path="/select" />
        <Bundle load={() => import('./theme')} path="/theme" />
      </div>
    );
  }
}

export default Comps;
