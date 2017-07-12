import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import './Badge.css';

class Badge extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hidden: PropTypes.bool,
    isDot: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    isDot: false,
    hidden: false,
  }

  componentWillMount() {
    this.state = {
      hidden: this.props.hidden,
    };
  }

  render() {
    const {
      children,
      className,
      value,
      hidden,
      isDot,
    } = this.props;

    const wrapClass = classNames({
      'zui-badge': true,
      [className]: !!className,
    });
    const badgeClass = classNames({
      'zui-badge-content': true,
      'is-dot': isDot,
    });
    const sup = !hidden ? (
      <sup className={badgeClass}>{!isDot ? value : ''}</sup>
    ) : null;
    return (
      <div className={wrapClass}>
        {children}
        {sup}
      </div>
    );
  }
}

export default Badge;
