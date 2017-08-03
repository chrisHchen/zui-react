import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Loading from './loading';
import { withRouter } from 'react-router';
class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount() {
    if (this.props.location.pathname === this.props.path) { // eslint-disable-line react/prop-types
      this.load(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === this.props.path) { // eslint-disable-line react/prop-types
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load().then((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    const {
      load, // eslint-disable-line no-unused-vars, react/prop-types
      ...other
    } = this.props;

    return (
      <Route
        render={(props) => { // eslint-disable-line no-unused-vars
          return this.state.mod ? React.createElement(this.state.mod) : <Loading />;
        }} {...other}
      />
    );
  }
}

export default withRouter(Bundle);
