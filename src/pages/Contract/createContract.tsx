import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';

import { FaTrash, FaSave } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';

import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Panel } from '../../components/Portal/Panel';

import { CancelButton } from '../Config/styles';

import Input from '../../components/Shared/Input';

import { Loading } from '../../components/Site/WidgetForm/Loading';
import { useUsers } from '../User/useUsers';
import Select from '../../components/Shared/Select';
import { useStatus } from '../Config/useStatus';

interface CreateContractProps {
  name: string;
  description: string;
  active: boolean;
  date_start: Date;
  date_end: Date;
  negotiated_value: string;
  phase_contract: string;
  user_id: string;
}

const CreateContract: React.FC = () => {
  //style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight');
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { data } = useUsers();
  const { data: dataStatus } = useStatus();
  const selectOptionsUsers = data?.users;
  const selectOptionsStatus = dataStatus?.status;

  const formRef = useRef<FormHandles>(null);
  const [isSendingContract, setIsSendingContract] = useState(false);


  const handleSubmitCreateContract = useCallback(
    async (data: CreateContractProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome do Projeto é Obrigatório'),
          description: Yup.string().required('Descrição é obrigatório'),
          date_start: Yup.string(), //Yup.date().required('Data é obrigatório'),
          date_end: Yup.string(), //Yup.date().required('Data é obrigatório'),
          progress: Yup.string().required('Progresso é obrigatório'),
          negotiated: Yup.string().required('Valor negociado é obrigatório'),
          phase_contract: Yup.string().required('Fase do contrato é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.date_start,
          date_end: data.date_end,
          negotiated_value: data.negotiated_value,
          user_id: data.user_id
        }

        setIsSendingContract(true);
        const result = await api.post(`/v1/contract/create/`, formData);

        console.log("formData", result);

        navigate('/contract');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        });
        setIsSendingContract(false);
      } catch (err) {
        console.log("error", err);
        if (err instanceof Yup.ValidationError) {

          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro cadastro, tente novamente',
        });

      }
    },
    [addToast, navigate],
  );

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault();
    formRef.current?.reset();
  }
  const selectOptions = [{ value: 'USER' }, { value: 'ADMIN' }, { value: 'SUPER_ADMIN' }, { value: 'CLIENT' }, { value: 'OPERATOR' }, { value: 'COMERCIAL' }];
  return (
    <>
      <Header />
      <Panel title="Create a new Contract" back='/contract'>

        <Form ref={formRef} onSubmit={handleSubmitCreateContract} style={{ width: '90%', margin: '0rem auto 0' }}>
          <Flex w='100%' gap='2rem' justify='center' align='center' mb='0.5rem'>
            <Flex direction='column' w='100%'>
              <Input id='name' type='text' name='name' placeholder='Number Contract' label='Nome do Projeto' />

              <Input id='progress' type='text' name='progress' placeholder='Progress' label='Progresso' />

              <Select name="phase_contract" label="Status">
                <option key={0} value='Select a status'>Selecione um status</option>
                {selectOptions?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Select>

              <Input type="date" min="01/01/2021" max="31/12/2030" name='date_start' label='Data Início:' />
              {/* <Radio name="active" options={radioOptions} /> */}
            </Flex>

            <Flex direction='column' w='100%'>
              <Input type="number" name="negotiated_value" placeholder='Valor Negociado' label='Valor Negociado' />

              <Select name="user_id" label="Responsável">
                <option key={0} value='Select a user'>Select a user</option>
                {selectOptionsUsers?.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>

              <Input type='date' min="01/01/2021" max="31/12/2030" name='date_end' label='Data Fim:' />
            </Flex>
          </Flex>

          <Input id='description' type='text' name='description' placeholder='Description' label='Descrição' />

          <Flex align='center' w='100%' justify='space-between'>
            <Button disabled={isSendingContract} onClick={() => formRef.current?.submitForm()}>
              <FaSave style={{ marginRight: '0.5rem' }} />
              {isSendingContract ? <Loading /> : 'Save Register'}
            </Button>
            <CancelButton onClick={handleResetForm} >
              <FaTrash size={25} />
            </CancelButton>
          </Flex>
        </Form>
      </Panel>
    </>
  );
}

export default CreateContract;
