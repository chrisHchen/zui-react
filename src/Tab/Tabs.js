import React, {Component, cloneElement, Children, isValidElement, createElement} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import warning from 'warning';
import FloatingBar from './FloatingBar';
import Tab from './Tab';
import classNames from 'classnames';

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

  state = {
    selectedIndex: 0,
    tabWidthArray: [],
  };

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

  componentDidMount() {
    this.setTabWidthArray();
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
      this.props.onChange(tabValue || index, event, tab);
    }
    this.setState({selectedIndex: index});

    if (tab.props.onActive) {
      tab.props.onActive(tab);
    }
  };

  setTabWidthArray() {
    const tabWidthArray = [];
    const tabs = this.getTabs();
    const tabCount = tabs.length;
    for (let i = 0 ; i < tabCount ; i++) {
      tabWidthArray[i] = ReactDOM.findDOMNode(this[`tab${i}`]).offsetWidth;
    }
    this.setState({
      tabWidthArray,
    });
  }

  render() {
    const {
      className,
      value,
    } = this.props;

    let selectedIndex = 0;
    const tabContent = [];
    const tabs = this.getTabs().map((tab, index) => {
      warning(tab.type === Tab,
        `Zui: Tabs only accepts Tab Components as children.
        Found ${tab.type.muiName || tab.type} as child number ${index + 1} of Tabs`);

      warning(!value || tab.props.value !== undefined,
        `Zui: Tabs value prop has been passed, but Tab ${index}
        does not have a value prop. Needs value if Tabs is going
        to be a controlled component.`);

      const selected = this.getSelected(tab, index);
      if (selected) {
        selectedIndex = index;
      }
      tabContent.push(tab.props.children ?
        createElement('div', {
          key: index,
          className: 'zui-tab-content-item',
          selected,
          style: { display: !this.getSelected(tab, index) ? 'none' : undefined},
        }, tab.props.children) : undefined);

      return cloneElement(tab, {
        ref: (el) => this[`tab${index}`] = el,
        key: index,
        index: index,
        selected,
        onTouchTap: this.handleTabTouchTap,
      });
    });

    const mergedClassNames = classNames({
      'zui-tabs': true,
      [className]: !!className,
    });

    const tabWidthArray = this.state.tabWidthArray;
    const width = tabWidthArray[selectedIndex];
    let translateX = 0;
    tabWidthArray.forEach((tabWidth, index) => {
      if (index < selectedIndex) {
        translateX += tabWidthArray[index];
      }
    });
    return (
      <div className={mergedClassNames}>
        <div className="zui-tabs-header">
          <FloatingBar width={width} translateX={translateX} />
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
