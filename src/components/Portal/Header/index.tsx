import { Button, Flex, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Avatar from '../Avatar';
import DropdownMenu from '../DropdownMenu';

import { Container, HeaderPortal } from './styles';
import LogoPortal from '../LogoPortal';

import { primaryTheme } from '../../../styles/themes/light';
import { secondaryTheme } from '../../../styles/themes/dark';
import useDarkMode from '../../hooks/useDarkmode';
import Toggle from '../../Shared/Toggle';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

  const { colorMode, toggleColorMode } = useColorMode(); //toggleColorMode

  //toggleTheme = toggleColorMode;
  console.log("header", toggleTheme);
  console.log("colorMode", colorMode);


  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? secondaryTheme : primaryTheme);
  // };

  //defaultTheme : darkTheme colorMode === 'light' ? primaryTheme : secondaryTheme
  //const defaultTheme = colorMode === 'light' ? primaryTheme : secondaryTheme
  return (
    // <ThemeProvider theme={defaultTheme}>

    <Container>
      <HeaderPortal>

        <LogoPortal />

        <Flex justify='space-between' w='100%' ml='30px' >
          <DropdownMenu />
          <Toggle setDarkMode={toggleColorMode} darkMode={colorMode} />
          <Button onClick={toggleTheme} w='0%' mt={2.5} bg={'transparent'} borderRadius={'50%'}>
            {colorMode === 'light' ? '☀' : '☾'}
          </Button>
          {/* <Button onClick={toggleColorMode} w='0%' mt={2.5} bg={'transparent'} borderRadius={'50%'}>
            {colorMode === 'light' ? '☀' : '☾'}
          </Button> */}
        </Flex>
        <Avatar />


      </HeaderPortal>
    </Container>
    // </ThemeProvider>

  );
}

export default Header;
