const prefix = function() {
  const div = document.createElement('div');
  const cssText = '-webkit-transition:all .1s; ' +
    '-moz-transition:all .1s; ' +
    '-o-transition:all .1s; ' +
    '-ms-transition:all .1s; ' +
    'transition:all .1s;';
  div.style.cssText = cssText;
  const style = div.style;
  if (style.webkitTransition) {
    return 'Webkit';
  }
  if (style.MozTransition) {
    return 'Moz';
  }
  if (style.oTransition) {
    return 'O';
  }
  if (style.msTransition) {
    return 'MS';
  }
  return '';
}();

export default {
  set(style, key, value) {
    if (prefix) {
      key = prefix + key[0].toUpperCase() + key.slice(1);
    }
    style[key] = value;
  },
};
