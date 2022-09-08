import React from 'react'
import Header from '../Header'
import { Container, Content } from './styles'

interface Props {
  anchor?: 'home' | 'sobre' | 'depoimento' | 'contato' | 'apps' | 'footer'
  variant: 'blue' | 'beige' | 'white' | 'black'
  sectionTitle: string
  description: string
  element?: any
}

const SectionRight: React.FC<Props> = ({
  anchor,
  variant,
  sectionTitle,
  description,
  element,
}) => {
  return (
    <Container className={variant} id={anchor}>
      <Header />
      <Content>
        {element === null ? null : element}
        <header>
          <h2>{sectionTitle}</h2>
          <p>{description}</p>
        </header>
      </Content>
    </Container>
  )
}

export default SectionRight
