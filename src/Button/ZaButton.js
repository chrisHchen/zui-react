import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Events from '../util/event';
import keycode from 'keycode';
import './ZaButton.css';
import classNames from 'classnames';
import TouchRipple from '../internal/TouchRipple';

let tabPressed = false;
let listening = false;

function listenForTabPress() {
  if (!listening) {
    Events.on(window, 'keydown', (event) => {
      tabPressed = keycode(event) === 'tab';
    });
    listening = true;
  }
}

class ZaButton extends Component {
  static propTypes = {
    centerRipple: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    disableTouchRipple: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    keyboardFocused: PropTypes.bool,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyboardFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchTap: PropTypes.func,
    style: PropTypes.object,
    tabIndex: PropTypes.number,
    touchRippleColor: PropTypes.string,
    type: PropTypes.oneOf([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text',
    ]),
  };

  static defaultProps = {
    type: 'primary',
    disabled: false,
    style: {},
    containerElement: 'button',
    className: '',
    onBlur: () => {},
    onClick: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyUp: () => {},
    onTouchTap: () => {},
    onKeyboardFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onTouchStart: () => {},
    tabIndex: 0,
    disableTouchRipple: true,
  }

  state = {
    isKeyboardFocused: false,
    touch: false,
  }

  componentWillMount() {
    const {disabled, keyboardFocused} = this.props;
    if (!disabled && keyboardFocused) {
      this.setState({isKeyboardFocused: true});
    }
  }

  componentDidMount() {
    listenForTabPress();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled &&
      this.state.isKeyboardFocused) {
      this.setState({isKeyboardFocused: false});
      if (nextProps.onKeyboardFocus) {
        nextProps.onKeyboardFocus(null, false);
      }
    }
  }

  componentWillUnmount() {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
    }
  }

  handleClick = (event) => {
    if (!this.props.disabled) {
      tabPressed = false;
      this.props.onClick(event);
    }
  }

  handleBlur = (event) => {
    this.cancelFocusTimeout();
    this.removeKeyboardFocus(event, false);
    this.props.onBlur(event);
  }

  cancelFocusTimeout() {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
      this.focusTimeout = null;
    }
  }

  handleFocus = (event) => {
    if (event) event.persist();
    // setTimeout is needed because the focus event fires before keydown/click/touchTap event
    this.focusTimeout = setTimeout(() => {
      if (tabPressed) {
        this.setKeyboardFocus(event);
        tabPressed = false;
      }
    }, 150);
    this.props.onFocus(event);
  }

  handleKeyDown = (event) => {
    if (!this.props.disabled) {
      if (keycode(event) === 'enter' && this.state.isKeyboardFocused) {
        this.handleTouchTap(event);
      }
      if (keycode(event) === 'esc' && this.state.isKeyboardFocused) {
        this.removeKeyboardFocus(event);
      }
    }
    this.props.onKeyDown(event);
  }

  handleKeyUp = (event) => {
    if (!this.props.disabled) {
      if (keycode(event) === 'space' && this.state.isKeyboardFocused) {
        this.handleTouchTap(event);
      }
    }
    this.props.onKeyUp(event);
  }

  handleTouchTap = (event) => {
    this.cancelFocusTimeout();
    if (!this.props.disabled) {
      tabPressed = false;
      this.removeKeyboardFocus(event);
      this.props.onTouchTap(event);
    }
  }

  handleMouseLeave = (event) => {
    this.props.onMouseLeave(event);
  }

  handleMouseEnter = (event) => {
    this.props.onMouseEnter(event);
  }

  handleTouchStart = (event) => {
    this.setState({touch: true});
    this.props.onTouchStart(event);
  }

  removeKeyboardFocus(event) {
    if (this.state.isKeyboardFocused) {
      this.setState({isKeyboardFocused: false});
      this.props.onKeyboardFocus(event, false);
    }
  }

  setKeyboardFocus(event) {
    if (!this.state.isKeyboardFocused) {
      this.setState({isKeyboardFocused: true});
      this.props.onKeyboardFocus(event, true);
    }
  }

  createButtonChildren() {
    const {
      centerRipple,
      children,
      disabled,
      label,
      disableTouchRipple,
      touchRippleColor,
    } = this.props;

    const buttonChildren = label ? (<span key="label" className="zui-button_inner">{label}</span>) : children;
    const touchRipple = !disabled && !disableTouchRipple ? (
      <TouchRipple
        centerRipple={centerRipple}
        color={touchRippleColor}
        key="touchRipple"
      >
        {buttonChildren}
      </TouchRipple>
    ) : undefined;

    return [
      touchRipple,
      touchRipple ? undefined : buttonChildren,
    ];
  }

  render() {
    const {
      type,
      disabled,
      className,
      label, // eslint-disable-line no-unused-vars
      href,
      containerElement,
      disableTouchRipple, // eslint-disable-line no-unused-vars
      centerRipple, // eslint-disable-line no-unused-vars
      children, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onBlur, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      onKeyUp, // eslint-disable-line no-unused-vars
      onKeyDown, // eslint-disable-line no-unused-vars
      onTouchTap, // eslint-disable-line no-unused-vars
      onKeyboardFocus, // eslint-disable-line no-unused-vars
      touchRippleColor, // eslint-disable-line no-unused-vars
      tabIndex,
      ...other
    } = this.props;

    const hovered = (this.state.isKeyboardFocused || this.state.touch) && !disabled;

    const typeClass = classNames({
      'zui-button': true,
      'focused': hovered,
      'is-disabled': disabled,
      [`zui-button_${type}`]: !disabled,
      [className]: true,
    });
    const buttonProps = {
      className: typeClass,
      href,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown,
      onTouchTap: this.handleTouchTap,
      onMouseLeave: this.handleMouseLeave,
      onMouseEnter: this.handleMouseEnter,
      onTouchStart: this.handleTouchStart,
      tabIndex: disabled ? -1 : tabIndex,
      ...other,
    };
    const buttonChildren = this.createButtonChildren();
    return React.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
  }
}

export default ZaButton;
