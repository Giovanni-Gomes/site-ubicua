import React from 'react'
import { Container } from './styles'

interface DashboardSectionProps {
  element: any
  className?: string
}

const DashboardSection: React.FC<DashboardSectionProps> = ({
  element,
  className,
}) => {
  return <Container className={className}>{element}</Container>
}

export default DashboardSection
