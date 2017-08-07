import React, {Component} from 'react';
import {ListItem, SelectableList} from 'zui-react/List';
import drawMenu from './drawMenu';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

const ChineseMapper = {
  home: '首页',
  installation: '安装',
  quickstart: '快速上手',
};

class RoutesInDrawer extends Component {
  findValue(pathname) {
    pathname = pathname.substring(1); // remove leading slash
    if (ChineseMapper[pathname]) {
      pathname = ChineseMapper[pathname];
    } else if (!pathname) {
      pathname = '首页';
    } else {
      pathname = pathname[0].toUpperCase() + (pathname[1] && pathname.substring(1)) ; // first letter to uppercase
    }
    return pathname;
  }

  render() {
    let {pathname} = this.props.location;
    pathname = this.findValue(pathname);
    console.log(pathname);
    return (
      <SelectableList subheaderText="ZUI REACT" defaultValue={pathname} value={pathname}>
        {
          drawMenu.map((group) => (
            <ListItem
              disableTouchRipple={!!group.link}
              key={group.title}
              value={group.title}
              nestedItems={
                group.menus.map((menu, index) => (
                  <ListItem
                    key={menu.name + index}
                    value={menu.name}
                    disableTouchRipple={false}
                  >
                    {/* this is placeholder...TODO*/}
                    <div>&nbsp;</div>
                    <Link to={menu.to} className="docs-menuItem">{menu.name}</Link>
                  </ListItem>
                ))
              }
            >
              {
                group.link ?
                  <div>
                    <div>&nbsp;</div>
                    <a href={group.link} className="docs-menuItem">{group.title}</a>
                  </div> :
                  group.title
              }
            </ListItem>
          ))
        }
      </SelectableList>
    );
  }
}

export default withRouter(RoutesInDrawer);
