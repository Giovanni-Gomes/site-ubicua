import { X } from 'phosphor-react'
import React from 'react'
import { Close, Container, Content, Detail, Span, Wrapper } from './styles'
import { useProject } from '../useProjects'

interface ProjectDetailsProps {
  id: string
}

const DetailsProject: React.FC<ProjectDetailsProps> = ({ id }) => {
  const { data } = useProject(id)

  return (
    <Container>
      <h1>{data?.name}</h1>
      <Close>
        <X weight="bold" size={24} />
      </Close>
      <Content>
        <Wrapper>
          <Detail>
            <Span>Ativo:</Span>
            <span>{data?.active ? data?.active : '---'}</span>
          </Detail>
          <Detail>
            <Span>Valor Negociado:</Span>
            <p>{data?.negotiated_value ? data?.negotiated_value : '---'}</p>
          </Detail>
          <Detail>
            <Span>Data de Início:</Span>
            <p>{data?.date_start ? data?.date_start : '---'}</p>
          </Detail>
          <Detail>
            <Span>Status:</Span>
            <p>{data?.status.name ? data?.status.name : '---'}</p>
          </Detail>
        </Wrapper>
        <Wrapper>
          <Detail>
            <Span>Progresso:</Span>
            <p>{data?.progress ? data?.progress : '---'}</p>
          </Detail>
          <Detail>
            <Span>Custo Real:</Span>
            <p>{data?.real_cost ? data?.real_cost : '---'}</p>
          </Detail>
          <Detail>
            <Span>Data de Finalização:</Span>
            <p>{data?.date_end ? data?.date_end : '---'}</p>
          </Detail>
          <Detail>
            <Span>Responsável:</Span>
            <p>{data?.user.name ? data?.user.name : '---'}</p>
          </Detail>
        </Wrapper>
      </Content>
      <div className='desc'>
        <Span>Descrição:</Span>
        <p>{data?.description ? data?.description : '---'}</p>
      </div>
    </Container>
  )
}

export default DetailsProject
