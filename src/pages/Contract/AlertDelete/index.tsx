import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '../../../components/hooks/provider/toast'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { ButtonAlertClose, ButtonDelete, Container, Footer } from './styles'

interface AlertDeleteProps {
  id: string
  actualContractName: string
}

const AlertDeleteContract: React.FC<AlertDeleteProps> = ({
  id,
  actualContractName,
}) => {
  const { addToast } = useToast()

  const removeContract = useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete(`/v1/contract/delete/${id}`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contracts'] })
    },
    onError: () => {
      addToast({
        type: 'error',
        title: 'Erro ao deletar registro',
        description: 'Ocorreu um erro ao deletar registro, tente novamente',
      })
    },
  })

  async function handleRemoveTag(id: string) {
    try {
      await removeContract.mutateAsync(id)

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
      <span>{actualContractName}</span>
      <Footer>
        <ButtonDelete onClick={() => handleRemoveTag(String(id))}><FaTrash /> Excluir</ButtonDelete>
        <ButtonAlertClose>Cancelar</ButtonAlertClose>
      </Footer>
    </Container>
  )
}

export default AlertDeleteContract
