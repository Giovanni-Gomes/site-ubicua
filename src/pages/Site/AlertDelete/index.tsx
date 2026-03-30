import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '../../../components/hooks/provider/toast'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { ButtonAlertClose, ButtonDelete, Container, Footer } from './styles'

interface AlertDeleteProps {
  id: string
  actualSectionName: string
}

const sectionByListPath: Record<string, string> = {
  '/list-section-one': 'sectionOne',
  '/list-section-two': 'sectionTwo',
  '/list-section-three': 'sectionThree',
  '/list-section-four': 'sectionFour',
  '/list-section-five': 'sectionFive',
}

const AlertDelete: React.FC<AlertDeleteProps> = ({ id, actualSectionName }) => {
  const { addToast } = useToast()
  const section = sectionByListPath[window.location.pathname]


  const removeSection = useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete(`/v1/${section}/delete/${id}`)
      return response.data
    },
    onSuccess: () => {
      if (section) {
        queryClient.invalidateQueries({ queryKey: [section] })
      }
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
      await removeSection.mutateAsync(id)

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
      <span>{actualSectionName}</span>
      <Footer>
        <ButtonDelete onClick={() => handleRemoveTag(String(id))}><FaTrash /> Excluir</ButtonDelete>
        <ButtonAlertClose>Cancelar</ButtonAlertClose>
      </Footer>
    </Container>
  )
}

export default AlertDelete
