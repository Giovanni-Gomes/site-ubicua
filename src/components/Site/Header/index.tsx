import React, { useEffect, useState } from 'react';
import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import MenuLink from '../../Shared/MenuLink';

import { Container, Content, MenuNav } from './styles';

interface IHeaderProps {
  id: string;
  title: string;
  logo: HTMLElement;
}

const Header: React.FC = () => {
  const buttonVariant = Math.round(Math.random());

  // function handleToggle() {
  //   if (window.toggleActiveMenu) window.toggleActiveMenu();
  // }

  const [headerLogo, setHeaderLogo] = useState<IHeaderProps[]>([]);
  const [headerMenu, setHeaderMenu] = useState<IHeaderProps[]>([]);

  useEffect(() => {
    async function fetchHeader() {
      const responseLogo = await api.get('v1/home');
      const responseMenu = await api.get('v1/menu');

      setHeaderLogo(responseLogo.data);
      setHeaderMenu(responseMenu.data);
    }

    fetchHeader();
  }, [])

  return (
    <Container>
      <Content>
        {headerLogo.map((hl, key) => (
          <h1 key={key}>
            <>
              {!hl.logo ? <FaCloud color={"var(--icon-color)"} /> : hl.logo}
              <span>{hl.title}</span>
            </>
          </h1>
        ))}
        <MenuNav className="link">
          {headerMenu.map((hm, key) => (
            <MenuLink key={key} title={hm.title} />
          ))}
        </MenuNav>

        <div className="button">
          <Link to="/login">{(buttonVariant === 0) ? 'Entrar' : 'Login'}</Link>
          <Link to="/registrar">{(buttonVariant === 0) ? 'Cadastrar' : 'Registrar'}</Link>
          {/* <button onClick={handleToggle}>{ (buttonVariant === 0) ? 'Entrar' : 'SignIn'}</button> */}
          {/* <button onClick={handleToggle}>{(buttonVariant === 0) ? 'Registrar-se' : 'SignUp'}</button> */}
        </div>
      </Content>
    </Container>
  );
}

export default Header;