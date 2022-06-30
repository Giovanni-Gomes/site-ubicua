import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownItems from '../DropdownItems';
import { Container } from './styles';

interface DropdownProps {
  subtitle: Array<{ name: string, link?: any }>;
  //href: [{ link?: any }];
}

const Dropdown: React.FC<DropdownProps> = ({ subtitle }) => {
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

  return (
    <Container ref={dropdownRef} style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          {subtitle.map((sb, key) => (
            <DropdownItems href={sb.link} key={key}>{sb.name}</DropdownItems>
          ))}
        </div>
      </CSSTransition>
    </Container>
  )
}

export default Dropdown;
