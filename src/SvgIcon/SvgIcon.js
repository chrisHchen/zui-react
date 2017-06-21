import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SvgIcon.css';
import classNames from 'classnames';

class SvgIcon extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    style: PropTypes.object,
    viewBox: PropTypes.string,
  }

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    style: {},
  }

  state = {
    hovered: false,
  }

  handleMouseEnter = (event) => {
    this.setState({
      hovered: true,
    });
    this.props.onMouseEnter(event);
  }

  handleMouseLeave = (event) => {
    this.setState({
      hovered: false,
    });
    this.props.onMouseLeave(event);
  }

  render() {
    const {
      color,
      children,
      hoverColor,
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;


    const svgIconClassName = classNames({
      'zui-svgicon': true,
    });

    const colorOff = color ? color : 'currentColor';
    const colorOn = hoverColor ? hoverColor : colorOff;

    const mergedStyle = Object.assign({}, style, {
      fill: this.state.hovered ? colorOn : colorOff,
    });

    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={mergedStyle}
        className={svgIconClassName}
      >
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
