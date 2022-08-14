import React from 'react'
import { ContainerA } from './styles'

interface MenuLinkProps {
  title: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ title }) => {
  return <ContainerA href={'#' + title.toLowerCase()}>{title.toUpperCase()}</ContainerA>
}

export default MenuLink
