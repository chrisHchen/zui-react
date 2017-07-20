import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import Overlay from '../internal/Overlay';
import Shade from '../Shade';
import keycode from 'keycode';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ClassNames from 'classnames';
import Button from '../Button';
import Clear from '../svg-embedded/clear';
import './Dialog.css';

class Dialog extends Component {
  static propTypes = {
    actions: PropTypes.node,
    autoDetectWindowHeight: PropTypes.bool,
    autoScrollBodyContent: PropTypes.bool,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    children: PropTypes.node,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    modal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onRequestConfirm: PropTypes.func,
    open: PropTypes.bool.isRequired,
    repositionOnUpdate: PropTypes.bool,
    showClose: PropTypes.bool,
    size: PropTypes.oneOf([
      'tiny',
      'small',
      'large',
      'full',
    ]),
    style: PropTypes.object,
    title: PropTypes.string,
  }

  static defaultProps = {
    autoDetectWindowHeight: true,
    autoScrollBodyContent: false,
    modal: false,
    repositionOnUpdate: true,
    size: 'small',
    showClose: true,
    title: '提示',
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

  handleClickCancel = () => {
    this.requestClose(true);
  }

  handleClickConfirm = () => {
    if (this.props.onRequestConfirm) {
      this.props.onRequestConfirm();
    }
  }

  handleKeyUp = (event) => {
    if (keycode(event) === 'esc') {
      this.requestClose(false);
    }
  };

  createFooterElement() {
    const footer = (
      <div className="zui-dialog-footer">
        {
          React.Children.count(this.props.actions) > 0 ?
            React.Children.toArray(this.props.actions) :
            [
              <Button
                type="text"
                label="取消"
                key="cancel"
                onClick={this.handleClickCancel}
              />,
              <Button
                label="确定"
                key="confirm"
                onClick={this.handleClickConfirm}
              />,
            ]
        }
      </div>
    );

    return footer;
  }

  render() {
    const {
      children,
      title,
      open,
      size,
      showClose,
    } = this.props;

    const titleElement = (
      <div className="zui-dialog-header">
        <span className="zui-dialog-title">{title}</span>
        { showClose &&
          <Clear className="zui-dialog-close" onClick={this.handleClickCancel} />
        }
      </div>
    );

    const footerElement = this.createFooterElement();

    const rootClassName = ClassNames({
      'zui-dialog': true,
      'is-open': !!open,
    });

    const bodyClassName = ClassNames({
      'zui-dialog-body': true,
      [`zui-dialog-${size}`]: true,
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
            <Shade zDepth={4} className={bodyClassName} key="shade">
              {titleElement}
              <div className="zui-dialog-content">
                {children}
              </div>
              {footerElement}
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
