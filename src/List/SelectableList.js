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
  }

  state = {
    selectedValue: '',
  }

  componentWillMount() {
    this.setState({
      selectedValue: this.props.defaultValue,
    });
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
