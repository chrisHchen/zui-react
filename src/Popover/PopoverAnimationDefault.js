import React, {Component} from 'react';
import PropTypes from 'prop-types';
import propTypes from '../util/propTypes';
import classNames from 'classnames';
import './PopoverAnimationDefault.css';

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
    } = this.props;

    const mergedClassNamesRoot = classNames({
      [className]: !!className,
      'zui-popover-default-ani-root': true,
      'open': !!this.state.open,
    });

    return (
      <div
        style={style}
        className={mergedClassNamesRoot}
      >
        <div className="zui-popover-default-ani-horizontal">
          <div className="zui-popover-default-ani-vertical">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default PopoverAnimationDefault;
