
import { Button, Input, useColorMode } from '@chakra-ui/react';
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

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <HeaderPortal>
          {/* <LogoPortal> */}
          <Link to="/dashboard">
            <FaCloud style={{ color: '#2EC5CE', marginLeft: '1.2rem' }} size={54} />
          </Link>
          <FaCloud style={{ color: '#c1f7fa', marginLeft: '-3.0rem', paddingTop: '0.4rem' }} size={52} />

          <div className="wrapper">
            <DropdownMenu />
            <Button onClick={toggleColorMode} mt={1.5} bg={'#8C30F5'}>
              {colorMode === 'light' ? '☀' : '☾'}
            </Button>
            {/* <Toggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          </div>

          <Avatar />

          <PortalStyles />
        </HeaderPortal>
      </Container>
    </ThemeProvider>

  );
}

export default Header;
