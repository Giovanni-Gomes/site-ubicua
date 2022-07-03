import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';
import Input from '../../components/Shared/Input';
import { GrStatusGood } from 'react-icons/gr';
import { BiText } from 'react-icons/bi';
import { FaTrash, FaImage } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { CancelButton, Container, FormFooter } from './styles';

interface CreateMenuProps {
  title: string;
  logo: string;
}

const CreateHeader: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmitCreateMenu = useCallback(
    async (data: CreateMenuProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string()
            .required('Título é Obrigatório'),
          logo: Yup.string()
            .required('Logo Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/v1/home/create-header', {
          title: data.title,
          logo: data.logo,
        });

        navigate('/dashboard');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
        });
      } catch (err) {

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

  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmitCreateMenu}>
          <h1>Cadastrar novo menu</h1>
          <span className='subtitle'>preencha o formulário abaixo</span>

          <Input name="title" type="text" placeholder='Título' icon={BiText} />
          <Input name="logo" type="text" placeholder='Logo' icon={FaImage} />

          <FormFooter>
            <Button type="submit">Salvar Registro</Button>
            <CancelButton onClick={handleResetForm}>
              <FaTrash />
            </CancelButton>
          </FormFooter>
        </Form>
      </Container>
    </>
  );
}

export default CreateHeader;

