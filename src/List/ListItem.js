import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'recompose/shallowEqual';
import NestedList from './NestedList';
import ReinforcedButton from '../internal/ReinforcedButton';
import classNames from 'classnames';
import OpenIcon from '../svg-embedded/expand-less';
import CloseIcon from '../svg-embedded/expand-more';
import './ListItem.css';

const nestedLevelDepth = 18;

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    containerElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    disabled: PropTypes.bool,
    initiallyOpen: PropTypes.bool,
    innerDivStyle: PropTypes.object,
    nestedItems: PropTypes.arrayOf(PropTypes.element),
    nestedLevel: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNestedListToggle: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchTap: PropTypes.func,
    open: PropTypes.bool,
    /* This is the block element that contains the primary text.
      If a string is passed in, a div tag will be rendered.*/
    primaryText: PropTypes.node,
    // If true, clicking or tapping the primary text of the ListItem toggles the nested list.
    primaryTogglesNestedList: PropTypes.bool,
    style: PropTypes.bool,
  }

  static defaultProps = {
    containerElement: 'div',
    disabled: false,
    initiallyOpen: false,
    nestedItems: [],
    nestedLevel: 0,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onNestedListToggle: () => {},
    onTouchEnd: () => {},
    onTouchStart: () => {},
    open: null,
    primaryTogglesNestedList: true,
  };

  state = {
    hovered: false,
    open: false,
    touch: false,
  };

  componentWillMount() {
    this.setState({
      open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open,
    });
  }

  componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.open !== null)
      this.setState({open: nextProps.open});
    if (nextProps.disabled && this.state.hovered)
      this.setState({hovered: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  handleMouseEnter = (event) => {
    if (!this.state.touch) this.setState({hovered: true});
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.setState({hovered: false});
    this.props.onMouseLeave(event);
  };

  handleNestedListToggle = (event) => {
    event.stopPropagation();
    if (this.props.onTouchTap) {
      this.props.onTouchTap();
    }
    if (this.props.open === null) {
      this.setState({open: !this.state.open}, () => {
        this.props.onNestedListToggle(this);
      });
    } else {
      // Exposing `this` in the callback is quite a bad API.
      // I'm doing a one level deep clone to expose a fake state.open.
      this.props.onNestedListToggle({
        ...this,
        state: {
          open: !this.state.open,
        },
      });
    }
  };

  handleTouchStart = (event) => {
    this.setState({touch: true});
    this.props.onTouchStart(event);
  };

  handleTouchEnd = (event) => {
    this.setState({touch: true});
    this.props.onTouchEnd(event);
  }

  createDisabledElement(contentChildren, additionalProps) {
    const {
      innerDivStyle,
      style,
      primaryText,
      nestedLevel,
    } = this.props;

    const mergedDivStyles = Object.assign({},
      {
        marginLeft: `${nestedLevel * nestedLevelDepth}px`,
      },
      innerDivStyle,
      style
    );

    return (
      <div
        {...additionalProps}
        className="zui-listItem disabled"
        style={mergedDivStyles}
      >
        {primaryText || contentChildren}
      </div>
    );
  }

  pushElement(children, element, baseStyles, additionalProps) {
    if (element) {
      const styles = Object.assign({}, baseStyles, element.props.style);
      children.push(
        React.cloneElement(element, {
          key: children.length,
          style: styles,
          ...additionalProps,
        })
      );
    }
  }

  render() {
    const {
      nestedItems,
      nestedLevel,
      disabled,
      className,
      containerElement,
      primaryTogglesNestedList,
      onTouchTap,
      onNestedListToggle, // eslint-disable-line no-unused-vars
      style,
      innerDivStyle,
      initiallyOpen, // eslint-disable-line no-unused-vars
      children,
      primaryText,
      ...other
    } = this.props;
    const hasNestListItems = nestedItems.length;
    const contentChildren = [primaryText || children];

    if (hasNestListItems) {
      const rightIconButtonElement = this.state.open ?
        <OpenIcon className="zui-listItem-arraw" /> :
        <CloseIcon className="zui-listItem-arraw" />;

      this.pushElement(
        contentChildren,
        rightIconButtonElement,
        {},
        {}
      );
    }


    const nestedList = nestedItems.length ? (
      <NestedList nestedLevel={nestedLevel} open={this.state.open}>
        {nestedItems}
      </NestedList>
    ) : undefined;

    const mergedInnerDivStyle = Object.assign({}, innerDivStyle, {
      marginLeft: `${nestedLevel * nestedLevelDepth}px`,
    });
    const mergedClassName = classNames({
      'zui-listItem': true,
      [className]: !!className,
    });

    return (
      <div>
        {
          disabled ? this.createDisabledElement(contentChildren, other) : (
            <ReinforcedButton
              className={mergedClassName}
              containerElement={containerElement}
              {...other}
              onMouseLeave={this.handleMouseLeave}
              onMouseEnter={this.handleMouseEnter}
              onTouchStart={this.handleTouchStart}
              onTouchEnd={this.handleTouchEnd}
              onTouchTap={primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap}
              style={style}
            >
              <div style={mergedInnerDivStyle} className="zui-listItem-inner">
                {contentChildren}
              </div>
            </ReinforcedButton>
          )
        }
        {nestedList}
      </div>
    );
  }
}

export default ListItem;
