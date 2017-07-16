import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EnhancedTextarea from './EnhancedTextarea';
import ReactDOM from 'react-dom';
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
    multiLine: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.any,
  }

  static defaultProps = {
    disabled: false,
    multiLine: false,
    type: 'text',
    rows: 1,
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

  handleHeightChange = (event, height) => {
    let newHeight = height + 24;
    if (this.props.labelText) {
      newHeight += 24;
    }
    ReactDOM.findDOMNode(this).style.height = `${newHeight}px`;
  };

  getInputNode() {
    return this.props.multiLine ?
      this.input.getInputNode() : ReactDOM.findDOMNode(this.input);
  }

  blur() {
    if (this.input) {
      this.getInputNode().blur();
    }
  }

  focus() {
    if (this.input) {
      this.getInputNode().focus();
    }
  }

  select() {
    if (this.input) {
      this.getInputNode().select();
    }
  }

  render() {
    const {
      labelText,
      id,
      errorText,
      errorStyle,
      className,
      type,
      style,
      hintText,
      rows,
      rowsMax,
      disabled,
      defaultValue,
      multiLine,
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

    const wrapStyle = Object.assign({}, style, {
      height: `${(rows - 1) * 24 + (labelText ? 72 : 48) }px`,
    });

    const errorTextStyle = Object.assign({}, errorStyle, {
      bottom: (labelText && errorText) ? (multiLine ? '3px' : '15px') :
        `${2 }px`,
    });

    const inputProps = {
      id: inputId,
      ref: (elem) => this.input = elem,
      disabled: disabled,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
    };
    const inputElement = multiLine ?
      (
        <EnhancedTextarea
          rows={rows}
          rowsMax={rowsMax}
          hintText={hintText}
          labelText={labelText}
          {...inputProps}
          onHeightChange={this.handleHeightChange}
        />
      ) :
      (
        <input
          type={type}
          className="zui-textfield-input"
          {...inputProps}
          value={value}
          defaultValue={defaultValue}
        />
      );
    return (
      <div style={wrapStyle} className={mergedWrapClassName}>
        <label htmlFor={inputId} className="zui-textfield-label">{labelText}</label>
        <div className="zui-textfield-hint">
          {hintText}
        </div>
        {inputElement}
        <hr className="zui-textfield-underline" />
        <hr className="zui-textfield-underline-overlap" />
        <div className="zui-textfield-errortext" style={errorTextStyle}>{errorText}</div>
      </div>
    );
  }
}

export default TextField;
