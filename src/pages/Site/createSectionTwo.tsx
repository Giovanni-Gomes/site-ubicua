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
import CreateSectionTopics from './createSectionTopics'
import { ArrowLeft } from 'phosphor-react'

interface CreateMenuProps {
  title: string
  description_one: string
  image_one?: string
  description_two: string
}

const CreateSectionTwo: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const [selectedFile, setSelectedFile] = useState('')
  const [selectedFileTwo, setSelectedFileTwo] = useState('')

  const [isActiveForm, setIsActiveForm] = useState(0)

  function showActiveForm(id: number) {
    setIsActiveForm(id)
  }

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        const imageData = new FormData()
        imageData.append('image_one', (selectedFile as any).name)
        imageData.append('image_two', (selectedFileTwo as any).name)
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é Obrigatório'),
          description_one: Yup.string(),
          image_one: Yup.string(),
          description_two: Yup.string(),
          image_two: Yup.string(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          title: data.title,
          description_one: data.description_one,
        }

        await api.post('/v1/sectionTwo/create', formData)

        navigate('/dashboard')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
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
    [addToast, navigate, selectedFile, selectedFileTwo],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Header />
      <Container>
        <Back to={'/list-section-two'}>
          <ArrowLeft size={24} />
        </Back>
        <ul>
          <li>
            <button
              type="button"
              className={isActiveForm === 0 ? 'active' : undefined}
              onClick={() => showActiveForm(0)}
            >
              Principal
            </button>
          </li>
          <li>
            <button
              type="button"
              className={isActiveForm === 1 ? 'active' : undefined}
              onClick={() => showActiveForm(1)}
            >
              Secundário
            </button>
          </li>
        </ul>
        {(isActiveForm === 0 && (
          <Form
            ref={formRef}
            onSubmit={handleSubmitCreateMenu}
            className="pages"
          >
            <h1>Cadastrar | Alterar 2º Secção</h1>
            <span className="subtitle">preencha o formulário abaixo</span>

            <Input
              name="title"
              type="text"
              placeholder="Título"
              icon={BiText}
            />
            <Input
              name="description_one"
              type="text"
              placeholder="First Description"
              icon={BiText}
            />

            <FormFooter>
              <Button type="submit">Salvar Registro</Button>
              <CancelButton onClick={handleResetForm}>
                <FaTrash />
              </CancelButton>
            </FormFooter>
          </Form>
        )) ||
          (isActiveForm === 1 && <CreateSectionTopics />)}
      </Container>
    </>
  )
}

export default CreateSectionTwo
