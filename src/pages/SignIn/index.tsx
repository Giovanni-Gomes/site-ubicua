import React, { useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import getValidationErrors from '../../utils/getValidationsErros'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button'

import { AnimationContainer, Container, Content, Background } from './styles'
import { useAuth } from '../../components/hooks/provider/auth'
import { useToast } from '../../components/hooks/provider/toast'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Flex } from '@chakra-ui/react'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmitLogin = useCallback(
    async (data: SignInFormData) => {
      // console.log("form submission");
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({
          email: data.email,
          password: data.password,
        })

        navigate('/dashboard')

        addToast({
          type: 'success',
          title: 'Login Realizado',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors) // console.log("yup erros " + JSON.stringify(err));
          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais',
        })
      }
    },
    [signIn, addToast, navigate],
  )

  return (
    <Flex w="100%" h="100vh">
      <Flex direction="column" flex="1 1 0%" align="center" justify="center">
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmitLogin}>
            <h1>Faça Login</h1>
            {/* arrumar os inputs  */}
            <Input
              name="email"
              type="email"
              placeholder="Email"
              icon={FiMail}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />

            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>
          <Link to="/registrar">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Flex>
      <Background />
    </Flex>
  )
}

export default SignIn
