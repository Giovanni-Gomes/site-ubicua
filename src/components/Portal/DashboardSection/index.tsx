import React from 'react'
import { Container, Title } from './styles'

interface DashboardSectionProps {
  element: any
  className?: string
  title?: JSX.Element
}

const DashboardSection: React.FC<DashboardSectionProps> = ({
  element,
  className,
  title
}) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      {element}
    </Container>
  )
}

export default DashboardSection
