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
import { useByIdUser } from '../useUsers'
import { FormInputsContainer, Footer, Wrapper } from './styles'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'

interface UpdateUserProps {
  id: string
  name: string
  email: string
  password: string
  active?: boolean
  type_user: string
}

const UpdateUser: React.FC = () => {
  // style colors customTheme
  // const bg = useColorModeValue('hoverDark', 'hoverLight')
  const formRef = useRef<FormHandles>(null)
  const [isSendingUser, setIsSendingUser] = useState(false)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { id } = useParams()
  const { data } = useUsers()

  const { data: dataUser } = useByIdUser(String(id))

  formRef.current?.setFieldValue('name', dataUser?.name)
  formRef.current?.setFieldValue('email', dataUser?.email)
  formRef.current?.setFieldValue('password', dataUser?.password)
  formRef.current?.setFieldValue('active', dataUser?.active)
  formRef.current?.setFieldValue('type_user_id', dataUser?.type_user)
  // console.log('data: ', dataUser)
  const handleSubmitCreateUser = useCallback(
    async (data: UpdateUserProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          id: Yup.string(),
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
          active: Yup.string(),
          type_user_id: Yup.string().required('Tipo de usuário é obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
          type_user: data.type_user,
        }

        setIsSendingUser(true)
        await api.post(`/v1/users/update/${String(id)}`, formData)
        // console.log("formData", result)
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

          setIsSendingUser(false)
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
    [addToast, navigate, formRef],
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
      <Panel
        title={dataUser?.name ? dataUser.name : 'Update to User'}
        back="/list-users"
      >
        <Form
          ref={formRef}
          initialData={dataUser}
          onSubmit={handleSubmitCreateUser}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <FormInputsContainer>
            <Wrapper>
              <Input name="name" type="text" placeholder="name" icon={FiUser} />
              <Input
                name="email"
                type="email"
                placeholder="e-mail"
                icon={FiMail}
              />
              <Input
                name="password"
                type="password"
                placeholder="password"
                icon={FiLock}
              />

              <Select name="type_user_id">
                {selectOptions.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.value}
                  </option>
                ))}
              </Select>
            </Wrapper>
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

export default UpdateUser
