import React, { ChangeEvent, useCallback, useRef } from 'react'
import { FiMail, FiUser, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import getValidationErrors from '../../utils/getValidationsErros'

import { Container, Content, AvatarInput } from './styles'
import { useToast } from '../../components/hooks/provider/toast'
import { useAuth } from '../../components/hooks/provider/auth'
import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button'

interface ProfileFormData {
  name: string
  email: string
  old_password: string
  password: string
  password_confirmation: string
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const navigate = useNavigate()

  const { user, updateUser } = useAuth()

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: any) => !!val.length,
            then: Yup.string().required('Campo Obrigatório').min(6),
            otherwise: Yup.string().min(0),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val: any) => !!val.length,
              then: Yup.string().required('Campo Obrigatório').min(6),
              otherwise: Yup.string().min(0),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação Incorreta'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          name: data.name,
          email: data.email, // Object.Assing()
          ...(data.old_password
            ? {
              old_password: data.old_password,
              password: data.password,
              password_confirmation: data.password_confirmation,
            }
            : {}),
        }

        const response = await api.put('/profile', formData)

        updateUser(response.data)

        navigate('/dashboard')

        addToast({
          type: 'success',
          title: 'Perfil Atualizado!',
          description: 'Informações do perfil atualizadas com sucesso!',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        // disparar um toast (mensagens de ao canto das tela)
        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro ao atualizar o perfil, tente novamente',
        })
      }
    },
    [addToast, navigate, updateUser],
  )

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData()
        data.append('avatar', e.target.files[0])

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data)

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          })
        })
      }
    },
    [addToast, updateUser],
  )

  return (
    <>
      {/* <Header /> */}
      <Container>
        <header>
          <div>
            <Link to={'/dashboard'}>
              <FiArrowLeft />
            </Link>
          </div>
        </header>

        <Content>
          <Form
            initialData={{
              name: user.name,
              email: user.email,
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <AvatarInput>
              <img src={user.avatar_url} alt={user.name} />
              <label htmlFor="avatar">
                <FiCamera />

                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
            </AvatarInput>
            <h1>Meu Perfil</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              containerStyle={{ marginTop: 24 }}
              name="old_password"
              icon={FiLock}
              type="password"
              placeholder="Senha Atual"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova Senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar Senha"
            />
            <Button type="submit">Alterar</Button>
          </Form>
        </Content>
      </Container>
    </>
  )
}

export default Profile
