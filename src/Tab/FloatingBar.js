import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoPrefix from '../util/autoPrefix';

class FloatingBar extends Component {
  static propTypes = {
    translateX: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  render() {
    let {
      width,
      translateX,
    } = this.props;
    if (!/^\d+(\.\d+)?px$/.test(width)) {
      width = `${width }px`;
    }
    if (!/^\d+(\.\d+)?px$/.test(translateX)) {
      translateX = `${translateX }px`;
    }
    const style = {
      width,
    };
    autoPrefix.set(style, 'transform', `translateX(${translateX})`);
    return (
      <div className="zui-tab-floatingBar" style={style} />
    );
  }
}

export default FloatingBar;
