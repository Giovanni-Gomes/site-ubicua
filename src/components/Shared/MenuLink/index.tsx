import React from 'react';
import { A } from './styles';

interface MenuLinkProps {
  title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({title}) => {
  return <A href={'#' + title.toLowerCase()}>{title.toUpperCase()}</A>;
}

export default MenuLink;