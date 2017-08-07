import React, {Component} from 'react';
import Button from 'zui-react/Button';
import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';

const example = [
  "import React, {Component} from 'react';",
  "import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';",
  '\n',
  '<Dropdown',
  '  anchorEl={',
  '    <Button',
  '      onClick={() => console.log("button click")}',
  '      type="primary"',
  '      label="下拉菜单1"',
  '    />',
  '  }',
  '  anchorAlign="middle"',
  '  onChange={(event, value) => console.log(event.target, value)}',
  '>',
  '  <DropdownMenu',
  '    className="tt"',
  '    onClick={() => console.log("click")}',
  '  >',
  '    <DropdownMenuItem',
  '      className="itts"',
  '      value={1}',
  '      onTouchTap={() => {',
  '        console.log("tap");',
  '      }}',
  '    >',
  '      <div>menu1</div>',
  '    </DropdownMenuItem>',
  '    <DropdownMenuItem',
  '      className="itts"',
  '      value={2}',
  '    >',
  '      <div>menu2</div>',
  '    </DropdownMenuItem>',
  '  </DropdownMenu>',
  '</Dropdown>',
].join('\n');

const example2 = [
  "import React, {Component} from 'react';",
  "import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';",
  '\n',
  '<Dropdown',
  '  anchorEl={',
  '    <Button',
  '      type="info"',
  '      label="下拉菜单2"',
  '    />',
  '  }',
  '  trigger="click"',
  '  anchorAlign="left"',
  '  onChange={(event, value) => console.log(event.target, value)}',
  '>',
  '  <DropdownMenu',
  '    onMouseEnter={() => console.log("onMouseEnter")}',
  '  >',
  '{',
  '  Array.from({length: 4}).map((_, index) =>',
  '    (<DropdownMenuItem className="itts" value={index} key={index}>',
  '      <div>menu{index}</div>',
  '    </DropdownMenuItem>)',
  '  )',
  '}',
  '  </DropdownMenu>',
  '</Dropdown>',
].join('\n');

const example3 = [
  "import React, {Component} from 'react';",
  "import Dropdown, {DropdownMenu, DropdownMenuItem} from 'zui-react/Dropdown';",
  '\n',
  '<Dropdown',
  '  hideOnClick={false}',
  '  anchorEl={',
  '    <Button',
  '      type="warning"',
  '      label="点击后不隐藏菜单"',
  '    />',
  '  }',
  '  trigger="click"',
  '  anchorAlign="left"',
  '  onChange={(event, value) => console.log(event.target, value)}',
  '>',
  '  <DropdownMenu',
  '    onMouseEnter={() => console.log("onMouseEnter")}',
  '  >',
  '{',
  '  Array.from({length: 4}).map((_, index) =>',
  '    (<DropdownMenuItem className="itts" value={index} key={index}>',
  '      <div>menu{index}</div>',
  '    </DropdownMenuItem>)',
  '  )',
  '}',
  '  </DropdownMenu>',
  '</Dropdown>',
].join('\n');

class DropdownnPage extends Component {
  componentDidMount() {
    Array.from(document.getElementsByTagName('pre')).forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <div>
        <h3 className="docs-title">基本用法</h3>
        <p className="docs-desc">通过设置anchorEl来设置Dropdown的着陆点</p>
        <p className="docs-desc">通过anchorAlign和targetAlign来设置Dropdown与着陆点的对齐方式：可选项left, middle, right,默认为middle</p>
        <p className="docs-desc">通过trigger设置触发条件：选项为click, hover, 默认为hover</p>
        <p className="docs-desc">通过onChange设置选中dropDown后的回调函数:调用时传2个参数：原生事件对象和选中菜单的value</p>
        <Dropdown
          anchorEl={
            <Button
              onClick={() => console.log('button click')}
              type="primary"
              label="下拉菜单1"
            />
          }
          anchorAlign="middle"
          onChange={(event, value) => console.log(event.target, value)}
        >
          <DropdownMenu
            className="tt"
            onClick={() => console.log('click')}
          >
            <DropdownMenuItem
              className="itts"
              value={1}
              onTouchTap={() => {
                console.log('tap');
              }}
            >
              <div>menu1</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="itts"
              value={2}
            >
              <div>menu2</div>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
        <pre className="react">
          {
            example
          }
        </pre>
        <h3 className="docs-title">通过click触发,并设置anchorAlign为left</h3>
        <Dropdown
          anchorEl={
            <Button
              type="info"
              label="下拉菜单2"
            />
          }
          trigger="click"
          anchorAlign="left"
          onChange={(event, value) => console.log(event.target, value)}
        >
          <DropdownMenu
            onMouseEnter={() => console.log('onMouseEnter')}
          >
            {
              Array.from({length: 4}).map((_, index) =>
                (<DropdownMenuItem className="itts" value={index} key={index}>
                  <div>menu{index}</div>
                </DropdownMenuItem>)
              )
            }
          </DropdownMenu>
        </Dropdown>
        <pre className="react">
          {
            example2
          }
        </pre>
        <h3 className="docs-title">hideOnClick</h3>
        <p className="docs-desc">设置hideOnClick为false则点击后不隐藏菜单</p>
        <Dropdown
          hideOnClick={false}
          anchorEl={
            <Button
              type="warning"
              label="点击后不隐藏菜单"
            />
          }
          align="middle"
          onChange={(event, value) => console.log(event.target, value)}
        >
          <DropdownMenu>
            {
              Array.from({length: 4}).map((_, index) =>
                (<DropdownMenuItem className="itts" value={index} key={index}>
                  <div>menu{index}</div>
                </DropdownMenuItem>)
              )
            }
          </DropdownMenu>
        </Dropdown>
        <pre className="react">
          {
            example3
          }
        </pre>
      </div>
    );
  }
}

export default DropdownnPage;
