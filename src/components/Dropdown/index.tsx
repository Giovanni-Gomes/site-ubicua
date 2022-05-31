import React from 'react';
import MenuItems from '../MenuItems'

// import { Container } from './styles';

const Dropdown: React.FC = ({submens, dropdown, depthLevel}) => {
  depthLevel = depthLevel+1;
  const dropdownClass = depthLevel>1 ? "dropdown-submenu":"";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {
        submens.map((submenu, index) => {
          <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
        })
      }
    </ul>
  );
}

export default Dropdown;