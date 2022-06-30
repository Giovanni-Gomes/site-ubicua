import React, { useRef, useState } from 'react';

import { Container } from './styles';

interface NavItemsProps {
  icon?: any;
  children?: any;
  title?: string;
}

const NavItems: React.FC<NavItemsProps> = ({ icon, children, title }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null) as any;
  const handleOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }
  window.addEventListener("click", handleOutsideDropdown)
  return (
    <Container ref={dropdownRef} className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
        <span>{title}</span>
      </a>

      {open && children}
    </Container>
  )
}

export default NavItems;
