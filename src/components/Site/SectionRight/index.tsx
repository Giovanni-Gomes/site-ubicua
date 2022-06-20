import React from "react";
import Header from "../Header";
import { Container, Content } from "./styles";

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  sectionTitle: string;
  description: string;
  element?: any;
}

const SectionRight: React.FC<Props> = ({ variant, sectionTitle, description, element }) => {
  return (
    <Container className={variant}>
      <Header />
      <Content>
        {(element === null) ? null : element}
        <header>
          <h2>{sectionTitle}</h2>
          <p>{description}</p>
        </header>
      </Content>
    </Container>
  )
}

export default SectionRight;