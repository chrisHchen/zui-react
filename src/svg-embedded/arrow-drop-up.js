import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

let NavigationArrowDropUp = (props) => (
  <SvgIcon {...props}>
    <path d="M7 14l5-5 5 5z" />
  </SvgIcon>
);
NavigationArrowDropUp = pure(NavigationArrowDropUp);
NavigationArrowDropUp.displayName = 'NavigationArrowDropUp';
NavigationArrowDropUp.zuiName = 'SvgIcon';

export default NavigationArrowDropUp;
