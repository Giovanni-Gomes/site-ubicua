

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
import Select from '../../components/Shared/Select';
import CheckBox from '../../components/Shared/CheckBox';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import Button from '../../components/Shared/Button';
import Header from '../../components/Portal/Header';
import { FaTrash } from 'react-icons/fa';
import TextArea from '../../components/Shared/TextArea';

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  active?: boolean;
  type_user_id: string;
  color: string
  number: string
  secret: string
  month: string
  telephone: string
  time: string
  website: string
  week: string
  date: string
  meeting: string
  search: string
  range: string
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

  function handleResetForm(event: React.MouseEvent) {
    event?.preventDefault();
    formRef.current?.reset();
  }

  const selectOptions = [
    { value: 'brazil', label: 'Brazil' },
    { value: 'usa', label: 'USA' },
    { value: 'argentina', label: 'Argentina' },
  ]

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

          <Select name="country" label="Choose your country">
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>

          <CheckBox
            name="privacy"
            value="consent"
            label="I agree with the privacy policy"
          />

          <TextArea label="Describe yourself" name="bio" />

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

export default CreateUser;

{/* <Input label="Name" name="name" />
<Input label="Choose a color" name="color" type="color" />
<Input label="Choose a number" name="number" type="number" />
<Input name="secret" type="hidden" value="teste" />
<Input label="email" name="email" type="email" />
<Input label="Month" name="month" type="month" min="2020-09" />
<Input
  label="Telephone"
  name="telephone"
  type="tel"
  placeholder="Ex: XX-XXXXX-XXXX"
  pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
/>
<Input label="password" name="password" type="password" />
<Input label="time" name="time" type="time" min="09:00" max="18:00" />
<Input
  label="website"
  placeholder="https://example.com"
  pattern="https://.*"
  name="website"
  type="url"
/>
<Input
  label="week"
  min="2021-W01"
  max="2021-W52"
  name="week"
  type="week"
/>
<Input
  label="date"
  min="2021-01-01"
  max="2021-12-31"
  name="date"
  type="date"
/>
<Input
  label="meeting-time"
  min="2020-06-07T00:00"
  max="2020-06-14T00:00"
  name="meeting"
  type="datetime-local"
/>
<Input
  label="search"
  aria-label="Search through site content"
  name="search"
  type="search"
/>
<Input type="range" name="volume" label="Volume" min="0" max="10" /> */}
