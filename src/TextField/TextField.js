import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import warning from 'warning';
import shallowEqual from 'recompose/shallowEqual';
import classNames from 'classnames';
import './TextField.css';

function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

class TextField extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    errorStyle: PropTypes.object,
    errorText: PropTypes.node,
    hintText: PropTypes.node,
    id: PropTypes.string,
    labelText: PropTypes.node,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.any,
  }

  static defaultProps = {
    disabled: false,
    type: 'text',
  };

  state = {
    isFocused: false,
    errorText: undefined,
    hasValue: false,
  };

  componentWillMount() {
    const {
      name,
      hintText,
      labelText,
      id,
    } = this.props;

    this.setState({
      errorText: this.props.errorText,
      hasValue: isValid(this.props.value) || isValid(this.props.defaultValue),
    });

    warning(name || hintText || labelText || id, `ZUI: We don't have enough information
      to build a robust unique id for the TextField component. Please provide an id or a name.`);

    const uniqueId = `${name}-${hintText}-${labelText}-${
      Math.floor(Math.random() * 0xFFFF)}`;
    this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorText !== this.props.errorText) {
      this.setState({
        errorText: nextProps.errorText,
      });
    }

    if (nextProps.hasOwnProperty('value')) {
      const hasValue = isValid(nextProps.value);

      this.setState({
        hasValue: hasValue,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
  handleInputBlur = (event) => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleInputChange = (event) => {
    if (!this.props.hasOwnProperty('value')) {
      this.setState({hasValue: isValid(event.target.value)});
    }
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };

  handleInputFocus = (event) => {
    if (this.props.disabled) {
      return;
    }
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  render() {
    const {
      labelText,
      id,
      className,
      type,
      style,
      hintText,
      disabled,
      defaultValue,
      value,
    } = this.props;


    const inputId = id || this.uniqueId;

    const mergedWrapClassName = classNames({
      'zui-textfield-wrap': true,
      [className]: !!className,
      'is-focused': this.state.hasValue || this.state.isFocused,
      'hint-show': !this.state.hasValue && this.state.isFocused,
      'disabled': disabled,
    });

    const inputProps = {
      id: inputId,
      ref: (elem) => this.input = elem,
      disabled: disabled,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
    };

    return (
      <div style={style} className={mergedWrapClassName}>
        <label htmlFor={inputId} className="zui-textfield-label">{labelText}</label>
        <div className="zui-textfield-hint">
          {hintText}
        </div>
        <input
          type={type}
          className="zui-textfield-input"
          {...inputProps}
          value={value}
          defaultValue={defaultValue}
        />
        <hr className="zui-textfield-underline" />
        <hr className="zui-textfield-underline-overlap" />
      </div>
    );
  }
}

export default TextField;
