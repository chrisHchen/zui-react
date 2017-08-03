import React, {Component} from 'react';
import SvgIcon from 'zui-react/SvgIcon';

const example = [
  "import React, {Component} from 'react';",
  "import SvgIcon from 'zui-react/SvgIcon';",
  '\n',
  '<SvgIcon color="red">',
  '  <path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" />',
  '  <path',
  '    fillOpacity=".3"',
  '    d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 75.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"',
  '  />',
  '</SvgIcon>',
  '<SvgIcon color="red" hoverColor="green">',
  '  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />',
  '</SvgIcon>',
].join('\n');

class SvgIconPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">SvgIcon</h3>
        <p className="docs-desc">可设置color和hoverColor属性</p>
        <SvgIcon color="red">
          <path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" />
          <path
            fillOpacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7
            5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
          />
        </SvgIcon>
        <SvgIcon color="red" hoverColor="green">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </SvgIcon>
        <pre className="react">
          {
            example
          }
        </pre>

      </div>
    );
  }
}

export default SvgIconPage;
