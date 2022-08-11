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
  date_start: Date
  date_end: Date
  progress: string
  negotiated_value: string
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
          date_start: Yup.string(), // Yup.date().required('Data é obrigatório'),
          date_end: Yup.string(), // Yup.date().required('Data é obrigatório'),
          progress: Yup.string().required('Progresso é obrigatório'),
          negotiated_value: Yup.string().required(
            'Valor negociado é obrigatório',
          ),
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
          date_start: data.date_start,
          date_end: data.date_end,
          progress: data.progress,
          negotiated_value: data.negotiated_value,
          real_cost: data.real_cost,
          status_id: data.status_id,
          user_id: data.user_id,
        }

        setIsSendingProject(true)
        await api.post(`/v1/project/create/`, formData)

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
          setIsSendingProject(false)
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
                <option key={0}>Select for status</option>
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
                label="Data Start:"
              />
              {/* <Radio name="active" options={radioOptions} /> */}
            </WrapperInputs>

            <WrapperInputs>
              <Input
                type="number"
                name="negotiated_value"
                placeholder="Negotiated Value"
              />

              <Input type="number" name="real_cost" placeholder="Real cost" />

              <Select name="user_id">
                <option key={0}>Select a user</option>
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
                label="Data End:"
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
