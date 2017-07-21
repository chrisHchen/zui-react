import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';

class DropdownMenu extends Component {
  static zuiName = 'DropdownMenu';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    containerElement: 'ul',
  }

  createChildren(children) {
    return (
      Children.map(children, (child) => {
        if (child.type === DropdownMenuItem) {
          const mergedProps = {
            onChange: this.props.onChange,
            ...child.props,
          };
          return cloneElement(child, mergedProps);
        } else {
          return null;
        }
      })
    );
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
      'zui-dropdown-menu': true,
      [className]: !!className,
    });
    const dropdownMenuProps = {
      ...other,
      className: mergedClassName,
    };
    return React.createElement(containerElement, dropdownMenuProps, this.createChildren(children));
  }
}

export default DropdownMenu;
