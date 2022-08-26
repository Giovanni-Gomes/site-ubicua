import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../../../services/api'
import Input from '../../../../../components/Shared/Input'
import { BiText } from 'react-icons/bi'
import { FaTrash, FaImage, FaSave } from 'react-icons/fa'
import Button from '../../../../../components/Shared/Button'
import { Div, Footer, WrapperInputs } from './styles'
import { Translator } from '../../../../../components/Portal/I18n/Translator'

import { Loading } from '../../../../../components/Site/WidgetForm/Loading'
import { Panel } from '../../../../../components/Portal/Panel'
import { CancelButton } from '../../../styles'
import { useToast } from '../../../../../components/hooks/provider/toast'
import getValidationErrors from '../../../../../utils/getValidationsErros'

interface CreateMenuPortalProps {
  title: string
  link: string
  active?: boolean
}

const CreateMenuPortal: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [isSendingMenu, setIsSendingMenu] = useState(false)

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuPortalProps) => {
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
        await api.post('/v1/menu-portal/create-menu-portal', {
          title: data.title,
          link: data.link,
          active: Boolean(data.active),
        })

        navigate('/menu-portal')

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
    <>
      <Panel title={<Translator path="menuPortal.title" />} back="/project">

        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateMenu}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Div>
            <WrapperInputs>
              <Input
                id="title"
                type="text"
                name="title"
                placeholder="Título"
              />
              {/* {String(<Translator path="menuPortal.inputTitle" />)} */}
              <Input
                id="link"
                type="text"
                name="link"
                placeholder="Link (URL)"
              />
            </WrapperInputs>


          </Div>

          <Footer>
            <Button
              disabled={isSendingMenu}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingMenu ? <Loading /> : <Translator path="menuPortal.button" />}
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

export default CreateMenuPortal
