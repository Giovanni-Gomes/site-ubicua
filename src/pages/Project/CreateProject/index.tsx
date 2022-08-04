import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../../components/hooks/provider/toast'

import getValidationErrors from '../../../utils/getValidationsErros'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/api'

import { FaTrash, FaSave } from 'react-icons/fa'
import Button from '../../../components/Shared/Button'
import Header from '../../../components/Portal/Header'

import { Panel } from '../../../components/Portal/Panel'

import { CancelButton } from '../../Config/styles'

import Input from '../../../components/Shared/Input'

import { Loading } from '../../../components/Site/WidgetForm/Loading'
import { useUsers } from '../../User/useUsers'
import Select from '../../../components/Shared/Select'
import { useStatus } from '../../Config/useStatus'
import { Div, Footer, WrapperInputs } from './styles'

interface CreateProjectProps {
  name: string
  description: string
  active?: boolean
  start: Date
  end: Date
  progress: string
  negotiated: string
  real_cost: string
  status_id: string
  user_id: string
}

const CreateProject: React.FC = () => {
  // style colors customTheme
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { data } = useUsers()
  const { data: dataStatus } = useStatus()
  const selectOptionsUsers = data?.users
  const selectOptionsStatus = dataStatus?.status

  const formRef = useRef<FormHandles>(null)
  const [isSendingProject, setIsSendingProject] = useState(false)

  const handleSubmitCreateProject = useCallback(
    async (data: CreateProjectProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do Projeto é Obrigatório'),
          description: Yup.string().required('Descrição é obrigatório'),
          start: Yup.string(), // Yup.date().required('Data é obrigatório'),
          end: Yup.string(), // Yup.date().required('Data é obrigatório'),
          progress: Yup.string().required('Progresso é obrigatório'),
          negotiated: Yup.string().required('Valor negociado é obrigatório'),
          real_cost: Yup.string().required('Custo real é obrigatório'),
          status_id: Yup.string().required('Status é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.start,
          date_end: data.end,
          progress: data.progress,
          negotiated_value: data.negotiated,
          real_cost: data.real_cost,
          status_id: data.status_id,
          user_id: data.user_id,
        }

        setIsSendingProject(true)
        const result = await api.post(`/v1/project/create/`, formData)
        // console.log('formData', result)

        navigate('/project')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingProject(false)
      } catch (err) {
        console.log('error', err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro cadastro, tente novamente',
        })
      }
    },
    [addToast, navigate],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Header />
      <Panel title="Create a new Project" back="/project">
        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateProject}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Div>
            <WrapperInputs>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Number Project"
              />

              <Input
                id="progress"
                type="text"
                name="progress"
                placeholder="Progress"
              />

              <Select name="status_id">
                <option key={0} value="Select a status">
                  Selecione um status
                </option>
                {selectOptionsStatus?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>

              <Input
                type="date"
                min="01/01/2021"
                max="31/12/2030"
                name="date_start"
                label="Data Início:"
              />
              {/* <Radio name="active" options={radioOptions} /> */}
            </WrapperInputs>

            <WrapperInputs>
              <Input
                type="number"
                name="negotiated_value"
                placeholder="Valor Negociado"
              />

              <Input type="number" name="real_cost" placeholder="Custo Real" />

              <Select name="user_id">
                <option key={0} value="Select a user">
                  Select a user
                </option>
                {selectOptionsUsers?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>

              <Input
                type="date"
                min="01/01/2021"
                max="31/12/2030"
                name="date_end"
                label="Data Fim:"
              />
              {/* <Input id='user_id' type='text' name='user_id' placeholder='Responsável' /> */}
            </WrapperInputs>
          </Div>
          <Input
            id="description"
            type="text"
            name="description"
            placeholder="Description"
          />
          <Footer>
            <Button
              disabled={isSendingProject}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingProject ? <Loading /> : 'Save Register'}
            </Button>
            <CancelButton onClick={handleResetForm}>
              <FaTrash size={25} />
            </CancelButton>
          </Footer>
        </Form>
      </Panel>
    </>
  )
}

export default CreateProject

/*
EXAMPLE DE FORM CHACARA UI
*/

{
  /* <Form ref={formRef} onSubmit={handleSubmitCreateProject} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>

<Flex direction='column' ml={10} mr={10} mt={5} w={585}>

  <InputChakra ref={inputRef} id='name' type='name' name='name' mb='2rem' placeholder='Nome' />
  <InputChakra ref={emailRef} id='email' type='email' name='email' mb='2rem' placeholder='Nome' />

</Flex>
</Form> */
}

{
  /* <Flex align='center' ml={10} w='100%'>
<Button type='submit' >
  <FaSave style={{ marginRight: '0.5rem' }} />
  Salvar Registro
</Button>
<CancelButton onClick={handleResetForm} >
  <FaTrash size={25} />
</CancelButton>

</Flex> */
}

{
  /* <NumberInput max={50} min={10} mb='2rem'>
<NumberInputField id='amount' placeholder='valor negociado' />
<NumberInputStepper>
  <NumberIncrementStepper />
  <NumberDecrementStepper />
</NumberInputStepper>
</NumberInput>

<NumberInput max={50} min={10} mb='2rem'>
<NumberInputField id='amount' placeholder='Custo Real' />
<NumberInputStepper>
  <NumberIncrementStepper />
  <NumberDecrementStepper />
</NumberInputStepper>
</NumberInput> */
}

// const radioOptions = [
//   { id: 'ativo', value: 'ativo', label: 'Ativo' },
//   { id: 'inativo', value: 'inativo', label: 'Inativo' },
// ]
