import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AutoLockScrolling from './AutoLockScrolling';
import classNames from 'classnames';
import './Overlay.css';

class Overlay extends Component {
  static propTypes = {
    autoLockScrolling: PropTypes.bool,
    className: PropTypes.string,
    show: PropTypes.bool.isRequired,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    autoLockScrolling: true,
    style: {},
  };

  setOpacity(opacity) {
    this.overlay.style.opacity = opacity;
  }

  render() {
    const {
      autoLockScrolling,
      show,
      className,
      ...other
    } = this.props;

    const mergedClassNames = classNames({
      'zui-overlay': true,
      'isShow': show,
      [className]: !!className,
    });

    return (
      <div {...other} ref={(el) => this.overlay = el} className={mergedClassNames}>
        {autoLockScrolling && <AutoLockScrolling lock={show} />}
      </div>
    );
  }
}

export default Overlay;
