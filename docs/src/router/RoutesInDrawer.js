import React, {Component} from 'react';
import List, {ListItem} from 'zui-react/List';
import drawMenu from './drawMenu';
import {Link} from 'react-router-dom';

class RoutesInDrawer extends Component {
  render() {
    return (
      <List subheaderText="ZUI REACT">
        {
          drawMenu.map((group) => (
            <ListItem
              key={group.title}
              nestedItems={
                group.menus.map((menu, index) => (
                  <ListItem key={menu.name + index}>
                    <Link to={menu.to} className="docs-menuItem">{menu.name}</Link>
                  </ListItem>
                ))
              }
            >{group.title}</ListItem>
          ))
        }
      </List>
    );
  }
}

export default RoutesInDrawer;
