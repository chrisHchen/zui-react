import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import Overlay from '../internal/Overlay';
import Shade from '../Shade';
import keycode from 'keycode';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ClassNames from 'classnames';
import './Dialog.css';

class Dialog extends Component {
  static propTypes = {
    autoDetectWindowHeight: PropTypes.bool,
    autoScrollBodyContent: PropTypes.bool,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    children: PropTypes.node,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    modal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    repositionOnUpdate: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string,
  }

  static defaultProps = {
    autoDetectWindowHeight: true,
    autoScrollBodyContent: false,
    modal: false,
    repositionOnUpdate: true,
  };

  requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  }

  handleTouchTapOverlay = () => {
    this.requestClose(false);
  };

  handleKeyUp = (event) => {
    if (keycode(event) === 'esc') {
      this.requestClose(false);
    }
  };

  render() {
    const {
      children,
      title,
      open,
    } = this.props;

    const titleElement = <div className="zui-dialog-title">{title}</div>;
    const rootClassName = ClassNames({
      'zui-dialog': true,
      'is-open': !!open,
    });
    return (
      <div className={rootClassName}>
        {open &&
          <EventListener
            target="window"
            onKeyUp={this.handleKeyUp}
          />
        }
        <CSSTransitionGroup
          component="div"
          transitionName="zui-dialog"
          transitionAppear={true}
          transitionAppearTimeout={450}
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450}
        >
          {
            open &&
            <Shade zDepth={4} className="zui-dialog-body" key="shade">
              {titleElement}
              <div className="zui-dialog-content">
                {children}
              </div>
            </Shade>
          }
        </CSSTransitionGroup>
        <Overlay
          show={open}
          onTouchTap={this.handleTouchTapOverlay}
        />
      </div>
    );
  }
}

export default Dialog;
