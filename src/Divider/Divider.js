import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Divider.css';

const Divider = (props) => {
  const {
    inset,
    className,
    style,
    ...other
  } = props;


  const mergedClassNames = classNames({
    'zui-divider': true,
    'inset': inset,
    [className]: !!className,

  });
  return (
    <hr {...other} style={style} className={mergedClassNames} />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  /**
  * If true, the `Divider` will be indented.
  */
  inset: PropTypes.bool,
  style: PropTypes.object,
};

Divider.defaultProps = {
  inset: false,
};

export default Divider;
