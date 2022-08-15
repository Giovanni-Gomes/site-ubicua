import { AxiosError } from 'axios'
import React from 'react'
import { useMutation } from 'react-query'
import { useToast } from '../../../components/hooks/provider/toast'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { Button, ButtonAlertClose, Container, Footer } from './styles'

interface AlertDeleteProps {
  id: string
  actualUserName: string
}

const AlertDeleteUser: React.FC<AlertDeleteProps> = ({
  id,
  actualUserName,
}) => {
  const { addToast } = useToast()

  const removeUser = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/user/delete/${id}`)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
      onError: (error: AxiosError) => {
        addToast({
          type: 'error',
          title: 'Erro ao deletar registro',
          description: 'Ocorreu um erro ao deletar registro, tente novamente',
        })
      },
    },
  )

  async function handleRemoveTag(id: string) {
    try {
      await removeUser.mutateAsync(id)

      addToast({
        type: 'success',
        title: 'Deletado com Sucesso!',
      })
    } catch {
      console.log('Error happened')
    }
  }

  return (
    <Container>
      <p>Tem certeza que deseja excluir este registro?</p>
      <span>{actualUserName}</span>
      <Footer>
        <Button onClick={() => handleRemoveTag(String(id))}>Excluir</Button>
        <ButtonAlertClose>Cancelar</ButtonAlertClose>
      </Footer>
    </Container>
  )
}

export default AlertDeleteUser
