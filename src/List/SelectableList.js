import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeSelectable from './makeSelectable';
import List from './List';

const Selectable = makeSelectable(List);

class SelectableList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    selectedClassName: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  state = {
    selectedValue: '',
  }

  componentWillMount() {
    const {value, defaultValue} = this.props;
    this.setState({
      selectedValue: value || defaultValue,
    });
  }

  componentWillReceiveProps(nextProps) {
    // update nomatter nextProps.value equal or not equal to this.props.value
    if (nextProps.value !== undefined) {
      console.log(nextProps.value);
      if (this.props.onChange) {
        this.props.onChange(event, nextProps.value);
      }
      this.setState({
        selectedValue: nextProps.value,
      });
    }
  }

  handleChange = (event, value) => {
    if (this.props.onChange) {
      this.props.onChange(event, value);
    }
    this.setState({
      selectedValue: value,
    });
  }

  render() {
    const {
      selectedClassName,
      onChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const mergedClassName = classNames({
      'selected': true,
      [selectedClassName]: !!selectedClassName,
    });

    return (
      <Selectable
        {...other}
        onChange={this.handleChange}
        value={this.state.selectedValue}
        selectedClassName={mergedClassName}
      >
        {this.props.children}
      </Selectable>
    );
  }
}

export default SelectableList;
