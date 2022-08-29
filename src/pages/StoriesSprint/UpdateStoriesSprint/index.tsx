import React, { useCallback, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
import { Div, Footer, Wrapper } from './styles'
import { Translator } from '../../../components/Portal/I18n/Translator'
import { useSprint } from '../useSprints'

interface CreateSprintProps {
  id: string
  name: string
  description: string
  active?: boolean
  date_start: Date
  date_end: Date
  status_id: string;
  user_id: string;
}

const UpdateSprint: React.FC = () => {
  // style colors customTheme
  // const bg = useColorModeValue('hoverDark', 'hoverLight')
  const formRef = useRef<FormHandles>(null)
  const [isSendingSprint, setIsSendingSprint] = useState(false)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { id } = useParams()
  const { data } = useUsers()
  const { data: dataStatus } = useStatus()
  const { data: dataSprint } = useSprint(String(id))

  const selectOptionsUsers = data?.users
  const selectOptionsStatus = dataStatus?.status

  formRef.current?.setFieldValue('name', dataSprint?.name)
  formRef.current?.setFieldValue('description', dataSprint?.description)
  formRef.current?.setFieldValue('date_start', dataSprint?.date_start)
  formRef.current?.setFieldValue('date_end', dataSprint?.date_end)
  formRef.current?.setFieldValue('user_id', dataSprint?.user.id)
  formRef.current?.setFieldValue('status_id', dataSprint?.status.id)

  const handleSubmitCreateSprint = useCallback(
    async (data: CreateSprintProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do Projeto é Obrigatório'),
          description: Yup.string().required('Descrição é obrigatório'),
          status_id: Yup.string().required('Status é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório'),
          date_start: Yup.string(),
          date_end: Yup.string(),
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
          status_id: data.status_id,
          user_id: data.user_id,
        }

        setIsSendingSprint(true)
        await api.post(`/v1/sprint/update/${id}`, formData)
        navigate('/sprint')
        addToast({
          type: 'success',
          title: 'Registro Atualizado!',
        })
        setIsSendingSprint(false)
      } catch (err) {
        console.log('error', err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          return formRef.current?.setErrors(errors)
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro na atualização, tente novamente',
        })
      }
    },
    [addToast, navigate, formRef],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Panel
        title={dataSprint?.name ? dataSprint.name : <Translator path="sprint.update.title" />}
        back="/sprint"
      >
        <Form
          ref={formRef}
          initialData={dataSprint}
          onSubmit={handleSubmitCreateSprint}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name Sprint"
          />

          <Div>
            <Wrapper>
              <Select name="status_id" defaultValue={dataSprint?.status.id}>
                <option key={0}><Translator path="sprint.update.selectStatus" /></option>
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
                label="Date Start:"
              />
              {/* <Radio name="active" options={radioOptions} /> */}
            </Wrapper>

            <Wrapper>


              <Select name="user_id" defaultValue={dataSprint?.user.id}>
                <option key={0}>
                  <Translator path="sprint.update.selectUser" />
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
                label="Date End:"
              />
              {/* <Input id='user_id' type='text' name='user_id' placeholder='Responsável' /> */}
            </Wrapper>
          </Div>
          <Input
            id="description"
            type="text"
            name="description"
            placeholder="Description sprint"
          />

          <Footer>
            <Button
              disabled={isSendingSprint}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingSprint ? <Loading /> : <Translator path="sprint.update.button" />}
            </Button>
            <CancelButton onClick={handleResetForm}>
              <FaTrash size={25} />
            </CancelButton>
          </Footer>
        </Form>
      </Panel>
      {/* ))} */}
    </>
  )
}

export default UpdateSprint
