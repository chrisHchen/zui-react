import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Avator.css';

class Avator extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.element,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    size: 40,
  }

  render() {
    const {
      backgroundColor, // eslint-disable-line no-unused-vars
      icon,
      src,
      style,
      size,
      color,
      className,
      ...other
    } = this.props;

    const mergedClassNames = classNames({
      'zui-avator-wrap': true,
      [className]: !!className,
    });
    let mergedStyle = {fontSize: `${size / 2 }px`};
    const mergedIconStyle = {fontSize: `${size * 0.6 }px`};
    if (backgroundColor) {
      mergedStyle.backgroundColor = backgroundColor;
    }
    if (size) {
      mergedStyle.width = mergedStyle.height = `${size}px`;
      mergedIconStyle.width = mergedIconStyle.height = `${size * 0.6}px`;
      mergedIconStyle.margin = `${size * 0.2}px`;
    }
    if (color) {
      mergedStyle.color = color;
    }
    mergedStyle = Object.assign({}, style, mergedStyle);

    if (src) {
      return (
        <img
          style={mergedStyle}
          {...other}
          src={src}
          className={mergedClassNames}
        />
      );
    } else {
      return (
        <div
          {...other}
          style={mergedStyle}
          className={mergedClassNames}
        >
          {icon && cloneElement(icon, {
            color: color || icon.props.color || '#fff',
            style: Object.assign(mergedIconStyle, icon.props.style),
          })}
          {this.props.children}
        </div>
      );
    }
  }
}

export default Avator;
