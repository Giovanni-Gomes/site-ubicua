import React, { useCallback, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import getValidationErrors from '../../utils/getValidationsErros'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { AnimationContainer } from './styles'

import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button'
import { useToast } from '../../components/hooks/provider/toast'
import api from '../../services/api'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

interface SignUpProps {
  name: string
  email: string
  password: string
  active?: boolean
  type_user?: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()

  const { addToast } = useToast()
  // const [type_user_id, setType_user_id] = useState('d6e46846-7688-4a81-b0f4-8c57037d2029')
  const handleSubmitRegister = useCallback(
    async (data: SignUpProps) => {
      // console.log("form submission");

      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/v1/users/create', {
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
        })

        navigate('/login')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
          description: 'Você já pode fazer seu login na aplicação',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors) // console.log("yup erros " + JSON.stringify(err));
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

  return (
    <AnimationContainer>
      <Form ref={formRef} onSubmit={handleSubmitRegister}>
        <h1>Registre-se</h1>
        <span className="subtitle">preencha o formulário abaixo</span>

        <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
        <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Registrar</Button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
      <Link to="/login">
        <FiArrowLeft />
        Voltar para o Login
      </Link>
    </AnimationContainer>
  )
}

export default SignUp
