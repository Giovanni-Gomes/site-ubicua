import { AxiosError } from 'axios'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useToast } from '../../../components/hooks/provider/toast'
import Button from '../../../components/Shared/Button'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { ButtonAlertClose, Container, ButtonDelete, Footer } from './styles'

interface AlertDeleteClientProps {
  id: string
  actualClientName: string
}

const AlertDeleteClient: React.FC<AlertDeleteClientProps> = ({
  id,
  actualClientName,
}) => {
  const { addToast } = useToast()

  const removeClient = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/client/delete/${id}`)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('clients')
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
      await removeClient.mutateAsync(id)

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
      <span>{actualClientName}</span>
      <Footer>
        <ButtonDelete onClick={() => handleRemoveTag(String(id))}><FaTrash /> Excluir</ButtonDelete>
        <ButtonAlertClose>Cancelar</ButtonAlertClose>
      </Footer>
    </Container>
  )
}

export default AlertDeleteClient
