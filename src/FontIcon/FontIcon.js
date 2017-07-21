import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FontIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    style: {},
  }

  state = {
    hovered: false,
  }

  handleMouseLeave = (event) => {
    if (this.props.hoverColor !== undefined) {
      this.setState({hovered: false});
    }
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    if (this.props.hoverColor !== undefined) {
      this.setState({hovered: true});
    }
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      hoverColor, // eslint-disable-line no-unused-vars
      color,
      onMouseLeave, // eslint-disable-line no-unused-vars
      onMouseEnter, // eslint-disable-line no-unused-vars
      style,
      className,
      ...other
    } = this.props;
    const offColor = color ? color : 'currentColor';
    const onColor = hoverColor ? hoverColor : offColor;
    const mergedStyle = Object.assign({}, style, {
      color: this.state.hovered ? onColor : offColor,
    });

    const fontIconClassName = classNames({
      'zui-fonticon': true,
      [className]: true,
    });

    return (
      <span
        {...other}
        className={fontIconClassName}
        style={mergedStyle}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      />
    );
  }
}

export default FontIcon;
