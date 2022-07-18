import React, { useCallback, ChangeEvent, useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';
import { FaTrash, FaImage } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';

import { Loading } from '../../components/Site/WidgetForm/Loading';
import { Badge, Box, Flex, FormControl, FormLabel, HStack, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Spacer, Textarea } from '@chakra-ui/react';
import BoxForms from '../../components/Portal/BoxForms';
import { CancelButton } from '../Site/styles';
import { getOneProjectById, GetOneProjectResponse, Project, useProject } from './useProjects';
import { url } from 'inspector';

interface UpdateProjectProps {
  id: string;
  name: string;
  description: string;
  active: boolean;
  date_start: Date;
  date_end: Date;
  progress: string;
  negotiated: string;
  real_cost: string;
  status_id: string;
  user_id: string;
}

const UpdateProject: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();
  const id = useParams();

  const [actualProject, setActualProject] = useState<Project[]>([])
  const [title, setTitle] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const handleSubmitUpdateProject = useCallback(
    async (data: UpdateProjectProps) => {


      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          id: Yup.string(),
          name: Yup.string()
            .required('Título é Obrigatório'),
          description: Yup.string(),
          date_start: Yup.date().required('Data é obrigatório'),
          date_end: Yup.date().required('Data é obrigatório'),
          progress: Yup.string(),
          negotiated: Yup.string().required('Valor negociado é obrigatório'),
          real_cost: Yup.string().required('Valor negociado é obrigatório'),
          status_id: Yup.string().required('Status é obrigatório'),
          user_id: Yup.string().required('Usuário é obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          id: data.id,
          name: data.name,
          description: data.description,
          active: data.active,
          date_start: data.date_start,
          date_end: data.date_end,
          progress: data.progress,
          negotiated_value: data.negotiated,
          real_cost: data.real_cost,
          status_id: data.status_id,
          user_id: data.user_id
        }


        setIsSendingFeedback(true);



        const result = await api.put(`/v1/project/update/${id}`, formData);

        console.log("formData", result);

        navigate('/project');

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

        const responseProject = await api.get(`/v1/project/findOne/${id}`);
        setActualProject(responseProject.data);
      }
    },
    [addToast, navigate],
  );


  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault();
    formRef.current?.reset();
  }

  // useEffect(() => {


  //   fetchProject();
  // }, [])
  console.log(id)
  console.log(actualProject)
  return (
    <>
      <Header />
      <FormControl p='2rem' mx='auto' maxW='80%' bg='var(--bg-portal)' borderRadius='0.5rem' mt='80px' mb='30px' display='flex' flexDirection='column' alignItems='center' gap='3rem'>
        <Form ref={formRef} onSubmit={handleSubmitUpdateProject} style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Flex direction='column'>
            <FormLabel htmlFor='name'>Nome</FormLabel>
            <Input id='name' type='name' name='name' mb='2rem' />

            <FormLabel htmlFor='description'>Descrição</FormLabel>
            <Textarea id='description' name="description" mb='2rem' />

            <FormLabel htmlFor='active'>Ativo</FormLabel>
            <RadioGroup defaultValue='true' mb='2rem'>
              <HStack spacing='24px'>
                <Radio value='true'>Ativo</Radio>
                <Radio value='false'>Inativo</Radio>
              </HStack>
            </RadioGroup>

            <FormLabel htmlFor='progress'>Progresso</FormLabel>
            <Input id='progress' type='text' name='progress' mb='2rem' />

            <FormLabel htmlFor='status'>Status</FormLabel>
            <Input id='status' type='text' name='status' mb='2rem' />
          </Flex>

          <Flex direction='column'>
            <FormLabel htmlFor='date_start'>Data de Início</FormLabel>
            <Input id='date_start' type='date' name='date_start' mb='2rem' />

            <FormLabel htmlFor='date_end'>Data de Finalização</FormLabel>
            <Input id='date_end' type='date' name='date_end' mb='4.5rem' />

            <FormLabel htmlFor='negotiated_value'>Valor Negociado</FormLabel>
            <NumberInput max={50} min={10} mb='1rem'>
              <NumberInputField id='amount' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormLabel htmlFor='real_cost'>Custo real</FormLabel>
            <NumberInput max={50} min={10} mb='2rem'>
              <NumberInputField id='amount' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormLabel htmlFor='name'>Usuário</FormLabel>
            <Input id='name' type='name' name='name' mb='2rem' />
          </Flex>

          <Flex align='center' justify='space-around' w='100%'>
            <Button type='submit'>
              Salvar
            </Button>
            <CancelButton onClick={handleResetForm}>
              <FaTrash size={25} />
            </CancelButton>
          </Flex>
        </Form>

        {/* {actualProject.map(project => (
          <>
            <h1 style={{ fontSize: '2rem' }}>Editar Projeto {project.name}</h1>
            <Form key={project.id} ref={formRef} onSubmit={handleSubmitUpdateProject} style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Flex direction='column'>
                <FormLabel htmlFor='name'>Nome</FormLabel>
                <Input id='name' type='name' name='name' mb='2rem' />

                <FormLabel htmlFor='description'>Descrição</FormLabel>
                <Textarea id='description' name="description" mb='2rem' />

                <FormLabel htmlFor='active'>Ativo</FormLabel>
                <RadioGroup defaultValue='true' mb='2rem'>
                  <HStack spacing='24px'>
                    <Radio value='true'>Ativo</Radio>
                    <Radio value='false'>Inativo</Radio>
                  </HStack>
                </RadioGroup>

                <FormLabel htmlFor='progress'>Progresso</FormLabel>
                <Input id='progress' type='text' name='progress' mb='2rem' />

                <FormLabel htmlFor='status'>Status</FormLabel>
                <Input id='status' type='text' name='status' mb='2rem' />
              </Flex>

              <Flex direction='column'>
                <FormLabel htmlFor='date_start'>Data de Início</FormLabel>
                <Input id='date_start' type='date' name='date_start' mb='2rem' />

                <FormLabel htmlFor='date_end'>Data de Finalização</FormLabel>
                <Input id='date_end' type='date' name='date_end' mb='4.5rem' />

                <FormLabel htmlFor='negotiated_value'>Valor Negociado</FormLabel>
                <NumberInput max={50} min={10} mb='1rem'>
                  <NumberInputField id='amount' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <FormLabel htmlFor='real_cost'>Custo real</FormLabel>
                <NumberInput max={50} min={10} mb='2rem'>
                  <NumberInputField id='amount' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <FormLabel htmlFor='name'>Usuário</FormLabel>
                <Input id='name' type='name' name='name' mb='2rem' />
              </Flex>

              <Flex align='center' justify='space-around' w='100%'>
                <Button type='submit'>
                  Salvar
                </Button>
                <CancelButton onClick={handleResetForm}>
                  <FaTrash size={25} />
                </CancelButton>
              </Flex>
            </Form>
          </>
        ))} */}

      </FormControl>
    </>
  );
}

export default UpdateProject;

