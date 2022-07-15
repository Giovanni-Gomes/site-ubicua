import React, { useCallback, ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';
import { BiText } from 'react-icons/bi';
import { FaTrash, FaImage } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';

import { Loading } from '../../components/Site/WidgetForm/Loading';
import { Badge, Box, Flex, FormControl, FormLabel, HStack, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup } from '@chakra-ui/react';
import BoxForms from '../../components/Portal/BoxForms';

interface CreateMenuProps {
  title: string;
  description: string;
  progress: string;
  date: Date;
  negotiated: string;
}

const UpdateProject: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [title, setTitle] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {


      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string()
            .required('Título é Obrigatório'),
          description: Yup.string(),
          progress: Yup.string(),
          date: Yup.date().required('Data é obrigatório'),
          negotiated: Yup.string().required('Valor negociado é obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          name: data.title,
          description: data.description,
          progress: data.progress,
          negotiated_value: data.negotiated,
          date_start: data.date
        }


        setIsSendingFeedback(true);

        const result = await api.post('/v1/project/create', formData);

        console.log("formData", result);

        navigate('/Dashboard');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        });
        setIsSendingFeedback(false);
      } catch (err) {
        console.log(err);
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

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <>
      <Header />
      <Flex w='100vw' h='100vh' justify='center' align='center' bg='var(--bg-portal)'>
        <FormControl mt='200px' w='30rem' p='2rem'>
          <h1>Editar Projeto</h1>
          <FormLabel htmlFor='name'>Nome</FormLabel>
          <Input id='name' type='name' name='name' />

          <FormLabel htmlFor='description'>Descrição</FormLabel>
          <Input id='description' type='text' name="description" />

          <FormLabel htmlFor='active'>Ativo</FormLabel>
          <RadioGroup defaultValue='true'>
            <HStack spacing='24px'>
              <Radio value='true'>Ativo</Radio>
              <Radio value='false'>Inativo</Radio>
            </HStack>
          </RadioGroup>

          <FormLabel htmlFor='date_start'>Data de Início</FormLabel>
          <Input id='date_start' type='date' name='date_start' />

          <FormLabel htmlFor='date_end'>Data de Finalização</FormLabel>
          <Input id='date_end' type='date' name='date_end' />

          <FormLabel htmlFor='progress'>Progresso</FormLabel>
          <Input id='progress' type='text' name='progress' />

          <FormLabel htmlFor='negotiated_value'>Valor Negociado</FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField id='amount' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel htmlFor='real_cost'>Custo real</FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField id='amount' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel htmlFor='status'>Status</FormLabel>
          <Input id='status' type='text' name='status' />

          <FormLabel htmlFor='name'>Usuário</FormLabel>
          <Input id='name' type='name' name='name' />
        </FormControl>
      </Flex>
    </>
  );
}

export default UpdateProject;

