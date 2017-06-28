import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './ListItem';

export const makeSelectable = (MyComponent) => {
  return class extends Component {
    static propTypes = {
      children: PropTypes.node,
      onChange: PropTypes.func,
      selectedClassName: PropTypes.string,
      selectedItemStyle: PropTypes.object,
      value: PropTypes.any,
    };

    extendChild(child, selectedItemStyle, selectedClassName) {
      if (child && child.type && child.type === ListItem) {
        const selected = this.isChildSelected(child, this.props);
        let mergedClassName;
        if (selected) {
          mergedClassName = classNames({
            [child.props.className]: !!child.props.className,
            [selectedClassName]: !!selectedClassName,
          });
        }

        this.keyIndex += 1;

        return React.cloneElement(child, {
          onTouchTap: (event) => {
            this.handleItemTouchTap(event, child);
            if (child.props.onTouchTap) {
              child.props.onTouchTap(event);
            }
          },
          className: mergedClassName,
          key: this.keyIndex,
          style: selectedItemStyle,
          nestedItems: child.props.nestedItems.map(
            (child) => this.extendChild(child, selectedItemStyle, selectedClassName)
          ),
          initiallyOpen: this.isInitiallyOpen(child),
        });
      } else {
        return child;
      }
    }

    isInitiallyOpen(child) {
      if (child.props.initiallyOpen) {
        return child.props.initiallyOpen;
      }
      return this.hasSelectedDescendant(false, child);
    }

    hasSelectedDescendant = (previousValue, child) => {
      if (React.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
        return child.props.nestedItems.reduce(this.hasSelectedDescendant, previousValue);
      }
      return previousValue || this.isChildSelected(child, this.props);
    };

    isChildSelected(child, props) {
      return props.value === child.props.value;
    }

    handleItemTouchTap = (event, item) => {
      const itemValue = item.props.value;
      if (itemValue !== this.props.value) {
        if (this.props.onChange) {
          this.props.onChange(event, itemValue);
        }
      }
    };

    render() {
      const {
        children,
        selectedItemStyle,
        selectedClassName,
        ...other
      } = this.props;

      this.keyIndex = 0;

      return (
        <MyComponent {...other} {...this.state}>
          {Children.map(children, (child) => (
            this.extendChild(child, selectedItemStyle, selectedClassName))
          )}
        </MyComponent>
      );
    }
  };
};

export default makeSelectable;
