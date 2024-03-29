import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { useUsers } from '../../User/useUsers'
import Select from '../../../components/Shared/Select'
import { useStatus } from '../../Config/useStatus'
import { Div, Footer, WrapperInputs } from './styles'

interface CreateContractProps {
  name: string
  description: string
  active?: boolean
  date_start: Date
  date_end: Date
  progress: string
  negotiated_value: string
  phase_contract: string
  user_id: string
}

const CreateContract: React.FC = () => {
  // style colors customTheme
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { data } = useUsers()
  const { data: dataStatus } = useStatus()
  const selectOptionsUsers = data?.users
  const selectOptionsStatus = dataStatus?.status

  const formRef = useRef<FormHandles>(null)
  const [isSendingContract, setIsSendingContract] = useState(false)

  const handleSubmitCreateContract = useCallback(
    async (data: CreateContractProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Contract name is required'),
          description: Yup.string().required('Description is required'),
          date_start: Yup.string(),
          date_end: Yup.string(),
          negotiated_value: Yup.string().required('Negotiated value is required'),
          phase_contract: Yup.string().required('Phase cost is required'),
          user_id: Yup.string().required('Usuário é obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.date_start,
          date_end: data.date_end,
          progress: data.progress,
          negotiated_value: data.negotiated_value,
          phase_contract: data.phase_contract,
          user_id: data.user_id,
        }

        setIsSendingContract(true)
        await api.post(`/v1/contract/create/`, formData)

        navigate('/contract')

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        })
        setIsSendingContract(false)
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
    [addToast, navigate],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  const selectOptions = [
    { value: 'INICIAL' },
    { value: 'NEGOCIACAO' },
    { value: 'CONCLUIDO' },
    { value: 'FECHADO' },
    { value: 'PERDIDO' },
    { value: 'ANDAMENTO' },
  ]
  return (
    <>
      <Panel title="Create a new Contract" back="/contract">
        <Form
          ref={formRef}
          onSubmit={handleSubmitCreateContract}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Div>
            <WrapperInputs>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Number Contract"
              />

              <Input
                id="progress"
                type="text"
                name="progress"
                placeholder="Progress"
              />

              <Select name="phase_contract">
                <option key="0" value="">
                  Select phase contract
                </option>
                {selectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Select>

              <Input
                type="date"
                min="01/01/2021"
                max="31/12/2030"
                name="date_start"
                label="Data Start:"
              />
              {/* <Radio name="active" options={radioOptions} /> */}
            </WrapperInputs>

            <WrapperInputs>
              <Input
                type="number"
                name="negotiated_value"
                placeholder="Negotiated Value"
              />

              <Input type="number" name="real_cost" placeholder="Real cost" />

              <Select name="user_id">
                <option key={0}>Select a user</option>
                {selectOptionsUsers?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>

              <Input
                type="date"
                min="01/01/2021"
                max="31/12/2030"
                name="date_end"
                label="Data End:"
              />
              {/* <Input id='user_id' type='text' name='user_id' placeholder='Responsável' /> */}
            </WrapperInputs>
          </Div>
          <Input
            id="description"
            type="text"
            name="description"
            placeholder="Description"
          />
          <Footer>
            <Button
              disabled={isSendingContract}
              onClick={() => formRef.current?.submitForm()}
            >
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingContract ? <Loading /> : 'Save Register'}
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

export default CreateContract
