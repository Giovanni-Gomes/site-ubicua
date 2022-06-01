import React from 'react';
import { menuItem, menuItems } from '../../data/menuItems';
import MenuItems, { MenuItemsProps } from '../MenuItems'
// import { Container } from './styles';

export interface DropdownProps {
  submenus: ;
  dropdown: boolean;
  depthlevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({submenus, dropdown, depthlevel}) => {
  depthlevel = depthlevel+1;
  const dropdownClass = depthlevel>1 ? "dropdown-submenu":"";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {
         submenus.map((submenu, index) => {
          <MenuItems items={submenu} key={index} depthlevel={depthlevel}/>
        })
      }
    </ul>
  );
}

export default Dropdown;