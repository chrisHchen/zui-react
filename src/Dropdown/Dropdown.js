import React, {Component, cloneElement, Children} from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import ReactDOM from 'react-dom';
import PopoverAnimationVertical from '../Popover/PopoverAnimationVertical';
import DropdownMenu from './DropdownMenu';
import Event from '../util/event';

class Dropdown extends Component {
  static propTypes = {
    anchorAlign: PropTypes.oneOf([
      'left',
      'middle',
      'right',
    ]),
    anchorEl: PropTypes.element.isRequired,
    animation: PropTypes.func,
    children: PropTypes.node,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
    targetAlign: PropTypes.oneOf([
      'left',
      'middle',
      'right',
    ]),
    trigger: PropTypes.oneOf([
      'hover',
      'click',
    ]),
    useLayerForClickAway: PropTypes.bool,
  }

  static defaultProps = {
    anchorAlign: 'middle',
    animation: PopoverAnimationVertical,
    onChange: () => {},
    trigger: 'hover',
    targetAlign: 'middle',
    useLayerForClickAway: false,
    hideOnClick: true,
  }

  state = {
    open: false,
  }

  componentDidMount() {
    const {
      trigger,
      // anchorEl,
    } = this.props;
    // this.el = ReactDOM.findDOMNode(this);
    if (this.el) {
      if (trigger === 'hover') {
        Event.on(this.el, 'mouseenter', this.handleMouseEnter);
        Event.on(this.el, 'mouseleave', this.handleMouseLeave);
      } else {
        Event.on(this.el, 'click', this.handleClick);
      }
    }
  }

  componentWillUnmount() {
    if (this.props.trigger === 'hover') {
      Event.off(this.el, 'mouseEnter', this.handleMouseEnter);
      Event.off(this.el, 'mouseLeave', this.handleMouseLeave);
    } else {
      Event.off(this.el, 'click', this.handleClick);
    }
    if (this.timeoutAnchor) {
      clearTimeout(this.timeoutAnchor);
    }
    if (this.timeoutTarget) {
      clearTimeout(this.timeoutTarget);
    }
  }
  handleMouseEnter = () => {
    this.onAnchorEl = true;
    if (this.timeoutTarget) {
      clearTimeout(this.timeoutTarget);
    }
    this.setState({
      open: true,
    });
  }

  handleMouseLeave = () => {
    this.onAnchorEl = false;
    if (!this.onTargetEl) {
      this.timeoutAnchor = setTimeout(() => {
        this.setState({
          open: false,
        });
      }, 300);
    }
  }

  handleClick = (event) => {
    if (this.props.anchorEl.props.onClick) {
      this.props.anchorEl.props.onClick(event);
    }
    this.setState({
      open: !this.state.open,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleChange = (event, value) => {
    if (this.props.hideOnClick) {
      this.setState({
        open: false,
      });
    }
    this.props.onChange(event, value);
  }

  createWrappedChildren(children) {
    return (
      Children.map(children, (child) => {
        const {
          onMouseEnter,
          onMouseLeave,
          children, // eslint-disable-line no-unused-vars
          ...other
        } = child.props;

        if (child.type === DropdownMenu) {
          return cloneElement(child, {
            onMouseEnter: (event) => {
              this.onTargetEl = true;
              if (this.timeoutAnchor) {
                clearTimeout(this.timeoutAnchor);
              }
              if (onMouseEnter) {
                onMouseEnter(event);
              }
            },
            onMouseLeave: (event) => {
              this.onTargetEl = false;
              if (!this.onAnchorEl && this.props.trigger === 'hover') {
                this.timeoutTarget = setTimeout(() => {
                  this.setState({
                    open: false,
                  });
                }, 300);
              }
              if (onMouseLeave) {
                onMouseLeave(event);
              }
            },
            onChange: this.handleChange,
            ...other,
          });
        } else {
          return null;
        }
      })
    );
  }

  createAnchorChildren(anchorChildren) {
    const {
      anchorAlign,
      animation,
      children,
      targetAlign,
      useLayerForClickAway,
      trigger,
    } = this.props;

    const popover = (
      <Popover
        open={this.state.open}
        anchorEl={this.el}
        animation={animation}
        anchorOrigin={{horizontal: targetAlign, vertical: 'bottom'}}
        targetOrigin={{horizontal: anchorAlign, vertical: 'top'}}
        onRequestClose={this.handleRequestClose}
        useLayerForClickAway={useLayerForClickAway}
        trigger={trigger}
        key="popover"
      >
        {this.createWrappedChildren(children)}
      </Popover>
    );
    anchorChildren = Children.toArray(anchorChildren);
    anchorChildren.push(popover);
    return anchorChildren;
  }

  render() {
    return cloneElement(
      this.props.anchorEl, {
        ref: (el) => this.el = ReactDOM.findDOMNode(el),
      },
      this.createAnchorChildren(this.props.anchorEl.props.children)
    );
  }
}

export default Dropdown;
