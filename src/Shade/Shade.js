import React, {Component} from 'react';
import PropTypes from 'prop-types';
import propTypes from '../util/propTypes';
import classNames from 'classnames';
import './Shade.css';

class Shade extends Component {
  static propTypes = {
    children: PropTypes.node,
    circle: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    zDepth: propTypes.shade,
  }

  static defaultProps = {
    circle: false,
    zDepth: 1,
  }

  render() {
    const {
      children,
      className,
      circle,
      style,
      zDepth,
      ...other
    } = this.props;

    const mergedClass = classNames({
      'zui-shade': true,
      [`z-depth-${zDepth}`]: zDepth,
      'circled': !!circle,
      [className]: !!className,
    });

    return (
      <div
        style={style}
        className={mergedClass}
        {...other}
      >
        {children}
      </div>
    );
  }
}

export default Shade;
