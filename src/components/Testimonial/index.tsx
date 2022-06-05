import React from 'react';

import { Container, QuoteMark, TestimonialOne, TestimonialThree, TestimonialTwo } from './styles';

const Testimonial: React.FC = () => {
  return (
    <Container>

      {/* <h2>Real Stories</h2> */}
      <QuoteMark />
      <TestimonialOne>Testemunho um</TestimonialOne>
      <TestimonialTwo>Testemunho um</TestimonialTwo>
      <TestimonialThree>Testemunho um</TestimonialThree>
    </Container>
  );
}

export default Testimonial;