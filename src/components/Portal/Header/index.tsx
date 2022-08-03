import {
  Button,
  Flex,
  Input,
  useColorMode,
  useColorModeValue,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { padding, size } from 'polished'
import React, { useState } from 'react'
import { FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import PortalStyles from '../../../styles/PortalStyles'
import useDarkMode from '../../hooks/useDarkmode'
import Toggle from '../../Shared/Toggle'
import Avatar from '../Avatar'
import DropdownMenu from '../DropdownMenu'

import { Container, HeaderPortal } from './styles'
import LogoPortal from '../LogoPortal'
import { lightTheme } from '../../../styles/theme/light'
import { darkTheme } from '../../../styles/theme/dark'

const Header: React.FC = () => {
  // const [darkMode, setDarkMode] = useDarkMode()
  // const { colorMode, toggleColorMode } = useColorMode()
  // const bg = useColorModeValue('red.500', 'red.200')
  const [darkMode, setDarkMode] = useDarkMode()
  // const [theme, setTheme] = useState(lightTheme)
  // const toggleTheme = () => {
  //   setDarkMode(darkMode ? darkTheme : lightTheme)
  // }
  // colorMode === 'light' ? lightTheme : darkTheme
  // bg={'transparent'}
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <HeaderPortal>
          <LogoPortal />

          <Flex justify="space-between" w="100%" ml="30px">
            <DropdownMenu />
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
            {/* <button onClick={() => setDarkMode}>{darkMode ? '☀' : '☾'}</button> */}
          </Flex>
          <Avatar />
          <PortalStyles />
        </HeaderPortal>
      </Container>
    </ThemeProvider>
  )
}

export default Header
