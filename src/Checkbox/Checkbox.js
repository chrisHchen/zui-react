import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import CheckboxOutline from '../svg-embedded/check-box-outline-blank';
import CheckboxChecked from '../svg-embedded/check-box';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    labelStyle: PropTypes.object,
    onCheck: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    defaultChecked: false,
    disabled: false,
    labelPosition: 'right',
  };

  state = {
    checked: false,
  };

  componentWillMount( ) {
    const { checked, defaultChecked } = this.props;

    if ( checked || defaultChecked ) {
      this.setState({ checked: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) return;
    if (nextProps.checked !== undefined &&
      nextProps.checked !== this.checked) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  handleTouchTap = (event) => {
    if (this.props.disabled) return;
    const {checked} = this.state;
    if (this.props.checked === undefined) {
      this.setState({
        checked: !checked,
      });
    }
    if (this.props.onCheck) {
      this.props.onCheck(event, !checked);
    }
  }

  render( ) {
    const {
      defaultChecked,
      label,
      labelStyle,
      labelPosition,
      className,
      disabled,
      style,
      checked,
    } = this.props;

    const mergedClass = classNames({
      'zui-checkbox': true,
      [className]: !!className,
      'disabled': disabled,
      'is-checked': this.state.switched,
      'position-left': labelPosition === 'left',
    });

    const mergedCheckClass = classNames({
      'zui-checkbox-uncheck-icon': true,
      'is-checked': this.state.checked,
    });

    const mergedUnCheckClass = classNames({
      'zui-checkbox-check-icon': true,
      'is-checked': this.state.checked,
    });

    const content = labelPosition === 'left' ? [
      <label key="label" className="zui-checkbox-label" style={labelStyle}>{label}</label>,
      <div key="checkbox" className="zui-checkbox-icon-wrap">
        <CheckboxOutline className={mergedCheckClass} />
        <CheckboxChecked className={mergedUnCheckClass} />
      </div>,
    ] : [
      <div key="checkbox" className="zui-checkbox-icon-wrap">
        <CheckboxOutline className={mergedCheckClass} />
        <CheckboxChecked className={mergedUnCheckClass} />
      </div>,
      <label key="label" className="zui-checkbox-label" style={labelStyle}>{label}</label>,
    ];
    const inputProps = {
      type: 'checkbox',
      className: 'zui-toggle-checkbox',
      onTouchTap: this.handleTouchTap,
    };
    if (this.props.hasOwnProperty('defaultChecked')) {
      inputProps.defaultChecked = defaultChecked;
    } else if (this.props.hasOwnProperty('checked')) {
      inputProps.checked = checked;
    }
    return (
      <div className={mergedClass} style={style}>
        <input {...inputProps} />
        <div className="zui-checkbox-track-wrap">
          {content}
        </div>
      </div>
    );
  }
}

export default Checkbox;
