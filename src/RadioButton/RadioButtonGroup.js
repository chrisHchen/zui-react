import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import warning from 'warning';

class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    defaultSelected: PropTypes.any,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.object,
    valueSelected: PropTypes.any,
  }

  static defaultProps = {
    labelPosition: 'right',
  }

  state = {
    numberCheckedRadioButtons: 0,
    selected: '',
  };

  componentWillMount() {
    let cnt = 0;
    let selected = '';
    const {valueSelected, defaultSelected} = this.props;
    if (valueSelected !== undefined) {
      selected = valueSelected;
    } else if (defaultSelected !== undefined) {
      selected = defaultSelected;
    }

    React.Children.forEach(this.props.children, (child) => {
      if (child.type !== RadioButton) {
        warning(false, 'ZUI: RadioButtonGroup may only have RadioButton as its child.');
      }
      if (this.hasCheckAttribute(child)) cnt++;
    }, this);

    this.setState({
      numberCheckedRadioButtons: cnt,
      selected,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('valueSelected')) {
      this.setState({
        selected: nextProps.valueSelected,
      });
    }
  }

  handleChange = (event, newSelection) => {
    this.updateRadioButtons(newSelection);

    // Successful update
    if (this.state.numberCheckedRadioButtons === 0) {
      if (this.props.onChange) this.props.onChange(event, newSelection);
    }
  };

  updateRadioButtons(newSelection) {
    if (this.state.numberCheckedRadioButtons === 0) {
      this.setState({selected: newSelection});
    } else {
      warning(false, `Material-UI: Cannot select a different radio button while another radio button
        has the 'checked' property set to true.`);
    }
  }

  hasCheckAttribute(radioButton) {
    return radioButton.props.hasOwnProperty('checked') &&
      radioButton.props.checked;
  }

  render() {
    const options = React.Children.map(this.props.children, (option) => {
      const {
        name, // eslint-disable-line no-unused-vars
        value, // eslint-disable-line no-unused-vars
        label, // eslint-disable-line no-unused-vars
        onCheck, // eslint-disable-line no-unused-vars
        checked, // eslint-disable-line no-unused-vars
        ...other
      } = option.props;
      return (
        <RadioButton
          {...other}
          ref={option.props.value}
          name={this.props.name}
          key={option.props.value}
          value={option.props.value}
          label={option.props.label}
          labelPosition={option.props.labelPosition || this.props.labelPosition}
          onCheck={this.handleChange}
          checked={option.props.value === this.state.selected}
        />
      );
    });

    return (
      <div
        style={this.props.style}
        className={this.props.className}
      >
        {options}
      </div>
    );
  }
}

export default RadioButtonGroup;
