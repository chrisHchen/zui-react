import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import Dropdown, {DropdownMenu, DropdownMenuItem} from '../Dropdown';
import shallowEqual from 'recompose/shallowEqual';
import classNames from 'classnames';

class Select extends Component {
  static propTypes = {
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    hintText: PropTypes.string,
    onChange: PropTypes.func,
    onRequestClose: PropTypes.func,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  state = {
    value: '',
    dropDownWidth: 0,
  };

  componentWillMount() {
    const {value, defaultValue} = this.props;
    const initValue = value || defaultValue;
    if (initValue) {
      this.state = {
        value: initValue,
      };
    }
  }

  componentDidMount() {
    this.anchorEl = ReactDOM.findDOMNode(this.anchorEl);
    if (this.anchorEl) {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        dropDownWidth: this.anchorEl.offsetWidth,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.isSameOption(this.props.options, nextProps.options)) {
      let value;
      nextProps.options.some((option) => {
        if (option.key === this.state.value) {
          value = option.key;
          return true;
        }
      });
      if (value) {
        this.setState({
          value: value,
        });
      }
    }
    // if controlled
    if (nextProps.value !== undefined &&
      this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  isSameOption(opt, optNew) {
    if (opt.length !== optNew.length) {
      return false;
    }
    let isSame = true;
    opt.some((o, index) => {
      if (!shallowEqual(o, optNew[index])) {
        isSame = false;
        return true;
      }
    });
    return isSame;
  }

  findOptionValueByKey(opt, key) {
    // init value = '' to suppress the warning uncontrolled change to controlled
    let optionValue = '';
    opt.some((o) => {
      if (o.key === key) {
        optionValue = o.value;
        return true;
      }
    });
    return optionValue;
  }

  handleItemTouchTap = (key) => (event) => {
    if (this.props.onChange) {
      this.props.onChange(event, key);
    }
    // if not controlled
    if (this.props.value === undefined) {
      this.setState({
        value: key,
      });
    }
  }

  render() {
    const {
      options,
      hintText,
    } = this.props;
    const uniqueId = Math.floor(Math.random() * 0xFFFF).toString();

    const anchor = (
      <TextField
        id={uniqueId}
        style={{cursor: 'pointer'}}
        readOnly="readonly"
        appendIcon={true}
        value={this.findOptionValueByKey(options, this.state.value)}
        hintText={hintText}
      />
    );

    const dropdownMenuStyle = {
      width: `${this.state.dropDownWidth }px`,
    };

    return (
      <Dropdown
        anchorEl={anchor}
        align="middle"
        trigger="click"
        ref={(el) => this.anchorEl = el}
      >
        <DropdownMenu
          className="zui-select"
          style={dropdownMenuStyle}
        >
          {
            options.map((option) => {
              const itemClassName = classNames({
                'zui-select-item': true,
                'is-selected': option.key === this.state.value,
              });
              return (
                <DropdownMenuItem
                  className={itemClassName}
                  key={option.key}
                  onTouchTap={this.handleItemTouchTap(option.key)}
                >
                  {option.value}
                </DropdownMenuItem>
              );
            })
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Select;
