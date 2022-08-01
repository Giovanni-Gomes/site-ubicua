import React, { useState, useEffect } from 'react'
import { Container } from '../SideMenu/styles'

const scrollThreshold = 300

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined
  }
}

interface SideMenuProps {
  children: any
}

const SideMenu: React.FC<SideMenuProps> = ({ children }: any) => {
  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    isActive ? '' : '',
    scrollY <= scrollThreshold && scrollY >= 100 ? '' : '',

    // isActive ? 'open' : '',
    // scrollY <= scrollThreshold && scrollY >= 100 ? 'scrollOpen' : '',
  ]

  const className = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive((prev) => !prev)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return <Container className={className}>{children}</Container>
}

export default SideMenu
