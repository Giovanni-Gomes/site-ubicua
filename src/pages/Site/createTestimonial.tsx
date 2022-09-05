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
import { CancelButton, FormFooter } from './styles'

interface CreateMenuProps {
  title: string
  description: string
  author: string
  icon?: string
}

const CreateTestimonial: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const [selectedFile, setSelectedFile] = useState('')

  // const fileInput = useRef(null)

  const fileSelectedHandlerInputOne = (event: any) => {
    // handle validations
    // console.log("img handle one", event.target.files[0]);
    setSelectedFile(event.target.files[0])
  }

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        const iconData = new FormData()
        iconData.append('icon', (selectedFile as any).name)
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é Obrigatório'),
          description: Yup.string().required('Descrição é Obrigatório'),
          author: Yup.string().required('Autor é Obrigatório'),
          icon: Yup.string(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          title: data.title,
          description: data.description,
          author: data.author,
          icon: selectedFile,
        }

        await api.post('/v1/testimonial/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

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
    [addToast, navigate, selectedFile],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmitCreateMenu} className='pages'>
      <h1>Cadastrar Novos Depoimentos</h1>
      <span className="subtitle">preencha o formulário abaixo</span>

      <Input name="title" type="text" placeholder="Título" icon={BiText} />
      <Input
        name="description"
        type="text"
        placeholder="Descrição"
        icon={BiText}
      />
      <Input name="author" type="text" placeholder="Autor" icon={BiText} />
      <Input
        name="icon"
        type="file"
        placeholder="Ícone"
        icon={BiText}
        onChange={fileSelectedHandlerInputOne}
      />

      {/* <Input name="description_two" type="text" placeholder='Second Description' icon={BiText} /> */}

      {/* <Input name="image_two" type="file" placeholder='Second Image' icon={BiText} onChange={fileSelectedHandlerInputTwo} /> */}

      <FormFooter>
        <Button type="submit">Salvar Registro</Button>
        <CancelButton onClick={handleResetForm}>
          <FaTrash />
        </CancelButton>
      </FormFooter>
    </Form>
  )
}

export default CreateTestimonial
