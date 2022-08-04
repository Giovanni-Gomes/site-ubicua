import React from 'react'
import { TableCustom } from '../Table/styles'

import { Container, Title, Subtitle, CardContent } from './styles'

interface CardProps {
  variant?: string // 'blue' | 'beige' | 'white' | 'black' | 'transparent'
  title: string
  subtitle?: string
  children?: JSX.Element
}

const CardProject: React.FC<CardProps> = ({
  variant,
  title,
  subtitle,
  children,
}) => {

  return (
    <Container className={variant}>
      <div>
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </div>
      <CardContent>
        {children}
      </CardContent>
    </Container>
  )
}

export default CardProject
