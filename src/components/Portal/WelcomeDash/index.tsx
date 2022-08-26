import React from 'react'

import { Translator } from '../I18n/Translator'

import Chart from 'react-google-charts'

import { Container } from './style'

interface WelcomeDashProps {
  data: {}[],
  options?: {}
}



const WelcomeDash: React.FC<WelcomeDashProps> = ({ data, options }) => {
  return (
    <Container>

      <p><Translator path="home.DashTitle" /></p>
      <Chart chartType='ComboChart' data={data} width="100%" height="100%" options={options} />

    </Container>
  )
}

export default WelcomeDash
