import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { CancelButton, Container, FormFooter } from './styles';
import api from '../../services/api';
import Input from '../../components/Shared/Input';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { FaTrash } from 'react-icons/fa';

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  active?: boolean;
  type_user_id: string;
}


const CreateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmitCreateUser = useCallback(
    async (data: CreateUserProps) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
          typetype_user_idUser: Yup.string().required('Tipo de usuário é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/v1/users/create', {
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
          type_user_id: 'd6e46846-7688-4a81-b0f4-8c57037d2029'
        });

        navigate('/login');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
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

  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmitCreateUser}>
          <h1>Cadastrar novo usuário</h1>
          <span className='subtitle'>preencha o formulário abaixo</span>

          <Input name="name" type="text" placeholder='Nome' icon={FiUser} />
          <Input name="email" type="email" placeholder='E-mail' icon={FiMail} />
          <Input name="password" type="password" placeholder='Senha' icon={FiLock} />
          <Input name="type_user_id" type="text" placeholder='Tipo de Usuário' icon={FiLock} />

          <FormFooter>

            <Button type="submit">Salvar Registro</Button>

            <CancelButton>
              <FaTrash />
            </CancelButton>
          </FormFooter>





        </Form>
      </Container>
    </>
  );
}

export default CreateUser;
