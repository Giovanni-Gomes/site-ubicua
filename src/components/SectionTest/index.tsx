import React from 'react';
import Customers from '../Customers';
import Header from '../Header';
import Testimonial from '../Testimonial';

import { Container, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  sectionTitle: string;
  description: string;
  element?: any;
}

const SectionTest: React.FC<Props> = ({ variant, sectionTitle, description}) => {
  return (
    <Container className={variant}>
      <Header />
      <Customers />
      <Content>
        <header>
          <h2>{sectionTitle}</h2>
          <p>{description}</p>
        </header>
        <Testimonial />
      </Content>
    </Container>
  );
}

export default SectionTest;