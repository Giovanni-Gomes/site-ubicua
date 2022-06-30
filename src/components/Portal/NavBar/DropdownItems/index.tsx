import React, { useState } from 'react';

import { Container } from './styles';

interface DropdownItemsProps {
  goToMenu?: any;
  children?: any;
  leftIcon?: any;
  rightIcon?: any;
  href?: string;
}

const DropdownItems: React.FC<DropdownItemsProps> = ({ goToMenu, children, leftIcon, rightIcon, href }) => {
  const [activeMenu, setActiveMenu] = useState('main');
  return (
    <Container href={href} className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-button">{rightIcon}</span>
    </Container>
  )
}

export default DropdownItems;
