import React, { useCallback, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useToast } from '../../../components/hooks/provider/toast'

// import getValidationErrors from '../../../utils/getValidationsErros'
// import { FormHandles } from '@unform/core'
// import { Form } from '@unform/web'
// import * as Yup from 'yup'

// import api from '../../../services/api'

// import { FaTrash, FaSave } from 'react-icons/fa'
// import Button from '../../../components/Shared/Button'

// import { Panel } from '../../../components/Portal/Panel'

// import { CancelButton } from '../../Config/styles'

// import Input from '../../../components/Shared/Input'

// import { Loading } from '../../../components/Site/WidgetForm/Loading'
// import { useUsers } from '../../User/useUsers'
// import Select from '../../../components/Shared/Select'
// import { useStatus } from '../../Config/useStatus'
// import { Div, Footer, WrapperInputs } from './styles'
// import { Translator } from '../../../components/Portal/I18n/Translator'

// interface CreateSprintProps {
//   name: string
//   description: string
//   active?: boolean
//   date_start: Date
//   date_end: Date
//   status_activity_id: string
//   sprint_id: string
//   user_id: string
// }

const CreateStoriesSprint: React.FC = () => {
  return (
    <h1>Hello</h1>
  );
  //   // style colors customTheme
  //   const navigate = useNavigate()
  //   const { addToast } = useToast()

  //   const { data } = useUsers()
  //   const { data: dataStatus } = useStatus() //// puxar status da actividade
  //   const selectOptionsUsers = data?.users
  //   const selectOptionsStatus = dataStatus?.status

  //   const formRef = useRef<FormHandles>(null)
  //   const [isSendingSprint, setIsSendingSprint] = useState(false)

  //   const handleSubmitCreateSprint = useCallback(
  //     async (data: CreateSprintProps) => {
  //       try {
  //         formRef.current?.setErrors({})

  //         const schema = Yup.object().shape({
  //           name: Yup.string().required('Nome do Projeto é Obrigatório'),
  //           description: Yup.string().required('Descrição é obrigatório'),
  //           status_active_id: Yup.string().required('Status da estoria é obrigatório'),
  //           sprint_id: Yup.string().required('Sprint é obrigatório'),
  //           user_id: Yup.string().required('Usuário é obrigatório'),
  //           date_start: Yup.string(),
  //           date_end: Yup.string(),
  //         })

  //         await schema.validate(data, {
  //           abortEarly: false,
  //         })

  //         const formData = {
  //           name: data.name,
  //           description: data.description,
  //           active: data.active,
  //           date_start: data.date_start,
  //           date_end: data.date_end,
  //           status_id: data.status_activity_id,
  //           user_id: data.user_id,
  //         }

  //         setIsSendingSprint(true)
  //         await api.post(`/v1/sprint/create/`, formData)

  //         navigate('/sprint')

  //         addToast({
  //           type: 'success',
  //           title: 'Cadastro Realizado!',
  //         })
  //         setIsSendingSprint(false)
  //       } catch (err) {
  //         console.log('error', err)
  //         if (err instanceof Yup.ValidationError) {
  //           const errors = getValidationErrors(err)

  //           formRef.current?.setErrors(errors)
  //           setIsSendingSprint(false)
  //           return
  //         }

  //         addToast({
  //           type: 'error',
  //           title: 'Erro no cadastro',
  //           description: 'Ocorreu um erro cadastro, tente novamente',
  //         })
  //       }
  //     },
  //     [addToast, navigate],
  //   )

  //   function handleResetForm(event: React.MouseEvent) {
  //     event?.preventDefault()
  //     formRef.current?.reset()
  //   }

  //   return (
  //     <>
  //       <Panel title={<Translator path="sprint.create.title" />} back="/sprint">
  //         <Form
  //           ref={formRef}
  //           onSubmit={handleSubmitCreateSprint}
  //           style={{ width: '90%', margin: '0rem auto 0' }}
  //         >

  //           <Input
  //             id="name"
  //             type="text"
  //             name="name"
  //             placeholder="Name Sprint"
  //           />
  //           <Div>
  //             <WrapperInputs>
  //               <Select name="status_id">
  //                 <option key={0}><Translator path="sprint.create.selectStatus" /></option>
  //                 {selectOptionsStatus?.map((option) => (
  //                   <option key={option.id} value={option.id}>
  //                     {option.name}
  //                   </option>
  //                 ))}
  //               </Select>

  //               <Input
  //                 type="date"
  //                 min="01/01/2021"
  //                 max="31/12/2030"
  //                 name="date_start"
  //                 label="Data Start:"
  //               />
  //               {/* <Radio name="active" options={radioOptions} /> */}
  //             </WrapperInputs>

  //             <WrapperInputs>


  //               <Select name="user_id">
  //                 <option key={0}><Translator path="sprint.create.selectUser" /></option>
  //                 {selectOptionsUsers?.map((option) => (
  //                   <option key={option.id} value={option.id}>
  //                     {option.name}
  //                   </option>
  //                 ))}
  //               </Select>

  //               <Input
  //                 type="date"
  //                 min="01/01/2021"
  //                 max="31/12/2030"
  //                 name="date_end"
  //                 label="Data End:"
  //               />
  //               {/* <Input id='user_id' type='text' name='user_id' placeholder='Responsável' /> */}
  //             </WrapperInputs>
  //           </Div>
  //           <Input
  //             id="description"
  //             type="text"
  //             name="description"
  //             placeholder="Description sprint"
  //           />
  //           <Footer>
  //             <Button
  //               disabled={isSendingSprint}
  //               onClick={() => formRef.current?.submitForm()}
  //             >
  //               <FaSave style={{ marginRight: '0.5rem' }} />
  //               {isSendingSprint ? <Loading /> : <Translator path="sprint.create.button" />}
  //             </Button>
  //             <CancelButton onClick={handleResetForm}>
  //               <FaTrash size={25} />
  //             </CancelButton>
  //           </Footer>
  //         </Form>
  //       </Panel>
  //     </>
  //   )
}

export default CreateStoriesSprint
