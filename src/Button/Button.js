import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    disabled: PropTypes.bool,
    hoverColor: PropTypes.string,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    style: PropTypes.object,
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
  }

  render() {
    const {
      type,
      disabled,
    } = this.props;

    const typeClass = classNames({
      'zui-button': true,
      'is-disabled': disabled,
      [`zui-button_${type}`]: !disabled,
    });
    return (
      <button className={typeClass}><span className="zui-button_inner">失效按钮</span></button>
    );
  }
}

export default Button;
