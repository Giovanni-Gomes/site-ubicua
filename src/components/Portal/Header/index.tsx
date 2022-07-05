
import { size } from 'polished';
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

import { Container, HeaderPortal, LogoImg } from './styles';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <HeaderPortal>
          {/* <LogoPortal> */}
          <Link to="/dashboard">
            <FaCloud style={{ color: '#2EC5CE', marginLeft: '1.2rem' }} size={54} />
          </Link>

          {/* <LogoImg /> */}
          {/* </LogoPortal> */}
          <div className="wrapper">
            <DropdownMenu />
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <Avatar />

          <PortalStyles />
        </HeaderPortal>



      </Container>
    </ThemeProvider>

  );
}

export default Header;
