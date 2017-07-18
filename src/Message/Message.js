import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '../internal/ClickAwayListener';
import classNames from 'classnames';
import './Message.css';
import AlertError from '../svg-embedded/alertError';
import Clear from '../svg-embedded/clear';
import Done from '../svg-embedded/done';

class Message extends Component {
  static propTypes = {
    autoHideDuration: PropTypes.number,
    className: PropTypes.string,
    message: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  }

  static defaultProps = {
    autoHideDuration: 3000,
    type: 'info',
  }

  state= {
    open: false,
    message: undefined,
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
      message: this.props.message,
    });
  }

  componentDidMount() {
    if (this.state.open) {
      this.setAutoHideTimer();
      this.setTransitionTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open && nextProps.open &&
        (nextProps.message !== this.props.message)) {
      this.setState({
        open: false,
      });

      clearTimeout(this.timerOneAtTheTimeId);
      this.timerOneAtTheTimeId = setTimeout(() => {
        this.setState({
          message: nextProps.message,
          open: true,
        });
      }, 400);
    } else {
      const open = nextProps.open;

      this.setState({
        open: open !== null ? open : this.state.open,
        message: nextProps.message,
      });
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      } else {
        clearTimeout(this.timerAutoHideId);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHideId);
    clearTimeout(this.timerTransitionId);
    clearTimeout(this.timerOneAtTheTimeId);
  }

  componentClickAway = () => {
    if (this.timerTransitionId) {
      // If transitioning, don't close the snackbar.
      return;
    }

    if (this.props.open !== null && this.props.onRequestClose) {
      this.props.onRequestClose('clickaway');
    } else {
      this.setState({open: false});
    }
  };

  // Timer that controls delay before click-away events are captured (based on when animation completes)
  setTransitionTimer() {
    this.timerTransitionId = setTimeout(() => {
      this.timerTransitionId = undefined;
    }, 400);
  }
  // Timer that controls delay before snackbar auto hides
  setAutoHideTimer() {
    const autoHideDuration = this.props.autoHideDuration;

    if (autoHideDuration > 0) {
      clearTimeout(this.timerAutoHideId);
      this.timerAutoHideId = setTimeout(() => {
        if (this.props.open !== null && this.props.onRequestClose) {
          this.props.onRequestClose('timeout');
        } else {
          this.setState({open: false});
        }
      }, autoHideDuration);
    }
  }

  render() {
    const {
      autoHideDuration, // eslint-disable-line no-unused-vars
      message: messageProp, // eslint-disable-line no-unused-vars
      onRequestClose, // eslint-disable-line no-unused-vars
      style,
      type,
    } = this.props;

    const {
      message,
      open,
    } = this.state;

    const mergedClass = classNames({
      'zui-message': true,
      'open': open,
    });

    const typeClass = classNames({
      [`zui-message-${type}`]: true,
    });

    let svgIconElement = (type === 'info' || type === 'warning') ?
      <AlertError /> :
      (type === 'success') ? <Done /> : <Clear />;

    svgIconElement = cloneElement(svgIconElement, {
      className: 'zui-message-svgicon',
      style: {
        width: '20px',
        height: '20px',
      },
    });
    return (
      <ClickAwayListener onClickAway={open ? this.componentClickAway : null}>
        <div className={mergedClass} style={style}>
          <div className={typeClass}>
            {svgIconElement}
          </div>
          <div className="zui-message-content">{message}</div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default Message;
