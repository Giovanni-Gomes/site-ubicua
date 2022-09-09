import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../../components/hooks/provider/toast'
import api from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { ButtonAlertClose, ButtonDelete, Container, Footer } from './styles'

interface AlertDeleteProps {
  id: string
  actualSectionName: string
}

const AlertDelete: React.FC<AlertDeleteProps> = ({ id, actualSectionName }) => {
  const { addToast } = useToast()

  switch (window.location.pathname) {
    case '/list-section-one':
      var section = 'sectionOne'
      break;
    case '/list-section-two':
      var section = 'sectionTwo'
      break;
    case '/list-section-three':
      var section = 'sectionThree'
      break;
    case '/list-section-four':
      var section = 'sectionFour'
      break;
    case '/list-section-five':
      var section = 'sectionFive'
      break;
  }


  const removeSection = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/${section}/delete/${id}`)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`${section}`)
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
