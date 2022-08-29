import { X } from 'phosphor-react'
import React from 'react'
import { useFeedback } from '../useFeedback'
import { Close, Container, Content, Detail, Span, Wrapper } from './styles'

interface ProjectDetailsProps {
  id: string
}

const DetailsProject: React.FC<ProjectDetailsProps> = ({ id }) => {
  const { data } = useFeedback(id)

  return (
    <Container>
      <Close>
        <X weight="bold" size={24} />
      </Close>
    </Container>
  )
}

export default DetailsProject
