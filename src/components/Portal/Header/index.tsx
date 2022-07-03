
import { size } from 'polished';
import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import PortalStyles from '../../../styles/PortalStyles';
import useDarkMode from '../../hooks/useDarkmode';
import Toggle from '../../Shared/Toggle';
import Avatar from '../Avatar';
import DropdownMenu from '../DropdownMenu';
import { darkTheme, lightTheme } from '../Theme';

import { Container, HeaderPortal, LogoImg, LogoPortal } from './styles';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <HeaderPortal>
          <LogoPortal>
            <FaCloud style={{ color: '#2EC5CE', marginLeft: '1.2rem' }} size={54} />
            {/* <LogoImg /> */}
          </LogoPortal>
          <DropdownMenu />
          <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />

        </HeaderPortal>

        <Avatar />

        <PortalStyles />

      </Container>
    </ThemeProvider>

  );
}

export default Header;
