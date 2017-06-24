import PropTypes from 'prop-types';

const horizontal = PropTypes.oneOf(['left', 'middle', 'right']);
const vertical = PropTypes.oneOf(['top', 'center', 'bottom']);

export default {

  corners: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),

  horizontal: horizontal,

  vertical: vertical,

  origin: PropTypes.shape({
    horizontal: horizontal,
    vertical: vertical,
  }),

  cornersAndCenter: PropTypes.oneOf([
    'bottom-center',
    'bottom-left',
    'bottom-right',
    'top-center',
    'top-left',
    'top-right',
  ]),

  stringOrNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
