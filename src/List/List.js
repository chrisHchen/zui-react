import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './List.css';

class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    subheaderText: PropTypes.string,
  }

  render() {
    const {
      children,
      style,
      subheaderText,
      ...other
    } = this.props;

    const mergedClass = classNames({
      'zui-list': true,
      'subheadered': !!subheaderText,
    });

    return (
      <div
        style={style}
        className={mergedClass}
        {...other}
      >
        {subheaderText && <div className="zui-list-subheader">{subheaderText}</div>}
        {children}
      </div>
    );
  }
}

export default List;
