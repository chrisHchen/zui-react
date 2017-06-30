import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class DropdownMenuItem extends Component {
  static zuiName = 'DropdownMenuItem';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onChange: PropTypes.func,
    onTouchTap: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static defaultProps = {
    containerElement: 'li',
  }

  handleTouchTap = (event) => {
    const {
      onChange,
      onTouchTap,
      value,
    } = this.props;
    onChange(event, value);
    if (onTouchTap) {
      onTouchTap(event);
    }
  }

  render() {
    const {
      containerElement,
      children,
      className,
      onChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const mergedClassName = classNames({
      'zui-dropdown-menu-item': true,
      [className]: !!className,
    });
    const dropdownMenuItemProps = {
      ...other,
      onTouchTap: this.handleTouchTap,
      className: mergedClassName,
    };
    return React.createElement(containerElement, dropdownMenuItemProps, children);
  }
}

export default DropdownMenuItem;
