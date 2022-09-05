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
import { CancelButton, FormFooter } from './styles'
import { Loading } from '../../components/Site/WidgetForm/Loading'
import Select from '../../components/Shared/Select'

interface CreateMenuProps {
  title: string
  link: string
  active?: boolean
}

const CreateMenu: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [isSendingMenu, setIsSendingMenu] = useState(false)

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é Obrigatório'),
          link: Yup.string().required('Link é Obrigatório'),
          active: Yup.boolean().default(true),
        })

        await schema.validate(data, {
          abortEarly: false,
        })
        setIsSendingMenu(true)
        await api.post('/v1/menu/create-menu', {
          title: data.title,
          link: data.link,
          active: Boolean(data.active),
        })

        navigate('/dashboard')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
        })
        setIsSendingMenu(false)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          setIsSendingMenu(false)
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
    <Form ref={formRef} onSubmit={handleSubmitCreateMenu}>
      <h1>Cadastrar novo menu</h1>
      <span className="subtitle">preencha o formulário abaixo</span>

      <Input name="title" type="text" placeholder="Título" icon={BiText} />
      <Input name="link" type="text" placeholder="Link" icon={BiText} />
      <Select name='active' >
        <option value="true">Ativo</option>
        <option value="false">Inativo</option>
      </Select>

      <FormFooter>
        <Button disabled={isSendingMenu} type="submit">
          {isSendingMenu ? <Loading /> : 'Save Register'}
        </Button>
        <CancelButton onClick={handleResetForm}>
          <FaTrash />
        </CancelButton>
      </FormFooter>
    </Form>
  )
}

export default CreateMenu
