import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import RadioButtonOff from '../svg-embedded/radio-button-unchecked';
import RadioButtonOn from '../svg-embedded/radio-button-checked';

class RadioButton extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    onCheck: PropTypes.func,
    style: PropTypes.object,
    value: PropTypes.any,
  }

  static defaultProps = {
    checked: false,
    disabled: false,
  }

  handleOnChange = (event) => {
    if (this.props.disabled) return;
    if (this.props.onCheck && !this.props.checked) {
      this.props.onCheck(event, this.props.value);
    }
  }

  render( ) {
    const {
      label,
      labelStyle,
      labelPosition,
      name,
      className,
      disabled,
      style,
      checked,
      value,
    } = this.props;

    const mergedClass = classNames({
      'zui-radio': true,
      [className]: !!className,
      'disabled': disabled,
      'is-checked': checked,
      'position-left': labelPosition === 'left',
    });

    const mergedCheckClass = classNames({
      'zui-radio-uncheck-icon': true,
      'is-checked': checked,
    });

    const mergedUnCheckClass = classNames({
      'zui-radio-check-icon': true,
      'is-checked': checked,
    });

    const content = labelPosition === 'left' ? [
      <label key="label" className="zui-radio-label" style={labelStyle}>{label}</label>,
      <div key="radiobox" className="zui-radio-icon-wrap">
        <RadioButtonOff className={mergedCheckClass} />
        <RadioButtonOn className={mergedUnCheckClass} />
      </div>,
    ] : [
      <div key="radiobox" className="zui-radio-icon-wrap">
        <RadioButtonOff className={mergedCheckClass} />
        <RadioButtonOn className={mergedUnCheckClass} />
      </div>,
      <label key="label" className="zui-radio-label" style={labelStyle}>{label}</label>,
    ];

    const inputProps = {
      type: 'radio',
      className: 'zui-toggle-radio',
      onChange: this.handleOnChange,
      value: value,
      name: name,
      checked: checked, // this is the controlled property for type = radio
    };

    return (
      <div className={mergedClass} style={style}>
        <input {...inputProps} />
        <div className="zui-radio-track-wrap">
          {content}
        </div>
      </div>
    );
  }
}

export default RadioButton;
