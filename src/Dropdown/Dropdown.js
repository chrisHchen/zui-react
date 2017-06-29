import React, {Component} from 'react';
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
        Event.on(this.el, 'mouseleave', this.timeoutLeave);
      } else {
        Event.on(this.el, 'click', this.handleClick);
      }
    }
  }

  componentWillUnmount() {
    if (this.props.trigger === 'hover') {
      Event.off(this.el, 'mouseEnter', this.handleMouseEnter);
      Event.off(this.el, 'mouseLeave', this.timeoutLeave);
    } else {
      Event.off(this.el, 'click', this.handleClick);
    }
  }
  handleMouseEnter = () => {
    this.setState({
      open: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      open: false,
    });
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

  timeoutLeave = (event) => {
    console.log(1);
    this.timeout = setTimeout(() => this.handleMouseLeave(event), 500);
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
          {children}
        </Popover>
      </span>
    );
  }
}

export default Dropdown;
