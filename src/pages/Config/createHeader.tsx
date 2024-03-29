import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/hooks/provider/toast'

import getValidationErrors from '../../utils/getValidationsErros'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../services/api'
import Input from '../../components/Shared/Input'
import { BiText } from 'react-icons/bi'
import { FaTrash, FaImage } from 'react-icons/fa'
import Button from '../../components/Shared/Button'
import Header from '../../components/Portal/Header'
import { CancelButton, Container, FormFooter } from './styles'
import CreateMenu from './createMenu'
import { Loading } from '../../components/Site/WidgetForm/Loading'

interface CreateMenuProps {
  title: string
  logo: string
}

const CreateHeader: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [isActiveForm, setIsActiveForm] = useState(0)
  const [isSendingHeader, setIsSendingHeader] = useState(false)

  function showActiveForm(id: number) {
    setIsActiveForm(id)
  }

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é Obrigatório'),
          logo: Yup.string().required('Logo Obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })
        setIsSendingHeader(true)
        await api.post('/v1/home/create-header', {
          title: data.title,
          logo: data.logo,
        })

        navigate('/dashboard')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingHeader(false)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          setIsSendingHeader(false)
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
      <Container>
        <ul>
          <li>
            <button
              type="button"
              className={isActiveForm === 0 ? 'active' : undefined}
              onClick={() => showActiveForm(0)}
            >
              Logo
            </button>
          </li>
          <li>
            <button
              type="button"
              className={isActiveForm === 1 ? 'active' : undefined}
              onClick={() => showActiveForm(1)}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              type="button"
              className={isActiveForm === 2 ? 'active' : undefined}
              onClick={() => showActiveForm(2)}
            >
              Botões
            </button>
          </li>
        </ul>
        {(isActiveForm === 0 && (
          <Form ref={formRef} onSubmit={handleSubmitCreateMenu}>
            <h1>Cadastrar novo Logo</h1>
            <span className="subtitle">preencha o formulário abaixo</span>

            <Input
              name="title"
              type="text"
              placeholder="Título"
              icon={BiText}
            />
            <Input name="logo" type="text" placeholder="Logo" icon={FaImage} />

            <FormFooter>
              <Button disabled={isSendingHeader} type="submit">
                {isSendingHeader ? <Loading /> : 'Save Register'}
              </Button>
              <CancelButton onClick={handleResetForm}>
                <FaTrash />
              </CancelButton>
            </FormFooter>
          </Form>
        )) ||
          (isActiveForm === 1 && <CreateMenu />)}
      </Container>
    </>
  )
}

export default CreateHeader
