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
import { FormInputsContainer, Footer, WrapperInputs } from './styles'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'

interface CreateUserProps {
  name: string
  email: string
  password: string
  active?: boolean
  type_user_id: string
}

const CreateUser: React.FC = () => {
  // style colors customTheme
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { data } = useUsers()
  const { data: dataStatus } = useStatus()

  const formRef = useRef<FormHandles>(null)
  const [isSendingUser, setIsSendingUser] = useState(false)

  const handleSubmitCreateUser = useCallback(
    async (data: CreateUserProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
          type_user_id: Yup.string().required(
            'Tipo de usuário é obrigatório',
          ),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
          type_user_id: data.type_user_id,
        }

        setIsSendingUser(true)
        await api.post(`/v1/user/create/`, formData)

        navigate('/list-users')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingUser(false)
      } catch (err) {
        console.log('error', err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          setIsSendingUser(false)
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
    { value: 'USER' },
    { value: 'ADMIN' },
    { value: 'SUPER_ADMIN' },
    { value: 'CLIENT' },
    { value: 'OPERATOR' },
    { value: 'COMERCIAL' },
  ]

  return (
    <>
      <Panel title="Create a new User" back="/list-users">
        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateUser}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <FormInputsContainer>
            <WrapperInputs>
              <span className="subtitle">preencha o formulário abaixo</span>

              <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
              <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                icon={FiLock}
              />
              {/* <Input name="type_user_id" type="text" placeholder='Tipo de Usuário' icon={FiLock} /> */}
              <Select name="type_user_id">
                <option key="0" value="">Select Type User</option>
                {selectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Select>
            </WrapperInputs>
          </FormInputsContainer>

          <Footer>
            <Button
              disabled={isSendingUser}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingUser ? <Loading /> : 'Save Register'}
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

export default CreateUser
