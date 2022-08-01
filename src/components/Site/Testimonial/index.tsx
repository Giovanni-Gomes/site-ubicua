import React, { useEffect, useState } from 'react'

import {
  Author,
  Container,
  Content,
  FeedbackTestimonial,
  LogoTestimonial,
  QuoteMark,
  WrapperTestimonial,
  TestimonialThree,
  TestimonialTwo,
} from './styles'

// import hubSpot from '/assets/testimonial/hubspot.png';
// import google from '/assets/testimonial/google.png';
// import microsoft from '/assets/testimonial/microsoft.png';
import testimonial from '../../../data/testimonial'
import api from '../../../services/api'

interface ITestimonial {
  id: string
  title: string
  description: string
  icon: string
  author: string
}

const Testimonial: React.FC = () => {
  const [testimonial, setTestimonial] = useState<ITestimonial[]>([])

  useEffect(() => {
    async function fetchTestimonial() {
      const responseTestimonial = await api.get('v1/testimonial')

      setTestimonial(responseTestimonial.data)
    }

    fetchTestimonial()
  }, [])
  return (
    <Container>
      <QuoteMark />
      {testimonial.map((ts) => (
        <WrapperTestimonial key={ts.id}>
          <LogoTestimonial>
            <img src={ts.icon} />
            <h1>{ts.title}</h1>
          </LogoTestimonial>
          <Content>
            <FeedbackTestimonial>
              {ts.description}
              <Author>{ts.author}</Author>
            </FeedbackTestimonial>
          </Content>
        </WrapperTestimonial>
      ))}
    </Container>
  )
}

export default Testimonial
