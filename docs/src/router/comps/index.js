import React, {Component} from 'react';
import Bundle from '../bundle';

class Comps extends Component {
  render() {
    return (
      <div>
        <Bundle load={() => import('./home')} path="/" exact={true} />
        <Bundle load={() => import('./installation')} path="/installation" />
        <Bundle load={() => import('./quickstart')} path="/quickstart" />
        <Bundle load={() => import('./avatar')} path="/avatar" />
        <Bundle load={() => import('./button')} path="/button" />
      </div>
    );
  }
}

export default Comps;
