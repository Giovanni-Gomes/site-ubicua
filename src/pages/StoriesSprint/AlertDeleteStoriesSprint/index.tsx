import { AxiosError } from 'axios'
import React from 'react'
// import { FaTrash } from 'react-icons/fa'
// import { useMutation } from 'react-query'
// import { useToast } from '../../../components/hooks/provider/toast'
// import api from '../../../services/api'
// import { queryClient } from '../../../services/queryClient'
// import { ButtonAlertClose, ButtonDelete, Container, Footer } from './styles'

// interface AlertDeleteStoriesSprintProps {
//   id: string
//   actualStoriesSprintName: string
// }
// AlertDeleteStoriesSprintProps { id, actualStoriesSprintName }
const AlertDeleteStoriesSprint: React.FC = () => {
  return (
    <h1>Hello</h1>
  );
  // const { addToast } = useToast()

  // const removeSprint = useMutation(
  //   async (id: string) => {
  //     const response = await api.delete(`/v1/stories-sprint/delete/${id}`)

  //     return response.data
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('stories-sprint')
  //     },
  //     onError: (error: AxiosError) => {
  //       addToast({
  //         type: 'error',
  //         title: 'Erro ao deletar registro',
  //         description: 'Ocorreu um erro ao deletar registro, tente novamente',
  //       })
  //     },
  //   },
  // )

  // async function handleRemoveTag(id: string) {
  //   try {
  //     await removeSprint.mutateAsync(id)

  //     addToast({
  //       type: 'success',
  //       title: 'Deletado com Sucesso!',
  //     })
  //   } catch {
  //     console.log('Error happened')
  //   }
  // }

  // return (
  //   <Container>
  //     <p>Tem certeza que deseja excluir este registro?</p>
  //     <span>{actualStoriesSprintName}</span>
  //     <Footer>
  //       <ButtonDelete onClick={() => handleRemoveTag(String(id))}><FaTrash /> Excluir</ButtonDelete>
  //       <ButtonAlertClose>Cancelar</ButtonAlertClose>
  //     </Footer>
  //   </Container>
  // )
}

export default AlertDeleteStoriesSprint
