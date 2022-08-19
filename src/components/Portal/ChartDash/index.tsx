import React from 'react'
import Chart from 'react-google-charts'
import { Translator } from '../I18n/Translator'
import { Container } from './styles'

interface ChartDashProps {
  graph: any
}

const ChartDash: React.FC<ChartDashProps> = ({ graph }) => {
  return (
    <Container>
      <p><Translator path="home.chartDashTitle" /></p>

      <Chart chartType="PieChart" data={graph} width="100%" height="100%" />
    </Container>
  )
}

export default ChartDash
