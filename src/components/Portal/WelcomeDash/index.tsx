import React from 'react'

import { Translator } from '../I18n/Translator'

import Chart from 'react-google-charts'

import { Container } from './style'

interface WelcomeDashProps {
  data: {}[]
}

const WelcomeDash: React.FC<WelcomeDashProps> = ({ data }) => {
  return (
    <Container>

      <p><Translator path="home.DashTitle" /></p>
      <Chart chartType='Bar' data={data} width="100%" height="100%" />

    </Container>
  )
}

export default WelcomeDash
