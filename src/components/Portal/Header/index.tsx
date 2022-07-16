
import { Button, Flex, Input, useColorMode } from '@chakra-ui/react';
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

import { Container, HeaderPortal, LogoImg } from './styles';
import LogoPortal from '../LogoPortal';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <HeaderPortal>
          {/* <LogoPortal> */}
          <LogoPortal />

          <Flex justify='space-between' w='100%' ml='30px'>
            <DropdownMenu />
            <Button onClick={toggleColorMode} mt={1.5} bg={'#8C30F5'}>
              {colorMode === 'light' ? '☀' : '☾'}
            </Button>
            {/* <Toggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          </Flex>

          <Avatar />

          <PortalStyles />
        </HeaderPortal>
      </Container>
    </ThemeProvider>

  );
}

export default Header;
