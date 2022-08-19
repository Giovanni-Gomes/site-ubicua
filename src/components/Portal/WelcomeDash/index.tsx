import React from 'react'
import Chart from 'react-google-charts'
import { Container } from './style'

interface WelcomeDashProps {
  data: {}[]
}

const WelcomeDash: React.FC<WelcomeDashProps> = ({ data }) => {
  return (
    <Container>
      <p>Welcome to your dashboard</p>
      <Chart chartType='Bar' data={data}></Chart>
    </Container>
  )
}

export default WelcomeDash
