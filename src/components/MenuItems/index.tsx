import React, {useState, useEffect, useRef, EventHandler, MouseEventHandler, TouchEventHandler} from 'react';
import menuItems from '../../data/MenuItems';
import Dropdown, { DropdownProps } from '../Dropdown'
import { Span } from '../Widget/styles';
// import { Container } from './styles';
export interface MenuItemsProps {
  items: any;
  depthLevel: any;
}


const MenuItems: React.FC<MenuItemsProps> = ({items, depthLevel}) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if(dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchStart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchStart", handler);
    };
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (
    <li className="menu-item" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {
      items.submenu ? (<>
        <button type='button' aria-haspopup="menu" aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => !prev)}>
        {
          items.title
        } {
          ""
        }{
          depthLevel > 0 ? <span> & raquo; </span> : <span className="arrow" /> 
        } </button> <Dropdown depthlevel = {
          depthLevel
        }
        submens = {
          items.submenu
        }
        dropdown = {
          dropdown
        }
        /> </>
      ) : ( <a href="/#"> {
        items.title
      } </a> )
    } </li>
  );
}

export default MenuItems;