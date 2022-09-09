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
import { Footer } from './styles'
import { FindSectionOneProps, useSection } from '../useSections'
import { BiText } from 'react-icons/bi'


const UpdateSections: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [isSendingProject, setIsSendingProject] = useState(false)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { id } = useParams()
  const { title } = useParams()
  console.log('title:', title)
  let section = ''
  let navBack = ''
  switch (title) {
    case 'section-one':
      section = 'sectionOne'
      navBack = 'list-section-one'
      break;
    case 'section-two':
      section = 'sectionTwo'
      navBack = 'list-section-two'
      break;
    case 'section-three':
      section = 'sectionThree'
      navBack = 'list-section-three'
      break;
    case 'section-four':
      section = 'sectionFour'
      navBack = 'list-section-four'
      break;
    case 'section-five':
      section = 'sectionFive'
      navBack = 'list-section-five'
      break;
  }

  console.log('section:', section)
  const { data } = useSection({ id, section })


  formRef.current?.setFieldValue('title', data?.title)
  formRef.current?.setFieldValue('description', data?.description_one)
  formRef.current?.setFieldValue('progress', data?.image_one)

  const handleSubmitCreateProject = useCallback(
    async (data: FindSectionOneProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          id: Yup.string(),
          title: Yup.string().required('Título da secção é Obrigatório'),
          description: Yup.string().required('Descrição é obrigatório'),
          image_one: Yup.string(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          id: data.id,
          title: data.title,
          description: data.description_one,
          image: data.image_one,
        }

        setIsSendingProject(true)
        await api.post(`/v1/${section}/update/${id}`, formData)
        navigate('/project')
        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingProject(false)
      } catch (err) {
        console.log('error', err)
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
    [addToast, navigate, formRef],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

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

  return (
    <>
      <Panel
        title={data?.title ? data.title : 'Atualize a Secção'}
        back={`/${navBack}`}
      >
        <Form
          ref={formRef}
          initialData={data}
          onSubmit={handleSubmitCreateProject}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <h1>{data?.title}</h1>
          <span className="subtitle">Atualize pelo formulário abaixo</span>

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
          <Input
            name="image_one"
            type="file"
            placeholder="First Image"
            icon={BiText}
            onChange={fileSelectedHandlerInput}
          />
          <Footer>
            <Button
              disabled={isSendingProject}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingProject ? <Loading /> : 'Save Register'}
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

export default UpdateSections
