import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../Header";
import { Background, Container, Content } from "./styles";

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  sectionTitle: string;
  description: string;
  element?: any;
}

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