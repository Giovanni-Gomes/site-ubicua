import React from 'react'
import { FaMeteor, FaRegBuilding } from 'react-icons/fa'
import sectionItems from '../../../data/sectionItems'
import CarouselNew from '../CarouselNew'

import Header from '../Header'
import { Container, Content, Wrapper } from './styles' /* Background */

interface Props {
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
  variant,
  sectionTitle,
  description,
  element,
}) => {
  return (
    <Container className={variant}>
      <Header />
      <CarouselNew />

      <Content>
        <header>
          {/* <Background /> {sectionTitle} */}
          <h2>Ubicua Cloud Soluções Tecnologicas</h2>
          <p>
            <button>
              <FaRegBuilding size={16} /> Saiba mais
            </button>
          </p>
          {/* {description} */}
        </header>
        {element === null ? null : element}
      </Content>
    </Container>
  )
}

export default Section
