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
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { FaTrash } from 'react-icons/fa';
import { useByIdUser } from './useUsers';
import Select from '../../components/Shared/Select';

interface UpdateUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  active?: boolean;
  type_user: string;
  avatar?: string;
}

const UpdateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { id } = useParams();
  const { data } = useByIdUser(String(id));

  //console.log("data", data);
  formRef.current?.setFieldValue('name', data?.name);
  formRef.current?.setFieldValue('email', data?.email);
  formRef.current?.setFieldValue('password', data?.password);
  formRef.current?.setFieldValue('active', data?.active);
  formRef.current?.setFieldValue('avatar', data?.avatar);
  formRef.current?.setFieldValue('type_user', data?.type_user);

  const handleSubmitCreateUser = useCallback(
    async (data: UpdateUserProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          id: Yup.string(),
          name: Yup.string()
            .required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
          active: Yup.string(),
          avatar: Yup.string(),
          type_user: Yup.string().required('Tipo de usuário é obrigatório'),
        });

        const formData = {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          active: data.active,
          avatar: data.avatar,
          type_user: data.type_user,
        };

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post(`/v1/users/update/${String(id)}`, formData);

        navigate('/users');

        addToast({
          type: 'success',
          title: 'Register Successfully',
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
  const selectOptions = [{ value: 'USER' }, { value: 'ADMIN' }, { value: 'SUPER_ADMIN' }, { value: 'CLIENT' }, { value: 'OPERATOR' }, { value: 'COMERCIAL' }];

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

          <Select name="type_user" value={data?.type_user} >
            {selectOptions.map(type => (
              <option key={type.value} value={type.value}>
                {type.value}
              </option>
            ))}
          </Select>

          {/* <Input name="type_user" type="text" placeholder="type user" icon={FiLock} /> */}

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
