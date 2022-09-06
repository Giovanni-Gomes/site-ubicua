import React from 'react'
import { ContainerA } from './styles'

interface MenuLinkProps {
  title: string
  link: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ title, link }) => {
  return (
    <ContainerA href={'#' + link.toLowerCase()}>
      {title.toUpperCase()}
    </ContainerA>
  )
}

export default MenuLink
