import { ChatTeardropDots } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import {CSSTransition} from 'react-transition-group';

import { Button, Container, List, Dropdowns, MenuItem, NavItem, NavBar } from './styles';

// interface DropdownProps {
//   title: string;
//   subtitles: any;
// }

interface NavItemsProps{
  icon?: any;
  children?: any;
}

interface NavBarsProps{
  children?: any;
}

interface DropProps{
  ref?:  HTMLDivElement | null;
  current?: any;
  children?: any;
}

interface DropdownItemsProps{
  goToMenu?: any;
  children?: any;
  leftIcon?: any;
  rightIcon?: any;
}

const Dropdown: React.FC = () => {
  // const [openMenu, setOpenMenu] = useState<Boolean>(false)
  // const [openList, setOpenList] = useState<Boolean>(false)



  // const [active, setActive] = useState<Boolean>(false)
  // const dropdownRef = useRef<HTMLDivElement>(null);

  
    // function handleDropdownFocusOpen() {
    //   setOpenMenu(true)     
    //   setOpenList(true) 
    // }

    // function handleDropdownFocusNotOpen() {
    //   setOpenMenu(false) 
    //   setOpenList(true) 

    // }

    // function teste() {
    //   setOpenList(true)    
    // }

    

    

  // const handleDropdownFocus= () => {
  //   setOpen(true);
  //   //setActive(!state);
  // }

  

  // const handleOutsideDropdown = (e:any) => {
  //   if(open && !dropdownRef.current?.contains(e.target as Node)){
  //     setOpen(false)
  //   }
  // }

  // window.addEventListener("hover", handleOutsideDropdown)
  
  //ref={dropdownRef}

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<string | number>();
    const dropdownRef = useRef(null) as DropProps;

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el: any) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    function DropdownItems({children, goToMenu, leftIcon, rightIcon}: DropdownItemsProps) {
     return (
      <MenuItem href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-button">{rightIcon}</span>
      </MenuItem>
     ) 
    }

    return(
      // ref={dropdownRef}
      <Dropdowns style={{height: menuHeight}} > 
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
          <div className="menu">
            <DropdownItems>My Profile</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} rightIcon={<ChatTeardropDots />} goToMenu="settings">Settings</DropdownItems>
          </div>
        </CSSTransition>
        
        <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
          <div className="menu-secondary">
            <DropdownItems>My Profile</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
            <DropdownItems leftIcon={<ChatTeardropDots />} goToMenu="main">Settings</DropdownItems>
          </div>
        </CSSTransition>
      </Dropdowns>
    )
  }

  function NavBars({children}: NavBarsProps) {
    return (
      <NavBar className="navbar">
        <ul className='navbar-nav'>
          {children}
        </ul>
      </NavBar>
    )
  }

  function NavItems({icon, children}: NavItemsProps) {
    const [open, setOpen] = useState(false);

    return (
      <NavItem className="nav-item">
        <a href="#" className="icon-button" onMouseEnter={() => setOpen(!open)}>
          {icon}
        </a>

        {open && children}
      </NavItem>
    )
  }

  return (
    // <Container >
    //   <Button 
    //     onMouseEnter={() => handleDropdownFocusOpen()} 
        // onMouseLeave={() => handleDropdownFocusNotOpen()}
    //     type='button'>{title}</Button>
    //   { openMenu &&
    //     <List onMouseLeave={() => teste()}>
    //       {  subtitles}
    //     </List>
    //   }
    // </Container>
    <NavBars>
      <NavItems icon={<ChatTeardropDots />}/>
      <NavItems icon={<ChatTeardropDots />}/>
      <NavItems icon={<ChatTeardropDots />}/>
      <NavItems icon={<ChatTeardropDots />}>
        <DropdownMenu />
      </NavItems>
    </NavBars>
  );
}

export default Dropdown;