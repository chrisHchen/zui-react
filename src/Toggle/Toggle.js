import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import './Toggle.css';

class Toggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultToggled: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    labelStyle: PropTypes.object,
    onToggle: PropTypes.func,
    style: PropTypes.object,
    toggled: PropTypes.bool,
  }

  static defaultProps = {
    defaultToggled: false,
    disabled: false,
    labelPosition: 'left',
  };

  state = {
    switched: false,
  };

  componentWillMount( ) {
    const { toggled, defaultToggled } = this.props;

    if ( toggled || defaultToggled ) {
      this.setState({ switched: true });
    }
  }

  render( ) {
    const { label, className } = this.props;
    const mergedClass = classNames({
      'zui-toggle': true,
      [className]: !!className,
    });
    return (
      <div className={mergedClass}><input type="checkbox" className="zui-toggle-checkbox" />
        <div className="zui-toggle-track-wrap">
          <label className="zui-toggle-label">{label}</label>
          <div className="zui-toggle-wrap">
            <div className="zui-toggle-track" >{}</div>
            <div className="zui-toggle-thumb" >{}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toggle;
