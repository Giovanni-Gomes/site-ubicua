import { Door } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Title, Subtitle, CardContent } from './styles'

interface CardProps {
  variant?: 'project' | 'contract' | 'users' | 'feedbacks'// 'blue' | 'beige' | 'white' | 'black' | 'transparent'
  title: JSX.Element
  subtitle?: string
  goToPage?: string
  children?: JSX.Element
}

const CardTable: React.FC<CardProps> = ({
  variant,
  title,
  subtitle,
  children,
  goToPage
}) => {
  return (
    <Container className={variant}>
      <div>
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </div>
      {goToPage && <Link to={`/${goToPage}`}><Door size={30} /></Link>}
      <CardContent>{children}</CardContent>
    </Container>
  )
}

export default CardTable
