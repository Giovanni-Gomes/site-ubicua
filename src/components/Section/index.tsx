import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import MenuLink from "../MenuLink";
import { Background, Container, Content, Header, HeaderWrapper, MenuNav, UbicuaLogo } from "./styles";
import { FaCloud } from 'react-icons/fa'


interface IHeaderProps {
  id: string;
  title: string;
  logo: HTMLElement;
}


interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  sectionTitle: string;
  description: string;
  element?: any;
}

const Section: React.FC<Props> = ({ variant, sectionTitle, description, element }) => {
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
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            {headerLogo.map(hl => (<>
              {!hl.logo ? <FaCloud color={"var(--icon-color)"} /> : hl.logo}
              <span>{hl.title}</span> </>
            ))}
          </h1>
          <MenuNav className="link">
            {headerMenu.map(hm => (
              <MenuLink title={hm.title} />
            ))}
          </MenuNav>

          <div className="button">
            <Link to="/login">{(buttonVariant === 0) ? 'Entrar' : 'Login'}</Link>
            <Link to="/registrar">{(buttonVariant === 0) ? 'Cadastrar' : 'Registrar'}</Link>
            {/* <button onClick={handleToggle}>{ (buttonVariant === 0) ? 'Entrar' : 'SignIn'}</button> */}
            {/* <button onClick={handleToggle}>{(buttonVariant === 0) ? 'Registrar-se' : 'SignUp'}</button> */}
          </div>
        </Header>
      </HeaderWrapper>
      <Content>
        <header>
          <Background />
          <h2>{sectionTitle}</h2>
          <p>{description}</p>
        </header>
        {(element === null) ? null : element}
      </Content>
    </Container>
  )
}

export default Section;