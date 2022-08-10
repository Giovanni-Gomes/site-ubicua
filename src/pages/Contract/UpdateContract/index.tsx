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
import { useUsers } from '../../User/useUsers'
import Select from '../../../components/Shared/Select'
import { useStatus } from '../../Config/useStatus'
import { useContract } from '../useContracts'
import { Div, Footer, Wrapper } from './styles'

interface CreateContractProps {
  id: string
  name: string
  description: string
  active?: boolean
  date_start: string
  date_end: string
  phase_contract: string
  negotiated_value: string
  real_cost: string
  user_id: string
}

const UpdateContract: React.FC = () => {
  // style colors customTheme
  // const bg = useColorModeValue('hoverDark', 'hoverLight')
  const formRef = useRef<FormHandles>(null)
  const [isSendingContract, setIsSendingContract] = useState(false)
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { id } = useParams()
  const { data } = useUsers()
  const { data: dataStatus } = useStatus()
  const { data: dataContract } = useContract(String(id))

  const selectOptionsUsers = data?.users
  const selectOptionsStatus = dataStatus?.status

  formRef.current?.setFieldValue('name', dataContract?.name)
  formRef.current?.setFieldValue('description', dataContract?.description)
  formRef.current?.setFieldValue('phase_contract', dataContract?.phase_contract)
  formRef.current?.setFieldValue('date_start', dataContract?.date_start)
  formRef.current?.setFieldValue('date_end', dataContract?.date_end)
  formRef.current?.setFieldValue(
    'negotiated_value',
    dataContract?.negotiated_value,
  )
  formRef.current?.setFieldValue('user_id', dataContract?.user.id)
  console.log('status name: ', dataContract)
  console.log('user name: ', dataContract?.user.id)
  console.log('data: ', dataContract)
  const handleSubmitCreateContract = useCallback(
    async (data: CreateContractProps) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          id: Yup.string(),
          name: Yup.string().required('Nome do Projeto é Obrigatório'),
          description: Yup.string().required('Descrição é obrigatório'),
          date_start: Yup.string(), // Yup.date().required('Data é obrigatório'),
          date_end: Yup.string(), // Yup.date().required('Data é obrigatório'),
          phase_contract: Yup.string().required(
            'Fase do contrato é obrigatório',
          ),
          negotiated_value: Yup.string().required(
            'Valor negociado é obrigatório',
          ),
          real_cost: Yup.string().required('Custo real é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const formData = {
          id: data.id,
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.date_start,
          date_end: data.date_end,
          phase_contract: data.phase_contract,
          negotiated_value: data.negotiated_value,
          real_cost: data.real_cost,
          user_id: data.user_id,
        }

        setIsSendingContract(true)
        await api.post(`/v1/contract/update/${id}`, formData)
        // console.log("formData", result)
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
    [addToast, navigate, formRef],
  )

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault()
    formRef.current?.reset()
  }

  return (
    <>
      <Panel
        title={dataContract?.name ? dataContract.name : 'Atualize o Projeto'}
        back="/contract"
      >
        <Form
          ref={formRef}
          initialData={dataContract}
          onSubmit={handleSubmitCreateContract}
          style={{ width: '90%', margin: '0rem auto 0' }}
        >
          <Div>
            <Wrapper>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Number Project"
              />

              <Input
                id="progress"
                type="text"
                name="progress"
                placeholder="Progress"
              />

              <Select name="phase_contract">
                <option key={0}>Select a phase</option>
                <option key={1} value="negociação">
                  negociação
                </option>
                <option key={2} value="descartado">
                  descartado
                </option>
                <option key={3} value="cliente conquistado">
                  cliente conquistado
                </option>
                <option key={3} value="novo contato">
                  novo contato
                </option>
              </Select>

              <Input
                type="date"
                min="01/01/2021"
                max="31/12/2030"
                name="date_start"
                label="Data Início:"
              />
              {/* <Radio name="active" options={radioOptions} /> */}
            </Wrapper>

            <Wrapper>
              <Input
                type="number"
                name="negotiated_value"
                placeholder="Valor Negociado"
              />

              <Input type="number" name="real_cost" placeholder="Custo Real" />

              <Select name="user_id" defaultValue={dataContract?.user.id}>
                <option key={0} value="Select a user">
                  Select a user
                </option>
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
                label="Data Fim:"
              />
              {/* <Input id='user_id' type='text' name='user_id' placeholder='Responsável' /> */}
            </Wrapper>
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
      {/* ))} */}
    </>
  )
}

export default UpdateContract
