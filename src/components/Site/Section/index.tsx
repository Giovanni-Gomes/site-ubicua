import React from 'react'
import { FaMeteor, FaRegBuilding } from 'react-icons/fa'
import sectionItems from '../../../data/sectionItems'
import CarouselNew from '../CarouselNew'

import Header from '../Header'
import { Container, Wrapper } from './styles' /* Background */

interface Props {
  anchor?: 'home' | 'sobre' | 'depoimento' | 'contato' | 'apps' | 'footer'
  variant: 'blue' | 'beige' | 'white' | 'black'
  sectionTitle: string
  description: string
  element?: any
}

export const items = (
  <Wrapper>
    {sectionItems.map((itm) => (
      <div key={itm.title}>
        <img src={itm.icon} />
        <div>
          <h3>{itm.title}</h3>
          <p>{itm.description}</p>
        </div>
      </div>
    ))}
  </Wrapper>
)

const Section: React.FC<Props> = ({
  anchor,
  variant,
  sectionTitle,
  description,
  element,
}) => {
  return (
    <Container className={variant} id={anchor}>
      <Header />
      <CarouselNew />
    </Container>
  )
}

export default Section
