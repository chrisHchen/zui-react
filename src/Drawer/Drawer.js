import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';
import keycode from 'keycode';
import classNames from 'classnames';
import Overlay from '../internal/Overlay';
import Shade from '../Shade';
import autoPrefix from '../util/autoPrefix';
import propTypes from '../util/propTypes';
import './Drawer.css';

// docked drawer should be only one at any given time
let openNavEventHandler = null;

class Drawer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    disableSwipeToOpen: PropTypes.bool,
    docked: PropTypes.bool,
    onRequestChange: PropTypes.func,
    open: PropTypes.bool,
    openSecondary: PropTypes.bool,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    style: PropTypes.object,
    swipeAreaWidth: PropTypes.number,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    zDepth: propTypes.shade,
  }

  static defaultProps = {
    disableSwipeToOpen: false,
    docked: true,
    open: null,
    openSecondary: false,
    swipeAreaWidth: 30,
    width: null,
    zDepth: 2,
  }

  componentWillMount() {
    this.maybeSwiping = false;
    this.touchStartX = null;
    this.touchStartY = null;
    this.swipeStartX = null;

    this.setState({
      open: (this.props.open !== null ) ? this.props.open : this.props.docked,
      swiping: null,
    });
  }

  componentDidMount() {
    this.enableSwipeHandling();
  }

  componentWillReceiveProps(nextProps) {
    // If controlled then the open prop takes precedence.
    if (nextProps.open !== null) {
      this.setState({
        open: nextProps.open,
      });
      if (this.overlay) {
        if (nextProps.open) {
          this.overlay.setOpacity(1);
        } else {
          this.overlay.setOpacity(0);
        }
      }
      // Otherwise, if docked is changed, change the open state for when uncontrolled.
    } else if (this.props.docked !== nextProps.docked) {
      this.setState({
        open: nextProps.docked,
      });
    }
  }

  componentDidUpdate() {
    this.enableSwipeHandling();
  }

  componentWillUnmount() {
    this.disableSwipeHandling();
  }

  enableSwipeHandling() {
    if (!this.props.docked) {
      document.body.addEventListener('touchstart', this.onBodyTouchStart);
      if (!openNavEventHandler) {
        openNavEventHandler = this.onBodyTouchStart;
      }
    } else {
      this.disableSwipeHandling();
    }
  }

  disableSwipeHandling() {
    document.body.removeEventListener('touchstart', this.onBodyTouchStart);
    if (openNavEventHandler === this.onBodyTouchStart) {
      openNavEventHandler = null;
    }
  }

  onBodyTouchStart = (event) => {
    const swipeAreaWidth = this.props.swipeAreaWidth;

    const touchStartX = event.touches[0].pageX;
    const touchStartY = event.touches[0].pageY;
    // Open only if swiping from far left (or right) while closed
    if (swipeAreaWidth !== null && !this.state.open) {
      if (this.props.openSecondary) {
        // If openSecondary is true calculate from the far right
        if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
      } else {
        // If openSecondary is false calculate from the far left
        if (touchStartX > swipeAreaWidth) return;
      }
    }
    if (!this.state.open &&
         (openNavEventHandler !== this.onBodyTouchStart ||
          this.props.disableSwipeToOpen)
    ) {
      return;
    }

    this.maybeSwiping = true;
    this.touchStartX = touchStartX;
    this.touchStartY = touchStartY;
    document.body.addEventListener('touchmove', this.onBodyTouchMove);
    document.body.addEventListener('touchend', this.onBodyTouchEnd);
    document.body.addEventListener('touchcancel', this.onBodyTouchEnd);
  };

  onBodyTouchMove = (event) => {
    const currentX = event.touches[0].pageX;
    const currentY = event.touches[0].pageY;
    if (this.state.swiping) {
      event.preventDefault();
      this.setPosition(this.getTranslateX(currentX));
    } else if (this.maybeSwiping) {
      const dXAbs = Math.abs(currentX - this.touchStartX);
      const dYAbs = Math.abs(currentY - this.touchStartY);
      // If the user has moved his thumb ten pixels in either direction,
      // we can safely make an assumption about whether he was intending
      // to swipe or scroll.
      const threshold = 10;

      if (dXAbs > threshold && dYAbs <= threshold) {
        this.swipeStartX = currentX;
        this.setState({
          swiping: this.state.open ? 'closing' : 'opening',
        });
        this.setPosition(this.getTranslateX(currentX));
      } else if (dXAbs <= threshold && dYAbs > threshold) {
        this.onBodyTouchEnd();
      }
    }
  };

  shouldShow() {
    return this.state.open || !!this.state.swiping; // component is swiping
  }

  close(reason) {
    if (this.props.open === null) this.setState({open: false});
    if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
    return this;
  }

  open(reason) {
    if (this.props.open === null) this.setState({open: true});
    if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
    return this;
  }

  handleKeyUp = (event) => {
    if (this.state.open && !this.props.docked && keycode(event) === 'esc') {
      this.close('escape');
    }
  };

  handleTouchTapOverlay = (event) => {
    event.preventDefault();
    this.close('clickaway');
  };

  getMaxTranslateX() {
    const width = this.getTranslatedWidth() || 250;
    return width + 10;
  }

  getTranslateMultiplier() {
    return this.props.openSecondary ? 1 : -1;
  }

  getTranslatedWidth() {
    if (typeof this.props.width === 'string') {
      if (!/^\d+(\.\d+)?%$/.test(this.props.width)) {
        throw new Error('Not a valid percentage format.');
      }
      const width = parseFloat(this.props.width) / 100.0;
      // We are doing our best on the Server to render a consistent UI, hence the
      // default value of 10000
      return typeof window !== 'undefined' ? width * window.innerWidth : 10000;
    } else {
      return this.props.width;
    }
  }

  setPosition(translateX) {
    const drawer = ReactDOM.findDOMNode(this.clickAwayableElement);
    const transformCSS = `translate(${(this.getTranslateMultiplier() * translateX)}px, 0)`;
    if (this.overlay) {
      this.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
    }
    autoPrefix.set(drawer.style, 'transform', transformCSS);
  }

  getTranslateX(currentX) {
    return Math.min(
      Math.max(
        this.state.swiping === 'closing' ?
          this.getTranslateMultiplier() * (currentX - this.swipeStartX) :
          this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX),
        0
      ),
      this.getMaxTranslateX()
    );
  }

  onBodyTouchEnd = (event) => {
    if (this.state.swiping) {
      const currentX = event.changedTouches[0].pageX;
      const translateRatio = this.getTranslateX(currentX) / this.getMaxTranslateX();

      this.maybeSwiping = false;
      const swiping = this.state.swiping;
      this.setState({
        swiping: null,
      });

      // We have to open or close after setting swiping to null,
      // because only then CSS transition is enabled.
      if (translateRatio > 0.5) {
        if (swiping === 'opening') {
          this.setPosition(this.getMaxTranslateX());
        } else {
          this.close('swipe');
        }
      } else {
        if (swiping === 'opening') {
          this.open('swipe');
        } else {
          this.setPosition(0);
        }
      }
    } else {
      this.maybeSwiping = false;
    }

    document.body.removeEventListener('touchmove', this.onBodyTouchMove);
    document.body.removeEventListener('touchend', this.onBodyTouchEnd);
    document.body.removeEventListener('touchcancel', this.onBodyTouchEnd);
  };

  render() {
    const {
      children,
      className,
      containerClassName,
      containerStyle,
      docked,
      openSecondary,
      overlayClassName,
      overlayStyle,
      style,
      width,
      zDepth,
    } = this.props;

    let overlay;
    if (!docked) {
      overlay = (
        <Overlay
          ref={(el) => this.overlay = el}
          show={this.shouldShow()}
          className={overlayClassName}
          style={overlayStyle}
          onTouchTap={this.handleTouchTapOverlay}
        />
      );
    }
    const containerTransitionStyle = {};
    if (this.state.swiping) {
      autoPrefix.set(containerTransitionStyle, 'transition', 'unset');
    }
    if (!this.state.open) {
      autoPrefix.set(
        containerTransitionStyle,
        'transform',
        `translate(${this.getTranslateMultiplier() * this.getMaxTranslateX()}px, 0)`);
    }

    const mergedContainerStyle = width ?
      Object.assign({
        width: `${this.getTranslatedWidth(width)}px`,
      }, containerTransitionStyle, containerStyle) :
      Object.assign(containerTransitionStyle, containerStyle);

    const mergeContainerClass = classNames({
      'zui-drawer-container': true,
      'positioned-right': openSecondary,
      'isOpen': this.state.open,
      [containerClassName]: !!containerClassName,
    });

    return (
      <div
        className={className}
        style={style}
      >
        <EventListener target="window" onKeyUp={this.handleKeyUp} />
        {overlay}
        <Shade
          ref={(el) => this.clickAwayableElement = el}
          zDepth={zDepth}
          className={mergeContainerClass}
          style={mergedContainerStyle}
        >
          {children}
        </Shade>
      </div>
    );
  }
}

export default Drawer;
