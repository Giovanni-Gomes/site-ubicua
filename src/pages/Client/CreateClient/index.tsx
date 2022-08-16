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

interface CreateClientProps {
  name_company: string
  name_contact?: string
  segmentation?: string
  description?: string
  email: string
  phone?: string
  whats?: string
  type_client: "BASIC" | "GOLD" | "EMERALD" | "DIAMOND"
  user_id: string
}

const CreateClient: React.FC = () => {
  // style colors customTheme
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { data } = useUsers()
  const { data: dataStatus } = useStatus()
  const selectOptionsUsers = data?.users

  const formRef = useRef<FormHandles>(null)
  const [isSendingClient, setIsSendingClient] = useState(false)

  const handleSubmitCreateClient = useCallback(
    async (data: CreateClientProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name_company: Yup.string().required('Name company is required'),
          name_contact: Yup.string(),
          segmentation: Yup.string(),
          description: Yup.string(),
          email: Yup.string().required('Email is required'),
          phone: Yup.string(),
          whats: Yup.string(),
          type_client: Yup.string().required('Type client is required'),
          user_id: Yup.string().required('User is required'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          name_company: data.name_company,
          name_contact: data.name_contact,
          segmentation: data.segmentation,
          description: data.description,
          email: data.email,
          phone: data.phone,
          whats: data.whats,
          type_client: data.type_client,
          user_id: data.user_id,
        }

        setIsSendingClient(true)
        await api.post(`/v1/client/create/`, formData)

        navigate('/client')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingClient(false)
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

  const selectOptions = [
    { value: 'BASIC' },
    { value: 'GOLD' },
    { value: 'EMERALD' },
    { value: 'DIAMOND' },
  ]

  return (
    <>
      <Panel title="Create a new Client" back="/client">
        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateClient}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Div>
            <WrapperInputs>
              <Input
                id="name_company"
                type="text"
                name="name_company"
                placeholder="Name Company"
              />

              <Input
                id="name_contact"
                type="text"
                name="name_contact"
                placeholder="Name Contact"
              />

              <Input
                id="segmentation"
                type="text"
                name="segmentation"
                placeholder="Segmentation"
              />

              <Select name="type_client">
                <option key="0" value="">
                  Select type client
                </option>
                {selectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Select>


            </WrapperInputs>

            <WrapperInputs>
              <Input
                type="email"
                name="email"
                placeholder="Email"
              />

              <Input type="text" name="phone" placeholder="Phone Number" />

              <Input type="text" name="whats" placeholder="Whats Number" />

              <Select name="user_id">
                <option key={0}>Select a user</option>
                {selectOptionsUsers?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>

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
              disabled={isSendingClient}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingClient ? <Loading /> : 'Save Register'}
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

export default CreateClient
