import React, {Component} from 'react';
import CircularProgress from 'zui-react/CircularProgress';
import LinearProgress from 'zui-react/LinearProgress';

class ProgressPage extends Component {
  state = {
    completed: 0,
  }
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 100);
    }
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">Progress分为圆形和条形两种</h3>
        <p className="docs-desc">圆形的例子如下</p>
        <CircularProgress />
        <pre className="react">
          {
            `import CircularProgress from 'zui-react/CircularProgress';

<CircularProgress />
            `
          }
        </pre>
        <h3 className="docs-title">可以设置size和thickness来自定义大小</h3>
        <CircularProgress size={60} thickness={5} />
        <pre className="react">
          {
            `import CircularProgress from 'zui-react/CircularProgress';

<CircularProgress size={60} thickness={5} />
            `
          }
        </pre>
        <h3 className="docs-title">可以自己定义完成度</h3>
        <p className="docs-desc">设置mode为determinate</p>
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
        />
        <pre className="react">
          {
            `
import CircularProgress from 'zui-react/CircularProgress';

state = {
  completed: 0,
}

componentDidMount() {
  this.timer = setTimeout(() => this.progress(5), 1000);
}

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completed) {
  if (completed > 100) {
    this.setState({completed: 100});
  } else {
    this.setState({completed});
    const diff = Math.random() * 10;
    this.timer = setTimeout(() => this.progress(completed + diff), 100);
  }
}

<CircularProgress
  mode="determinate"
  value={this.state.completed}
/>
            `
          }
        </pre>
        <h3 className="docs-title">线性进度条LinearProgress</h3>
        <LinearProgress />
        <pre className="react">
          {
            `import LinearProgress from 'zui-react/LinearProgress';';

<LinearProgress />
            `
          }
        </pre>
        <h3 className="docs-title">线性进度条同样可以自己定义完成度</h3>
        <LinearProgress mode="determinate" value={this.state.completed} />
        <pre className="react">
          {
            `import LinearProgress from 'zui-react/LinearProgress';

state = {
  completed: 0,
}

componentDidMount() {
  this.timer = setTimeout(() => this.progress(5), 1000);
}

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completed) {
  if (completed > 100) {
    this.setState({completed: 100});
  } else {
    this.setState({completed});
    const diff = Math.random() * 10;
    this.timer = setTimeout(() => this.progress(completed + diff), 100);
  }
}

<LinearProgress mode="determinate" value={this.state.completed} />
            `
          }
        </pre>
      </div>
    );
  }
}

export default ProgressPage;
