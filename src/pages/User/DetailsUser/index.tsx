import { X } from 'phosphor-react'
import React from 'react'
import { Close, Container, Content, Detail, Span, Wrapper } from './styles'
import { useByIdUser } from '../useUsers'

interface UserDetailsProps {
  id: string
}

const DetailsUser: React.FC<UserDetailsProps> = ({ id }) => {
  const { data } = useByIdUser(id)

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
            <Span>Name:</Span>
            <p>{data?.name ? data?.name : '---'}</p>
          </Detail>
          <Detail>
            <Span>Email:</Span>
            <p>{data?.email ? data?.email : '---'}</p>
          </Detail>
          <Detail>
            <Span>Password</Span>
            <p>{data?.password ? data?.password : '---'}</p>
          </Detail>
          <Detail>
            <Span>Type User:</Span>
            <p>{data?.type_user_id ? data?.type_user_id : '---'}</p>
          </Detail>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default DetailsUser
