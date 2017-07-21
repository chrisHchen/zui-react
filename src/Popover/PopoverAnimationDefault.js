import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propTypes from '../util/propTypes';

class PopoverAnimationDefault extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
    targetOrigin: propTypes.origin.isRequired,
  };

  static defaultProps = {
    style: {},
  };


  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({open: true}); // eslint-disable-line react/no-did-mount-set-state
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
    });
  }

  render() {
    const {
      className,
      style,
      targetOrigin, // eslint-disable-line no-unused-vars
      children,
      ...other
    } = this.props;
    // TODO other animation
    const mergedClassNamesRoot = classNames({
      [className]: !!className,
      'zui-popover-default-ani-root': true,
      'open': !!this.state.open,
    });

    return (
      <div
        style={style}
        className={mergedClassNamesRoot}
        {...other}
      >
        <div className="zui-popover-default-ani-horizontal">
          <div className="zui-popover-default-ani-vertical">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default PopoverAnimationDefault;
