import React from 'react'
import { BRAND_NAME } from '../../../config/branding'
import { Container, Navigation, BrandLogo, Form } from './styles'

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <BrandLogo />
          <span>{BRAND_NAME}</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  )
}

export default MenuForm
