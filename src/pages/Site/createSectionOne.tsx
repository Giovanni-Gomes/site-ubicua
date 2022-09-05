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
import { FaTrash } from 'react-icons/fa'
import Button from '../../components/Shared/Button'
import Header from '../../components/Portal/Header'
import { Back, CancelButton, Container, FormFooter } from './styles'
import { Loading } from '../../components/Site/WidgetForm/Loading'
import { ArrowLeft } from 'phosphor-react'

interface CreateMenuProps {
  title: string
  description_one: string
  image_one?: string
}

const CreateSectionOne: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const [title, setTitle] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [selectedFile, setSelectedFile] = useState('')

  const fileSelectedHandlerInput = (event: any) => {
    let image
    if (event.target.files[0] == null) {
      image = null
    } else {
      image = event.target.files[0]
    }
    setSelectedFile(image)
  }

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        const imageData = new FormData()
        imageData.append('image_one', (selectedFile as any).name)

        console.log('image ONE', (selectedFile as any).name)

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é Obrigatório'),
          description_one: Yup.string(),
          image_one: Yup.string(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          title: data.title,
          description_one: data.description_one,
          image_one: selectedFile,
        }
        setIsSendingFeedback(true)

        const result = await api.post('/v1/sectionOne/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        console.log('formData', result)

        navigate('/create-section-one')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingFeedback(false)
      } catch (err) {
        console.log(err)
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
    [addToast, navigate, selectedFile],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Header />
      <Container>
        <Back to={'/list-section-one'}>
          <ArrowLeft size={24} />
        </Back>
        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateMenu}
          className="simple-form"
        >
          <h1>Cadastrar | Alterar 1º Secção</h1>
          <span className="subtitle">preencha o formulário abaixo</span>

          <Input
            name="title"
            type="text"
            placeholder="Título"
            icon={BiText}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            name="description_one"
            type="text"
            placeholder="First Description"
            icon={BiText}
          />
          <Input
            name="image_one"
            type="file"
            placeholder="First Image"
            icon={BiText}
            onChange={fileSelectedHandlerInput}
          />
          <FormFooter>
            <Button
              type="submit"
              disabled={title.length === 0 || isSendingFeedback}
              className="submit"
            >
              {isSendingFeedback ? <Loading /> : 'Salvar Registro'}
            </Button>

            <CancelButton onClick={handleResetForm}>
              <FaTrash />
            </CancelButton>
          </FormFooter>
        </Form>
      </Container>
    </>
  )
}

export default CreateSectionOne
