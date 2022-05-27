import React from "react";
import { Link } from "react-router-dom";
import MenuLink from "../MenuLink";
import { Container, Content, Header, HeaderWrapper, MenuNav, UbicuaLogo } from "./styles";


interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
  element?: any;
}

const Section: React.FC<Props> = ({ variant, title, description, element }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <UbicuaLogo />
            <span>Ubicua Cloud</span>
          </h1>

          <MenuNav className="link">

            <MenuLink title="Soluções" />
            <MenuLink title="Sobre" />
            <MenuLink title="Contato" />

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
          <h2>{title}</h2>
          <p>{description}</p>
        </header>
        {(element === null) ? null : element}
      </Content>
    </Container>
  )
}

export default Section;