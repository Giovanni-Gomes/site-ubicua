import React from 'react'
import { Container } from './styles'

interface BoxProps {
  title?: string
  children: React.ReactNode // children?: JSX.Element | any;
}

const BoxForms: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <Container>
      <p>
        {title}
      </p>
      {children}
    </Container>
  )
}

export default BoxForms
