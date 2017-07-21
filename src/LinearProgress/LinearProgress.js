import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function getRelativeValue(value, min, max) {
  const clampedValue = Math.min(Math.max(min, value), max);
  const rangeValue = max - min;
  const relValue = Math.round((clampedValue - min) / rangeValue * 10000) / 10000;
  return relValue * 100;
}

class LinearProgress extends Component {
  static propTypes = {
    color: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    mode: PropTypes.oneOf(['determinate', 'indeterminate']),
    style: PropTypes.object,
    value: PropTypes.number,
  };

  static defaultProps = {
    mode: 'indeterminate',
    value: 0,
    min: 0,
    max: 100,
  };

  componentDidMount() {
    this.timers = {};

    this.timers.bar1 = this.barUpdate('bar1', 0, this.bar1, [
      [-35, 100],
      [100, -90],
    ], 0);

    this.timers.bar2 = setTimeout(() => {
      this.barUpdate('bar2', 0, this.bar2, [
        [-200, 100],
        [107, -8],
      ], 0);
    }, 850);
  }

  componentWillUnmount() {
    clearTimeout(this.timers.bar1);
    clearTimeout(this.timers.bar2);
  }

  barUpdate(id, step, barElement, stepValues, timeToNextStep) {
    if (this.props.mode !== 'indeterminate') return;

    timeToNextStep = timeToNextStep || 420;
    step = step || 0;
    step %= 4;

    if (step === 0) {
      barElement.style.left = `${stepValues[0][0]}%`;
      barElement.style.right = `${stepValues[0][1]}%`;
    } else if (step === 1) {
      barElement.style.transitionDuration = '840ms';
    } else if (step === 2) {
      barElement.style.left = `${stepValues[1][0]}%`;
      barElement.style.right = `${stepValues[1][1]}%`;
    } else if (step === 3) {
      barElement.style.transitionDuration = '0ms';
    }
    this.timers[id] = setTimeout(() => this.barUpdate(id, step + 1, barElement, stepValues), timeToNextStep);
  }

  render() {
    const {
      style,
      mode,
      value,
      max,
      min,
    } = this.props;

    const barStyle = {};
    if (mode === 'determinate') {
      barStyle.width = `${getRelativeValue(value, min, max)}%`;
    }
    const mergedBarClassName = classNames({
      'zui-linear-progress-bar': true,
      'determinated': mode === 'determinate',
    });
    const mergedBarFirstClassName = classNames({
      'zui-linear-progress-bar-first': true,
      'indeterminated': mode === 'indeterminate',
    });
    const mergedBarSecondClassName = classNames({
      'zui-linear-progress-bar-second': true,
      'indeterminated': mode === 'indeterminate',
    });

    return (
      <div style={style} className="zui-linear-progress">
        <div className={mergedBarClassName} style={barStyle}>
          <div ref={(el) => this.bar1 = el} className={mergedBarFirstClassName} />
          <div ref={(el) => this.bar2 = el} className={mergedBarSecondClassName} />
        </div>
      </div>
    );
  }
}

export default LinearProgress;
