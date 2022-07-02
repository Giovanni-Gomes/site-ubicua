import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';
import Input from '../../components/Shared/Input';
import { BiText } from 'react-icons/bi';
import { FaTrash, FaImage } from 'react-icons/fa';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { CancelButton, Container, FormFooter } from './styles';

interface CreateMenuProps {
  title: string;
  description_one?: string;
  image_one?: string;
  description_two?: string;
  image_two?: string;
}

const CreateSectionTwo: React.FC = () => {
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
          description_one: Yup.string(),
          image_one: Yup.string(),
          description_two: Yup.string(),
          image_two: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/v1/header/create', {
          title: data.title,
          description_one: data.description_one,
          image_one: data.image_one,
          description_two: data.description_two,
          image_two: data.image_two,
        });

        navigate('/login');

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
          <h1>Cadastrar | Alterar 2º Secção</h1>
          <span className='subtitle'>preencha o formulário abaixo</span>

          <Input name="title" type="text" placeholder='Título' icon={BiText} />
          <Input name="description_one" type="text" placeholder='First Description' icon={BiText} />
          <Input name="image_one" type="text" placeholder='First Image' icon={BiText} />
          <Input name="description_two" type="text" placeholder='Second Description' icon={BiText} />
          <Input name="image_two" type="text" placeholder='Second Image' icon={BiText} />

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

export default CreateSectionTwo;

