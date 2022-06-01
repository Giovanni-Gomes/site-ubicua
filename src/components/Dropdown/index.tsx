import React from 'react';
import MenuItems, { MenuItemsProps } from '../MenuItems'
import menuItems from '../../data/MenuItems';
// import { Container } from './styles';

export interface DropdownProps {
  submens: ;
  dropdown: boolean;
  depthlevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({submens, dropdown, depthlevel}) => {
  depthlevel = depthlevel+1;
  const dropdownClass = depthlevel>1 ? "dropdown-submenu":"";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {
         submens.map((submenu, index) => {
          <MenuItems items={submenu} key={index} depthlevel={depthlevel}/>
        })
      }
    </ul>
  );
}

export default Dropdown;