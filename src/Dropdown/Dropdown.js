import React, {Component, isValidElement, cloneElement, Children} from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import ReactDOM from 'react-dom';
import PopoverAnimationVertical from '../Popover/PopoverAnimationVertical';
import Event from '../util/event';

class Dropdown extends Component {
  static propTypes = {
    anchorAlign: PropTypes.oneOf([
      'left',
      'middle',
      'right',
    ]),
    anchorEl: PropTypes.element,
    animation: PropTypes.func,
    children: PropTypes.node,
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
    trigger: 'hover',
    targetAlign: 'middle',
    useLayerForClickAway: false,
  }

  state = {
    open: false,
  }

  componentDidMount() {
    const {
      trigger,
      // anchorEl,
    } = this.props;
    this.el = ReactDOM.findDOMNode(this);
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

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  createWrappedChildren(children) {
    return (
      Children.map(children, (child) => {
        return isValidElement(child) ? cloneElement(child, {
          onMouseEnter: (event) => {
            this.onTargetEl = true;
            if (this.timeoutAnchor) {
              clearTimeout(this.timeoutAnchor);
            }
            if (child.props.onMouseEnter) {
              child.props.onMouseEnter(event);
            }
          },
          onMouseLeave: (event) => {
            this.onTargetEl = false;
            if (!this.onAnchorEl) {
              this.timeoutTarget = setTimeout(() => {
                this.setState({
                  open: false,
                });
              }, 300);
            }
            if (child.props.onMouseLeave) {
              child.props.onMouseLeave(event);
            }
          },
        }) : child;
      })
    );
  }

  render() {
    const {
      anchorAlign,
      animation,
      anchorEl,
      children,
      targetAlign,
      useLayerForClickAway,
    } = this.props;

    return (
      <span style={{display: 'inline-block'}}>
        {anchorEl}
        <Popover
          open={this.state.open}
          anchorEl={this.el}
          animation={animation}
          anchorOrigin={{horizontal: targetAlign, vertical: 'bottom'}}
          targetOrigin={{horizontal: anchorAlign, vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          useLayerForClickAway={useLayerForClickAway}
        >
          {this.createWrappedChildren(children)}
        </Popover>
      </span>
    );
  }
}

export default Dropdown;
