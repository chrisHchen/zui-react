import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

class Toggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    /**
     * Determines whether the Toggle is initially turned on.
     * Warning: This cannot be used in conjunction with toggled.
     * Decide between using a controlled or uncontrolled input element and
     * remove one of these props
     */
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) return;
    if (nextProps.toggled !== undefined &&
      nextProps.toggled !== this.toggled) {
      this.setState({
        switched: nextProps.toggled,
      });
    }
  }

  handleTouchTap = (event) => {
    if (this.props.disabled) return;
    const {switched} = this.state;
    if (this.props.toggled === undefined) {
      this.setState({
        switched: !switched,
      });
    }
    if (this.props.onToggle) {
      this.props.onToggle(event, !switched);
    }
  }
  render( ) {
    const {
      defaultToggled,
      label,
      labelStyle,
      labelPosition,
      className,
      disabled,
      style,
      toggled,
    } = this.props;

    const mergedClass = classNames({
      'zui-toggle': true,
      [className]: !!className,
      'disabled': disabled,
      'is-switched': this.state.switched,
      'position-right': labelPosition === 'right',
    });

    const content = labelPosition === 'left' ? [
      <label key="label" className="zui-toggle-label" style={labelStyle}>{label}</label>,
      <div key="track" className="zui-toggle-wrap">
        <div className="zui-toggle-track" />
        <div className="zui-toggle-thumb" />
      </div>,
    ] : [
      <div key="track" className="zui-toggle-wrap">
        <div className="zui-toggle-track" />
        <div className="zui-toggle-thumb" />
      </div>,
      <label key="label" className="zui-toggle-label" style={labelStyle}>{label}</label>,
    ];
    const inputProps = {
      type: 'checkbox',
      className: 'zui-toggle-checkbox',
      onTouchTap: this.handleTouchTap,
    };
    if (this.props.hasOwnProperty('defaultToggled')) {
      inputProps.defaultChecked = defaultToggled;
    } else if (this.props.hasOwnProperty('toggled')) {
      inputProps.checked = toggled;
    }
    return (
      <div className={mergedClass} style={style}>
        <input {...inputProps} />
        <div className="zui-toggle-track-wrap">
          {content}
        </div>
      </div>
    );
  }
}

export default Toggle;
