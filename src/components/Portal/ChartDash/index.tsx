import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import api from '../../../services/api'
import { Container } from './styles'

interface ChartDashProps {
  graph: any
}

const ChartDash: React.FC<ChartDashProps> = ({ graph }) => {

  return (
    <Container>
      <p style={{ color: 'black' }}>Chart Graph</p>

      <Chart
        chartType='PieChart'
        data={graph}
        width='100%'
        height='100%'
      />
    </Container>
  )
}

export default ChartDash
