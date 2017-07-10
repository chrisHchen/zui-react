import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoPrefix from '../util/autoPrefix';
import './CircularProgress.css';

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getRelativeValue(value, min, max) {
  const clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

class CircularProgress extends Component {
  static propTypes = {
    color: PropTypes.string,
    innerStyle: PropTypes.object,
    max: PropTypes.number,
    min: PropTypes.number,
    mode: PropTypes.oneOf(['determinate', 'indeterminate']),
    size: PropTypes.number,
    style: PropTypes.object,
    thickness: PropTypes.number,
    value: PropTypes.number,
  };

  static defaultProps = {
    mode: 'indeterminate',
    value: 0,
    min: 0,
    max: 100,
    size: 40,
    thickness: 3.5,
  };

  componentDidMount() {
    this.scalePath(this.path);
    this.rotateWrapper(this.wrapper);
  }

  componentWillUnmount() {
    clearTimeout(this.scalePathTimer);
    clearTimeout(this.rotateWrapperTimer);
  }

  scalePath(path, step = 0) {
    if (this.props.mode !== 'indeterminate') return;

    step %= 3;

    if (step === 0) {
      path.style.strokeDasharray = `${getArcLength(0, this.props)}, ${getArcLength(1, this.props)}`;
      path.style.strokeDashoffset = 0;
      path.style.transitionDuration = '0ms';
    } else if (step === 1) {
      path.style.strokeDasharray = `${getArcLength(0.7, this.props)}, ${getArcLength(1, this.props)}`;
      path.style.strokeDashoffset = getArcLength(-0.3, this.props);
      path.style.transitionDuration = '750ms';
    } else {
      path.style.strokeDasharray = `${getArcLength(0.7, this.props)}, ${getArcLength(1, this.props)}`;
      path.style.strokeDashoffset = getArcLength(-1, this.props);
      path.style.transitionDuration = '850ms';
    }

    this.scalePathTimer = setTimeout(() => this.scalePath(path, step + 1), step ? 750 : 250);
  }

  rotateWrapper(wrapper) {
    if (this.props.mode !== 'indeterminate') return;

    autoPrefix.set(wrapper.style, 'transform', 'rotate(0deg)');
    autoPrefix.set(wrapper.style, 'transitionDuration', '0ms');

    setTimeout(() => {
      autoPrefix.set(wrapper.style, 'transform', 'rotate(1800deg)');
      autoPrefix.set(wrapper.style, 'transitionDuration', '10s');
      autoPrefix.set(wrapper.style, 'transitionTimingFunction', 'linear');
    }, 50);

    this.rotateWrapperTimer = setTimeout(() => this.rotateWrapper(wrapper), 10050);
  }

  render() {
    const {
      style,
      size,
      thickness,
      mode,
      min,
      max,
      value,
    } = this.props;

    const mergedStyle = Object.assign({
      width: `${size }px`,
      height: `${size }px`,
    }, style);

    const sizeStyle = {
      width: `${size }px`,
      height: `${size }px`,
    };

    const pathStyle = {};
    if (mode === 'determinate') {
      const relVal = getRelativeValue(value, min, max);
      autoPrefix.set(pathStyle, 'transition', 'all 0.3s linear');
      autoPrefix.set(pathStyle, 'strokeDasharray',
        `${getArcLength(relVal, this.props)}, ${getArcLength(1, this.props)}`);
    }

    return (
      <div style={mergedStyle} className="zui-circular-progress">
        <div ref={(el) => this.wrapper = el} style={sizeStyle}>
          <svg
            viewBox={`0 0 ${size} ${size}`}
            style={sizeStyle}
          >
            <circle
              ref={(el) => this.path = el}
              style={pathStyle}
              className="circle-path"
              cx={size / 2}
              cy={size / 2}
              r={(size - thickness) / 2}
              fill="none"
              strokeWidth={thickness}
              strokeMiterlimit="20"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default CircularProgress;
