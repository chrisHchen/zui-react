import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import SvgIcon from '../SvgIcon';
import FontIcon from '../FontIcon';
import Popover from '../Popover';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Shade from '../Shade';
import Drawer from '../Drawer';
import Avatar from '../Avatar';
import List, {ListItem, SelectableList} from '../List';
import Dropdown, {DropdownMenu, DropdownMenuItem} from '../Dropdown';

injectTapEventPlugin();

const shadeStyle = {
  width: '100px',
  height: '100px',
  margin: '10px',
  display: 'inline-block',
};

class Hello extends Component {
  state = {
    open: false,
    open2: false,
    drawerOpen: false,
    drawerOpen2: false,
    drawerOpen3: false,
    drawerOpen4: false,
  }
  handleTouchTap = () => {
    console.log('touchTap');  // eslint-disable-line
  }
  handleClick = () => {
    console.log('click');  // eslint-disable-line
  }
  handleRequestClose = (reason) => {
    console.log(reason);
    this.setState({
      open: false,
    });
  }
  handleOpenPopover = () => {
    this.setState({
      open: true,
    });
  }
  handleMouseEnter = () => {
    this.setState({
      open2: true,
    });
  }
  handleRequestClose2 = (reason) => {
    console.log(reason);
  }
  handleMouseLeave = () => {
    this.setState({
      open2: false,
    });
  }

  handleToggle = () => {
    this.setState({drawerOpen: !this.state.drawerOpen});
  };

  handleToggle2 = () => {
    this.setState({drawerOpen2: !this.state.drawerOpen2});
  };
  handleToggle3 = () => {
    this.setState({drawerOpen3: !this.state.drawerOpen3});
  };
  handleToggle4 = () => {
    this.setState({drawerOpen4: !this.state.drawerOpen4});
  };

  render() {
    return (
      <div style={{height: '2000px'}}>
        <Button label="确定按钮" />
        <Button
          type="info" label="确定按钮"
          onTouchTap={this.handleTouchTap}
          onClick={this.handleClick}
        />
        <Button type="success" label="确定按钮" />
        <Button type="warning" label="确定按钮" />
        <Button type="danger" label="确定按钮" />
        <Button
          type="text"
          label="确定按钮"
          disableTouchRipple={false}
          touchRippleColor="#000"
          onClick={this.handleClick}
        />
        <Button
          type="text"
          label="确定按钮确定按钮"
          disableTouchRipple={false}
          touchRippleColor="green"
          onClick={this.handleClick}
        />
        <Button
          disabled={true} label="确定按钮"
          disableTouchRipple={false}
        />
        <Button
          className="hoho"
          label="确定按钮"
          disableTouchRipple={false}
          centerRipple={true}
          touchRippleColor="red"
        />
        <Button style={{backgroundColor: '#666'}} label="确定按钮" />
        <Button href="http://www.baidu.com" label="确定按钮" />
        <Button label="default" />
        <div>
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
        </div>
        <div>
          <FontIcon className="iconfont icon-iphone" style={{marginRight: '15px'}} />
          <FontIcon className="iconfont icon-iphone" color="red" style={{marginRight: '15px'}} />
          <FontIcon
            className="iconfont icon-iphone"
            color="blue"
            hoverColor="green"
            style={{marginRight: '15px'}}
          />
        </div>
        <div>
          <Avatar
            src="http://www.material-ui.com/images/uxceo-128.jpg"
          />
          <Avatar
            src="http://www.material-ui.com/images/uxceo-128.jpg"
            size={30}
            style={{marginLeft: '20px'}}
          />
          <Avatar
            icon={
              <FontIcon className="iconfont icon-iphone" />
            }
            style={{marginLeft: '20px'}}
          />
          <Avatar
            style={{marginLeft: '20px'}}
          >
          TAT
          </Avatar>
          <Avatar
            icon={
              <SvgIcon color="red" hoverColor="green">
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
              </SvgIcon>
            }
            style={{marginLeft: '20px'}}
          />
          <Avatar
            icon={
              <SvgIcon hoverColor="green">
                <path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" />
                <path
                  fillOpacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7
                  5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
                />
              </SvgIcon>
            }
            color="#336699"
            backgroundColor="rgb(236, 64, 122)"
            style={{marginLeft: '20px'}}
          />
        </div>
        <div>
          <Shade style={shadeStyle} />
          <Shade style={shadeStyle} zDepth={2} circle={true} />
        </div>
        <div
          style={{
            border: '1px solid #eee',
            width: '250px',
          }}
        >
          <List subheaderText="Try Harder">
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
        </div>
        <div style={{margin: '15px 0'}}>selectable list</div>
        <div
          style={{
            border: '1px solid #eee',
            width: '250px',
          }}
        >
          <SelectableList defaultValue={5} subheaderText="Try Harder" onChange={(event, value) => console.log(value)}>
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
        </div>
        <div style={{marginTop: '20px'}}>drop down</div>
        <div style={{marginLeft: '200px'}}>
          <Dropdown
            anchorEl={
              <Button
                onClick={() => console.log('button click')}
                type="text"
                style={{marginRight: '100px'}}
                label="下拉菜单1"
              />
            }
            align="middle"
            trigger="click"
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
              <DropdownMenuItem className="itts" value={2}>
                <div>menu2</div>
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            anchorEl={
              <Button
                type="text"
                label="下拉菜单2"
              />
            }
            align="middle"
            onChange={(event, value) => console.log(event.target, value)}
          >
            <DropdownMenu
              onMouseEnter={() => console.log('onMouseEnter')}
            >
              <DropdownMenuItem className="itts" value={4}>
                <div>menu1</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu2</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu3</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu4</div>
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            hideOnClick={false}
            anchorEl={
              <Button
                type="text"
                label="下拉菜单 hideOnClick"
              />
            }
            align="middle"
          >
            <DropdownMenu>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu1</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu2</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu3</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="itts" value={4}>
                <div>menu4</div>
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div style={{margin: '100px 0 0 300px'}}>
          <Button
            label="Toggle Drawer"
            onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.drawerOpen}>
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
          </Drawer>
        </div>

        <div style={{margin: '100px 0 0 300px'}}>
          <Button
            label="Toggle Drawer width=150"
            onTouchTap={this.handleToggle2}
          />
          <Drawer open={this.state.drawerOpen2} width={150}>
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>width=150</div>
          </Drawer>
        </div>

        <div style={{margin: '100px 0 0 300px'}}>
          <Button
            label="Toggle Drawer not right-side"
            onTouchTap={this.handleToggle4}
          />
          <Drawer
            open={this.state.drawerOpen4}
            width={200}
            openSecondary={true}
            onRequestChange={(drawerOpen4) => this.setState({drawerOpen4})}
          >
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>right-side</div>
          </Drawer>
        </div>

        <div style={{margin: '100px 0 0 300px'}}>
          <Button
            label="Toggle Drawer not docked"
            onTouchTap={this.handleToggle3}
          />
          <Drawer
            open={this.state.drawerOpen3}
            width={150}
            docked={false}
            onRequestChange={(drawerOpen3) => {
              this.setState({drawerOpen3});
            }}
          >
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>not docked</div>
          </Drawer>
        </div>

        <div style={{marginTop: '100px'}}>
          <Button
            type="text"
            label="click me"
            disableTouchRipple={false}
            ref={(el) => this.anchor = ReactDOM.findDOMNode(el)}
            onTouchTap={this.handleOpenPopover}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.anchor}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <div style={{height: '200px', lineHeight: '200px'}}>this is a popover</div>
          </Popover>
          <Button
            type="text"
            label="hover me"
            disableTouchRipple={false}
            ref={(el) => this.anchor2 = ReactDOM.findDOMNode(el)}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Popover
            open={this.state.open2}
            anchorEl={this.anchor2}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose2}
            useLayerForClickAway={false}
          >
            <div style={{height: '200px', lineHeight: '200px'}}>this is a popover</div>
          </Popover>

        </div>
      </div>
    );
  }
}

export default Hello;
