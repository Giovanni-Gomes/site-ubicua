import React from "react";
import sectionItems from "../../../data/sectionItems";

import Header from "../Header";
import { Background, Container, Content, Wrapper } from "./styles";

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  sectionTitle: string;
  description: string;
  element?: any;
}

export const items = <Wrapper>
  {sectionItems.map(itm => (
    <div key={itm.title}>
      <img src={itm.icon} />
      <div>
        <h3>{itm.title}</h3>
        <p>{itm.description}</p>
      </div>
    </div>
  ))}
</Wrapper>

const Section: React.FC<Props> = ({ variant, sectionTitle, description, element }) => {
  return (
    <Container className={variant}>
      <Header />
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
