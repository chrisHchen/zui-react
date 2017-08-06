import React, {Component} from 'react';
import List, {ListItem, SelectableList} from 'zui-react/List';
import Button from 'zui-react/Button';

const example = [
  "import React, {Component} from 'react';",
  "import List, {ListItem, SelectableList} from 'zui-react/List'",
  '\n',
  '<List',
  '  subheaderText="Try Harder"',
  '  style={{',
  '    border: "1px solid #eee",',
  '    width: "250px",',
  '  }}',
  '>',
  '  <ListItem',
  '    nestedItems={[',
  '      <ListItem',
  '        key={1}',
  '        primaryText="Starred"',
  '      />,',
  '      <ListItem',
  '        key={2}',
  '        primaryText="Sent Mail"',
  '        disabled={true}',
  '        nestedItems={[',
  '          <ListItem key={1} primaryText="Drafts" />,',
  '        ]}',
  '      ><span>Sent Mail</span></ListItem>,',
  '      <ListItem',
  '        key={3}',
  '        primaryText="Inbox"',
  '        nestedItems={[',
  '          <ListItem key={1} primaryText="Drafts" />,',
  '        ]}',
  '      />,',
  '    ]}',
  '  >',
  '  Test a',
  '  </ListItem>',
  '  <ListItem disableTouchRipple={false}>Test b</ListItem>',
  '</List>',
].join('\n');

const example2 = [
  "import React, {Component} from 'react';",
  "import List, {ListItem, SelectableList} from 'zui-react/List'",
  '\n',
  '<SelectableList',
  '  defaultValue={5}',
  '  subheaderText="Try Harder"',
  '  onChange={(event, value) => console.log(value)}',
  '  style={{',
  '    border: "1px solid #eee",',
  '    width: "250px",',
  '  }}',
  '>',
  '  <ListItem',
  '    value={0}',
  '    nestedItems={[',
  '      <ListItem',
  '        value={1}',
  '        key={1}',
  '        primaryText="Starred"',
  '      />,',
  '      <ListItem',
  '        value={2}',
  '        key={2}',
  '        primaryText="Sent Mail"',
  '        disabled={true}',
  '        nestedItems={[',
  '          <ListItem value={3} key={1} primaryText="Drafts" />,',
  '        ]}',
  '      ><span>Sent Mail Inner</span></ListItem>,',
  '      <ListItem',
  '        value={4}',
  '        key={3}',
  '        primaryText="Inbox"',
  '        nestedItems={[',
  '          <ListItem value={5} key={1} primaryText="Drafts" />,',
  '        ]}',
  '      />,',
  '    ]}',
  '  >Test a</ListItem>',
  '  <ListItem value={6} disableTouchRipple={false}>Test b</ListItem>',
  '</SelectableList>',
].join('\n');

class FontIconPage extends Component {
  state = {
    selectedValue: 5,
  }

  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  handleChangeValue = () => {
    this.setState({
      selectedValue: 1,
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">通过ListItem的nestedItems属性来设置下一级的ListItem</p>
        <p className="docs-desc">设置disableTouchRipple为false可开启波纹效果</p>
        <p className="docs-desc">设置disabled则该选项不可用</p>
        <List
          subheaderText="Try Harder"
          style={{
            border: '1px solid #eee',
            width: '250px',
          }}
        >
          <ListItem
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Starred"
              />,
              <ListItem
                key={2}
                primaryText="Sent Mail"
                disabled={true}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" />,
                ]}
              ><span>Sent Mail</span></ListItem>,
              <ListItem
                key={3}
                primaryText="Inbox"
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" />,
                ]}
              />,
            ]}
          >Test a</ListItem>
          <ListItem disableTouchRipple={false}>Test b</ListItem>
        </List>
        <pre className="react">
          {
            example
          }
        </pre>

        <h3 className="docs-title">可选中的选项</h3>
        <p className="docs-desc">通过SelectableList来设置其为可选中</p>
        <p className="docs-desc">设置defaultValue为默认选择项</p>
        <p className="docs-desc">设置value值可以将SelectableList设置为controlled</p>
        <p className="docs-desc">选中项改变时onChange回调函数会执行</p>
        <Button label="change" onClick={this.handleChangeValue} />
        <SelectableList
          defaultValue={5}
          value={this.state.selectedValue}
          subheaderText="Try Harder"
          onChange={(event, value) => console.log(value)}
          style={{
            border: '1px solid #eee',
            width: '250px',
          }}
        >
          <ListItem
            value={0}
            nestedItems={[
              <ListItem
                value={1}
                key={1}
                primaryText="Starred"
              />,
              <ListItem
                value={2}
                key={2}
                primaryText="Sent Mail"
                disabled={true}
                nestedItems={[
                  <ListItem value={3} key={1} primaryText="Drafts" />,
                ]}
              ><span>Sent Mail Inner</span></ListItem>,
              <ListItem
                value={4}
                key={3}
                primaryText="Inbox"
                nestedItems={[
                  <ListItem value={5} key={1} primaryText="Drafts" />,
                ]}
              />,
            ]}
          >Test a</ListItem>
          <ListItem value={6} disableTouchRipple={false}>Test b</ListItem>
        </SelectableList>
        <pre className="react">
          {
            example2
          }
        </pre>
      </div>
    );
  }
}

export default FontIconPage;
