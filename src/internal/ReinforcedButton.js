import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Events from '../util/event';
import keycode from 'keycode';
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

class ReinforcedButton extends Component {
  static propTypes = {
    centerRipple: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string.isRequired,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    disableTouchRipple: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    keyboardFocused: PropTypes.bool,
    nativeType: PropTypes.oneOf([
      'button',
      'submit',
      'reset',
    ]),
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyboardFocus: PropTypes.func,
    onTouchTap: PropTypes.func,
    style: PropTypes.object,
    tabIndex: PropTypes.number,
    touchRippleColor: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    style: {},
    containerElement: 'button',
    nativeType: 'button',
    onBlur: () => {},
    onClick: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyUp: () => {},
    onKeyboardFocus: () => {},
    onTouchTap: () => {},
    tabIndex: 0,
    disableTouchRipple: true,
  }

  state = {
    isKeyboardFocused: false,
  }

  componentWillMount() {
    const {disabled, keyboardFocused} = this.props;
    if (!disabled && keyboardFocused) {
      this.setState({isKeyboardFocused: true});
    }
  }

  componentDidMount() {
    listenForTabPress();
    if (this.state.isKeyboardFocused) {
      this.button.focus();
      this.props.onKeyboardFocus(null, true);
    }
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

  handleBlur = (event) => {
    this.cancelFocusTimeout();
    this.removeKeyboardFocus(event, false);
    this.props.onBlur(event);
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

  handleClick = (event) => {
    if (!this.props.disabled) {
      tabPressed = false;
      this.props.onClick(event);
    }
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

  cancelFocusTimeout() {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
      this.focusTimeout = null;
    }
  }

  createButtonChildren() {
    const {
      centerRipple,
      children,
      disabled,
      disableTouchRipple,
      touchRippleColor,
    } = this.props;

    const touchRipple = !disabled && !disableTouchRipple ? (
      <TouchRipple
        centerRipple={centerRipple}
        color={touchRippleColor}
        key="touchRipple"
      >
        {children}
      </TouchRipple>
    ) : undefined;

    return [
      touchRipple,
      touchRipple ? undefined : children,
    ];
  }

  render() {
    const {
      disabled,
      className,
      href,
      containerElement,
      disableTouchRipple, // eslint-disable-line no-unused-vars
      centerRipple, // eslint-disable-line no-unused-vars
      children, // eslint-disable-line no-unused-vars
      onBlur, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onKeyUp, // eslint-disable-line no-unused-vars
      onKeyDown, // eslint-disable-line no-unused-vars
      onTouchTap, // eslint-disable-line no-unused-vars
      onKeyboardFocus, // eslint-disable-line no-unused-vars
      touchRippleColor, // eslint-disable-line no-unused-vars
      tabIndex,
      nativeType,
      ...other
    } = this.props;

    const buttonProps = {
      className,
      href,
      ref: (node) => this.button = node,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown,
      onTouchTap: this.handleTouchTap,
      tabIndex: disabled ? -1 : tabIndex,
      ...other,
    };

    const buttonChildren = this.createButtonChildren();

    if (React.isValidElement(containerElement)) {
      return React.cloneElement(containerElement, buttonProps, buttonChildren);
    }

    if (!href && containerElement === 'button') {
      buttonProps.type = nativeType;
    }

    return React.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
  }
}

export default ReinforcedButton;
