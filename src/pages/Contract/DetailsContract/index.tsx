import { X } from 'phosphor-react'
import React from 'react'
import { Close, Container, Content, Detail, Span, Wrapper } from './styles'
import { useContract } from '../useContracts'

interface ContractDetailsProps {
  id: string
}

const DetailsContract: React.FC<ContractDetailsProps> = ({ id }) => {
  const { data } = useContract(id)

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
            <p>{data?.phase_contract ? data?.phase_contract : '---'}</p>
          </Detail>
        </Wrapper>
        <Wrapper>
          {/* <Detail>
            <Span>Progresso:</Span>
            <p>{data?.progress ? data?.progress : '---'}</p>
          </Detail>
          <Detail>
            <Span>Custo Real:</Span>
            <p>{data?.real_cost ? data?.real_cost : '---'}</p>
          </Detail> */}
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
      <div>
        <Span>Descrição:</Span>
        <p>{data?.description ? data?.description : '---'}</p>
      </div>
    </Container>
  )
}

export default DetailsContract
