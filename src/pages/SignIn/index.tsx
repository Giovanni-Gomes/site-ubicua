import React, { useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from "../../services/api";

import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';

import { AnimationContainer, Container, Content, Background } from './styles';
import { useAuth } from '../../components/hooks/provider/auth';
import { useToast } from '../../components/hooks/provider/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmitLogin = useCallback(
    async (data: SignInFormData) => {
      console.log("form submission");
      // addToast({
      //   type: 'error',
      //   title: 'Erro na autenticação',
      //   description:
      //     'Ocorreu um erro ao fazer login, cheque suas credenciais',
      // });
      try {
        formRef.current?.setErrors({});
        // if (data.email === '' || data.email === null) {
        //   formRef.current?.setFieldError('email', 'e-mail Obrigatório');
        // }
        if (data.email === '' || data.email === null) {
          formRef.current?.setErrors({
            email: 'nome é obrigatório',
            password: 'email é obrigatório',
          });
        }

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        // await schema.validate(data, {
        //   abortEarly: false,
        // });
        // schema.validate(data).catch(function (err) {
        //   err.name; // => 'ValidationError'
        //   err.errors; // => [{ key: 'field_too_short', values: { min: 18 } }]
        // });
        await schema
          .validate(data)
          .then(valid => {
            console.log("Valor válido:", valid);
            //valid - true or false
          });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/dashboard');
      } catch (err) {

        // if (err instanceof Yup.ValidationError) {
        //   //console.log("yup erros" + err);

        //   const errors = getValidationErrors(err);

        //   formRef.current?.setErrors(errors);
        //   console.log("yup erros " + JSON.stringify(err));


        //   return;
        // }
        console.log(err);

        // disparar um toast (mensagens de ao canto das tela)
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais',
        });
      }
    },
    [signIn, addToast, navigate],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmitLogin}>
            <h1>Faça Seu Login</h1>
            {/* arrumar os inputs  */}
            <Input name="email" type="email" placeholder="Email" />

            <Input name="password" type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>

          </Form>
          <Link to="/registrar">
            Registrar
          </Link>
        </AnimationContainer>

      </Content>
      <Background />

    </Container>
  );
}

export default SignIn;
