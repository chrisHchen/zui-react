import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import ReinforcedButton from '../internal/ReinforcedButton';
import Popover from '../Popover';
import classNames from 'classnames';
import './Button.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableTouchRipple: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onKeyboardFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTouchStart: PropTypes.func,
    style: PropTypes.object,
    type: PropTypes.oneOf([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text',
    ]),
  }

  static defaultProps = {
    type: 'primary',
    disabled: false,
    style: {},
    className: '',
    onKeyboardFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onTouchStart: () => {},
    disableTouchRipple: true,
  }

  state = {
    isKeyboardFocused: false,
    touch: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({
        isKeyboardFocused: false,
      });
    }
  }

  handleKeyboardFocus = (event, isKeyboardFocused) => {
    this.setState({isKeyboardFocused: isKeyboardFocused});
    this.props.onKeyboardFocus(event, isKeyboardFocused);
  };

  handleMouseEnter = (event) => {
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.props.onMouseLeave(event);
  };

  handleTouchStart = (event) => {
    this.setState({touch: true});
    this.props.onTouchStart(event);
  };

  createChildren(children) {
    children = Children.toArray(children);
    children = children.filter((child) => child.type === Popover);
    children.push(<span key="label" className="zui-button_inner">{this.props.label}</span>);
    return children;
  }

  render() {
    const {
      children,
      className,
      disabled,
      label,
      type,
      ...other
    } = this.props;

    const reinforcedButtonChildren = children ? this.createChildren(children) :
      (<span key="label" className="zui-button_inner">{label}</span>) ;
    const hovered = (this.state.isKeyboardFocused || this.state.touch) && !disabled;

    const typeClass = classNames({
      'zui-button': true,
      'focused': hovered,
      'is-disabled': disabled,
      [`zui-button_${type}`]: !disabled,
      [className]: true,
    });

    return (
      <ReinforcedButton
        {...other}
        className={typeClass}
        disabled={disabled}
        onKeyboardFocus={this.handleKeyboardFocus}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onTouchStart={this.handleTouchStart}
      >
        {reinforcedButtonChildren}
      </ReinforcedButton>
    );
  }
}

export default Button;
