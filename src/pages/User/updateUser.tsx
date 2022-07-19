

import React, { useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../components/hooks/provider/toast';

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { CancelButton, Container, FormFooter } from './styles';
import api from '../../services/api';
import Input from '../../components/Shared/Input';
import Select from '../../components/Shared/Select';
import CheckBox from '../../components/Shared/CheckBox';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { FaTrash } from 'react-icons/fa';
import TextArea from '../../components/Shared/TextArea';
import { useByIdUser } from './useUsers';

interface UpdateUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  active?: boolean;
  type_user_id: string;
}


const UpdateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { id } = useParams();
  const { data } = useByIdUser(String(id));

  //const result = data;
  console.log("data", data);

  const handleSubmitCreateUser = useCallback(
    async (data: UpdateUserProps) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
          type_user: Yup.string().required('Tipo de usuário é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/v1/users/update', {
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
          type_user: 'd6e46846-7688-4a81-b0f4-8c57037d2029'
        });

        navigate('/users');

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

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault();
    formRef.current?.reset();
  }
  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} initialData={data} onSubmit={handleSubmitCreateUser}>
          <h1>Atualizar usuário</h1>
          <span className='subtitle'>preencha o formulário abaixo</span>

          <Input name="name" type="text" placeholder="name" icon={FiUser} />
          <Input name="email" type="email" placeholder="e-mail" icon={FiMail} />
          <Input name="password" type="password" placeholder="password" icon={FiLock} />
          <Input name="type_user" type="text" placeholder="type user" icon={FiLock} />

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

export default UpdateUser;
