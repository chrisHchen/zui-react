import React, {Component, cloneElement, Children, isValidElement} from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
// import FloatingBar from './FloatingBar';
import Tab from './Tab';
import classNames from 'classnames';
import './Tabs.css';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    initialSelectedIndex: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }

  static defaultProps = {
    initialSelectedIndex: 0,
    onChange: () => {},
  };

  state = {selectedIndex: 0};

  componentWillMount() {
    const initialIndex = this.props.initialSelectedIndex;

    this.setState({
      selectedIndex: this.props.value !== undefined ?
        this.getSelectedIndex(this.props) :
        initialIndex < this.getTabCount() ?
          initialIndex :
          0,
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== undefined) {
      this.setState({
        selectedIndex: this.getSelectedIndex(newProps),
      });
    }
  }

  getSelectedIndex(props) {
    let selectedIndex = -1;

    this.getTabs().forEach((tab, index) => {
      if (props.value === tab.props.value) {
        selectedIndex = index;
      }
    });

    return selectedIndex;
  }

  getTabs() {
    const tabs = [];

    Children.forEach(this.props.children, (tab) => {
      if (isValidElement(tab)) {
        tabs.push(tab);
      }
    });

    return tabs;
  }

  getTabCount() {
    return this.getTabs().length;
  }

  getSelected(tab, index) {
    const value = this.props.value;
    return value ? value === tab.props.value :
      this.state.selectedIndex === index;
  }

  handleTabTouchTap = (tabValue, event, tab) => {
    const value = this.props.value;
    const index = tab.props.index;

    if ((value && value !== tabValue) ||
      this.state.selectedIndex !== index) {
      this.onChange(tabValue, event, tab);
    }

    this.setState({selectedIndex: index});

    if (tab.props.onActive) {
      tab.props.onActive(tab);
    }
  };

  render() {
    const {
      className,
      value,
    } = this.props;

    const tabContent = [];
    const tabs = this.getTabs().map((tab, index) => {
      warning(tab.type === Tab,
        `Zui: Tabs only accepts Tab Components as children.
        Found ${tab.type.muiName || tab.type} as child number ${index + 1} of Tabs`);

      warning(!value || tab.props.value !== undefined,
        `Zui: Tabs value prop has been passed, but Tab ${index}
        does not have a value prop. Needs value if Tabs is going
        to be a controlled component.`);

      tabContent.push(tab.props.children ?
        cloneElement(tab.props.children, {
          key: index,
          selected: this.getSelected(tab, index),
        }) : undefined);

      return cloneElement(tab, {
        key: index,
        index: index,
        selected: this.getSelected(tab, index),
        onTouchTap: this.handleTabTouchTap,
      });
    });

    const mergedClassNames = classNames({
      'zui-tabs': true,
      [className]: !!className,
    });

    return (
      <div className={mergedClassNames}>
        <div className="zui-tabs-header">
          {tabs}
        </div>
        <div className="zui-tabs-content">
          {tabContent}
        </div>
      </div>
    );
  }
}

export default Tabs;
