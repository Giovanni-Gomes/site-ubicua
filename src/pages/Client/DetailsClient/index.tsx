import { X } from 'phosphor-react'
import React from 'react'
import { Close, Container, Content, Detail, Span, Wrapper } from './styles'
import { useClient } from '../useClients'

interface ClientDetailsProps {
  id: string
}

const DetailsClient: React.FC<ClientDetailsProps> = ({ id }) => {
  const { data } = useClient(id)

  return (
    <Container>
      <h1>{data?.name_company}</h1>
      <Close>
        <X weight="bold" size={24} />
      </Close>
      <Content>
        <Wrapper>
          <Detail>
            <Span>Name Company:</Span>
            <p>{data?.name_company ? data?.name_company : '---'}</p>
          </Detail>
          <Detail>
            <Span>Name Contact:</Span>
            <p>{data?.name_contact ? data?.name_contact : '---'}</p>
          </Detail>
          <Detail>
            <Span>Segmentation:</Span>
            <p>{data?.segmentation ? data?.segmentation : '---'}</p>
          </Detail>
          <Detail>
            <Span>Email:</Span>
            <p>{data?.email ? data?.email : '---'}</p>
          </Detail>
        </Wrapper>
        <Wrapper>

          <Detail>
            <Span>Number Phone:</Span>
            <p>{data?.phone ? data?.phone : '---'}</p>
          </Detail>
          <Detail>
            <Span>Number Whats:</Span>
            <p>{data?.whats ? data?.whats : '---'}</p>
          </Detail>
          <Detail>
            <Span>Type Client:</Span>
            <p>{data?.type_client ? data?.type_client : '---'}</p>
          </Detail>
          <Detail>
            <Span>User Owner:</Span>
            <p>{data?.user.name ? data?.user.name : '---'}</p>
          </Detail>
        </Wrapper>
      </Content>
      <div>
        <Span>Description:</Span>
        <p>{data?.description ? data?.description : '---'}</p>
      </div>
    </Container>
  )
}

export default DetailsClient
