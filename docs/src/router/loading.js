import React, {Component} from 'react';
import CircularProgress from 'zui-react/CircularProgress';

const loadingStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  marginLeft: '125px',
};

class Loading extends Component {
  render() {
    return (
      <div style={loadingStyle}>
        <CircularProgress />
      </div>
    );
  }
}

export default Loading;
