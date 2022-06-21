import React, { useRef, FormEvent, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from "@giphy/js-types";
import { useAsync } from "react-async-hook";

import getValidationErrors from '../../utils/getValidationsErros';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from "../../services/api";

import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';

import { AnimationContainer, Container, Content, WrapperGif } from './styles';
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
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

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





  // external api giphys login
  //const gf = new GiphyFetch('1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb')
  const giphyFetch = new GiphyFetch("1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb");
  //const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 10 })
  function GifDemo() {
    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
      const { data } = await giphyFetch.gif("BpJWIIYcGd2Cc");
      setGif(data);
    }, []);
    return gif && <Gif gif={gif} width={685} height={649} noLink={true} className="gif" />;
  }




  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmitLogin}>
            <h1>Faça Seu Login</h1>
            {/* arrumar os inputs  */}
            <Input type="email" placeholder="Email" />

            <Input type="password" placeholder="Senha" />


            <Button type="submit">Entrar</Button>

          </Form>
          <Link to="/registrar">
            Registrar
          </Link>
        </AnimationContainer>

      </Content>
      <WrapperGif>
        <GifDemo />
      </WrapperGif>


    </Container>
  );
}

export default SignIn;



// function CarouselDemo() {
//   const fetchGifs = (offset: number) =>
//     giphyFetch.search("dogs", { offset, limit: 5 });
//   return <Carousel fetchGifs={fetchGifs} gifHeight={800} gutter={6} />;
// }

//GifDemo();

// async function giphy() {


//   const a = await giphyAPI.get('/random', {
//     headers: {
//       'api_key': '1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb',
//       'tag': 'burrito'
//     },
//     data: {}
//   });

//   console.log(a);


// }

// giphy();



{/* <SignInGiphy /> */ }
{/* <Grid width={200} columns={3} fetchGifs={fetchGifs} /> */ }

{/* <CarouselDemo /> */ }

// codigo refatorado - xarlys souza
// const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [status, setStatus] = useState({
//     type: '',
//     message: ''
//   })


//   async function handleSubmitLogin(event: FormEvent) {
//     event.preventDefault();

//     await api.post('/v1/login/', {
//       email,
//       password
//     });

//   }


{/* <Input type="email" placeholder="Email" change={event => setEmail(event.target.value)} />

<Input type="password" placeholder="Senha" change={event => setPassword(event.target.value)} /> */}
