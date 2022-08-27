import { AxiosError } from 'axios'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useToast } from '../../../components/hooks/provider/toast'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { ButtonAlertClose, ButtonDelete, Container, Footer } from './styles'

interface AlertDeleteSprintProps {
  id: string
  actualSprintName: string
}

const AlertDeleteSprint: React.FC<AlertDeleteSprintProps> = ({ id, actualSprintName }) => {
  const { addToast } = useToast()

  const removeSprint = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/sprint/delete/${id}`)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('sprints')
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
      await removeSprint.mutateAsync(id)

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
      <span>{actualSprintName}</span>
      <Footer>
        <ButtonDelete onClick={() => handleRemoveTag(String(id))}><FaTrash /> Excluir</ButtonDelete>
        <ButtonAlertClose>Cancelar</ButtonAlertClose>
      </Footer>
    </Container>
  )
}

export default AlertDeleteSprint
