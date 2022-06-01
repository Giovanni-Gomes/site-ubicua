import React from 'react';
import {menuItems} from '../../data/menuItems';
import MenuItems from '../MenuItems';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <ul className="menus">
        {
          menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu.title} key={index} depthLevel={depthLevel}/>
          })
        }
      </ul>
    </Container>
  );
}

export default Navbar;