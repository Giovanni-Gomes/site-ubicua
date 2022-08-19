import React from 'react'
import { Translator } from '../I18n/Translator'
import { Container } from './style'

const WelcomeDash: React.FC = () => {
  return (
    <Container>
      <p><Translator path="home.DashTitle" /></p>
    </Container>
  )
}

export default WelcomeDash
