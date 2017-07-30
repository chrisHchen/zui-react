import React, {Component} from 'react';
import ButtonPage from './button';
import {Route} from 'react-router-dom';

class Comps extends Component {
  render() {
    return (
      <div>
        <Route component={ButtonPage} path="/button" />
      </div>
    );
  }
}

export default Comps;
