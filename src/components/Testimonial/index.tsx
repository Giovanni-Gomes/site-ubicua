import React from 'react';

import { Author, Container, Content, FeedbackTestimonial, LogoTestimonial, QuoteMark, TestimonialOne, TestimonialThree, TestimonialTwo } from './styles';

import hubSpot from '/assets/testimonial/hubspot.png';
import google from '/assets/testimonial/google.png';
import microsoft from '/assets/testimonial/microsoft.png';

const Testimonial: React.FC = () => {
  return (
    <Container>

      {/* <h2>Real Stories</h2> */}
      <QuoteMark />
        <TestimonialOne>
          <LogoTestimonial>
            <img src={hubSpot} />
          </LogoTestimonial>
          <Content>
            <FeedbackTestimonial>
              To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
              <Author>
                Cliente:  Xarlys Luiz de S.
              </Author>
            </FeedbackTestimonial>
          </Content>
        </TestimonialOne>

        <TestimonialTwo>
          <LogoTestimonial>
            <img src={google} />
          </LogoTestimonial>
          <Content>
            <FeedbackTestimonial>
              It’s so flexible, well organised and easily editable.
              It’s so flexible, well organised and easily editable.
              It’s so flexible, well organised and easily editable.
              It’s so flexible, well organised and easily editable.
              It’s so flexible, well organised and easily editable.
              <Author>
                Cliente:  Xarlys Luiz de S.
              </Author>
            </FeedbackTestimonial>
          </Content>
        </TestimonialTwo>

        <TestimonialThree>
          <LogoTestimonial>
            <img src={microsoft} />
          </LogoTestimonial>
          <Content>
            <FeedbackTestimonial>
              To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
              To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
              To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing.

              <Author>
                Cliente:  Xarlys Luiz de S.
              </Author>
            </FeedbackTestimonial>
          </Content>
        </TestimonialThree>

    </Container>
  );
}

export default Testimonial;