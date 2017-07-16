import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

const rowsHeight = 24;

class EnhancedTextarea extends Component {
  static propTypes = {
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    hintText: PropTypes.node,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    onHeightChange: PropTypes.func,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    value: PropTypes.string,
  };

  static defaultProps = {
    rows: 1,
  };

  state = {
    height: null,
  };

  componentWillMount() {
    this.setState({
      height: this.props.rows * rowsHeight,
    });
  }

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value ||
        nextProps.rowsMax !== this.props.rowsMax) {
      this.syncHeightWithShadow(nextProps.value, null, nextProps);
    }
  }

  handleResize = (event) => {
    this.syncHeightWithShadow(undefined, event);
  };

  getInputNode() {
    return this.input;
  }

  setValue(value) {
    this.getInputNode().value = value;
    this.syncHeightWithShadow(value);
  }

  syncHeightWithShadow(newValue, event, props) {
    const shadow = this.shadow;
    // set the hintText as the defaultValue at init to caculate the min height
    const displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ?
      this.props.hintText : newValue;

    if (displayText !== undefined) {
      shadow.value = displayText;
    }

    let newHeight = shadow.scrollHeight;
    // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013
    if (newHeight === undefined) return;

    props = props || this.props;

    if (props.rowsMax >= props.rows) {
      newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
    }

    newHeight = Math.max(newHeight, rowsHeight);

    if (this.state.height !== newHeight) {
      const input = this.input;
      const cursorPosition = input.selectionStart;
      this.setState({
        height: newHeight,
      }, () => {
        input.setSelectionRange(cursorPosition, cursorPosition);
      });

      if (props.onHeightChange) {
        props.onHeightChange(event, newHeight);
      }
    }
  }

  handleChange = (event) => {
    if (!this.props.hasOwnProperty('value')) {
      this.syncHeightWithShadow(event.target.value);
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      onChange, // eslint-disable-line no-unused-vars
      onHeightChange, // eslint-disable-line no-unused-vars
      rows, // eslint-disable-line no-unused-vars
      rowsMax, // eslint-disable-line no-unused-vars
      style,
      labelText,
      hintText, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const textareaStyle = {
      marginTop: `${labelText ? 36 : 12 }px`,
      marginBottom: `${labelText ? -36 : -12 }px`,
    };

    const textareaStyleShowing = Object.assign({}, textareaStyle, {
      height: `${this.state.height }px`,
    });

    return (
      <div style={style} className="zui-textfield-textarea-wrap">
        <EventListener target="window" onResize={this.handleResize} />
        <textarea
          ref={(el) => this.shadow = el}
          className="zui-textfield-textarea-shadow"
          tabIndex="-1"
          rows={rows}
          style={textareaStyle}
          defaultValue={this.props.defaultValue}
          readOnly={true}
          value={this.props.value}
        />
        <textarea
          {...other}
          style={textareaStyleShowing}
          className="zui-textfield-textarea"
          ref={(el) => this.input = el}
          rows={this.props.rows}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default EnhancedTextarea;
