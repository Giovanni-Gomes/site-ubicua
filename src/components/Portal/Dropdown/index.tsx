import { ChatTeardropDots } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { dropdownItems } from '../../../data/dropdownItems';

import { Dropdowns, MenuItem, NavItem, NavBar } from './styles';



interface NavItemsProps {
  icon?: any;
  children?: any;
  title?: string;
}

interface NavBarsProps {
  children: any;
}

interface DropdownItemsProps {
  goToMenu?: any;
  children?: any;
  leftIcon?: any;
  rightIcon?: any;
}

interface DropdownMenuProps {
  subtitle: Array<any>;
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





  //ref={dropdownRef}

  function DropdownMenu({ subtitle }: DropdownMenuProps) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<string | number>('10rem');
    const dropdownRef = useRef(null) as any;

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el: any) {
      const height = el.offsetHeight;
      setMenuHeight(height + 20);
    }

    function DropdownItems({ children, goToMenu, leftIcon, rightIcon }: DropdownItemsProps) {
      return (
        <MenuItem href="/registrar" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
          <span className="icon-button">{leftIcon}</span>
          {children}
          <span className="icon-button">{rightIcon}</span>
        </MenuItem>
      )
    }

    return (
      <Dropdowns ref={dropdownRef} style={{ height: menuHeight }}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
          <div className="menu">
            {subtitle.map((sb, key) => (
              <DropdownItems key={key}>{sb.name}</DropdownItems>
            ))}
          </div>
        </CSSTransition>

        {/* <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
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
        </CSSTransition> */}
      </Dropdowns>
    )
  }

  function NavBars({ children }: NavBarsProps) {
    return (
      <NavBar >
        <ul className='navbar-nav'>
          <a href="#">{children}</a>
          {/* <Link to="/">{children}</Link> */}
        </ul>
      </NavBar>
    )
  }

  function NavItems({ icon, children, title }: NavItemsProps) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null) as any;
    const handleOutsideDropdown = (e: any) => {
      if (open && !dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener("click", handleOutsideDropdown)
    return (
      <NavItem ref={dropdownRef} className="nav-item">
        <a className="icon-button" onClick={() => setOpen(!open)}>
          {icon}
          <span>{title}</span>
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
      {dropdownItems.map((di, key) => (
        <NavItems key={key} icon={<ChatTeardropDots />} title={di.title}>
          <DropdownMenu subtitle={di.subtitles} />
        </NavItems>
      ))}
      {/* <NavItems icon={<ChatTeardropDots />} title="Operações">
        <DropdownMenu/>
      </NavItems>
      <NavItems icon={<ChatTeardropDots />} title="Desenvolvimento">
        <DropdownMenu />
      </NavItems>
      <NavItems icon={<ChatTeardropDots />} title="Contrato">
        <DropdownMenu />
      </NavItems> */}
    </NavBars>
  );
}

export default Dropdown;
