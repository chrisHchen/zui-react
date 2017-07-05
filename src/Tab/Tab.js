import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import EnhancedButton from '../internal/EnhancedButton';
import classNames from 'classnames';

class Tab extends Component {
  static propTypes = {
    className: PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string,
    onActive: PropTypes.func,
    onTouchTap: PropTypes.func,
    selected: PropTypes.bool,
    style: PropTypes.object,
    value: PropTypes.any,
  }

  handleTouchTap = (event) => {
    if (this.props.onTouchTap) {
      this.props.onTouchTap(this.props.value, event, this);
    }
  };

  render() {
    const {
      className,
      style,
      name,
      selected,
    } = this.props;

    const mergedClassName = classNames({
      'zui-tab-item': true,
      'is-active': selected,
      [className]: !!className,
    });

    return (
      <div
        className={mergedClassName}
        style={style}
        onTouchTap={this.handleTouchTap}
      >
        {name}
      </div>
    );
  }
}

export default Tab;
