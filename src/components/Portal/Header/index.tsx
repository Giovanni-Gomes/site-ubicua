
import { Button, Flex, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { padding, size } from 'polished';
import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PortalStyles from '../../../styles/PortalStyles';
import useDarkMode from '../../hooks/useDarkmode';
import Toggle from '../../Shared/Toggle';
import Avatar from '../Avatar';
import DropdownMenu from '../DropdownMenu';
import { darkTheme, lightTheme } from '../Theme';
import { Switch } from '@chakra-ui/react';

import { Container, HeaderPortal } from './styles';
import LogoPortal from '../LogoPortal';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';



const Header: React.FC = () => {

  const [darkMode, setDarkMode] = useDarkMode();
  const { colorMode, toggleColorMode } = useColorMode();
  //const bg = useColorModeValue('red.500', 'red.200')

  return (
    <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>

      <Container>
        <HeaderPortal>

          <LogoPortal />

          <Flex justify='space-between' w='100%' ml='30px' >
            <DropdownMenu />
            <Button onClick={toggleColorMode} w='0%' mt={2.5} bg={'transparent'} borderRadius={'50%'}>
              {colorMode === 'light' ? '☀' : '☾'}
            </Button>
          </Flex>
          <Avatar />


        </HeaderPortal>
      </Container>
    </ThemeProvider>

  );
}

export default Header;
