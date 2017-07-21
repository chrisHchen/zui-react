import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propTypes from '../util/propTypes';
import Shade from '../Shade';

class PopoverAnimationVertical extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
    targetOrigin: propTypes.origin,
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
      children,
      targetOrigin, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const mergedClassNamesRoot = classNames({
      [className]: !!className,
      'zui-popover-vertical-ani-root': true,
      'open': !!this.state.open,
    });

    return (
      <Shade
        style={style}
        className={mergedClassNamesRoot}
        zDepth={1}
        {...other}
      >
        {children}
      </Shade>
    );
  }
}

export default PopoverAnimationVertical;
