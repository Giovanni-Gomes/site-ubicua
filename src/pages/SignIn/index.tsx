import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../components/WidgetForm/styles';
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from "../../services/api";
import giphyAPI from '../../services/giphy';

import { Grid, Gif, Carousel } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from "@giphy/js-types";
import { useAsync } from "react-async-hook";

import { AnimationContainer, Container, Content, SignInGiphy, WrapperGif } from './styles';

//const gf = new GiphyFetch('1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb')



const SignIn: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({
    type: '',
    message: ''
})

  let navigate = useNavigate();

  async function submitLogin(event: FormEvent) {
    event.preventDefault();

    await api.post('/v1/login/', {
      email,
      password
    });

  }

  const giphyFetch = new GiphyFetch("1V6GHHb75bB2t02EVqaO8Euc0hIQCGGb")

  //const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 10 })


  function GifDemo() {
    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
      const { data } = await giphyFetch.gif("BpJWIIYcGd2Cc");
      setGif(data);
    }, []);
    return gif && <Gif gif={gif} width={685} height={649}  noLink={true} className="gif" />;
  }

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


  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form onSubmit={submitLogin}>
            <h1>Faça Seu Login</h1>
            {/* arrumar os inputs  */}
            <Input type="email" placeholder="Email" change={event => setEmail(event.target.value)} />
            <Input type="password" placeholder="Senha" change={event => setPassword(event.target.value)} />

            <Button type='submit' text='Entrar' submit={() => navigate("/dashboard")}/>

          </Form>
          <Link to="/registrar">
            Registrar
          </Link>
        </AnimationContainer>
      
      </Content>
      {/* <CarouselDemo /> */}
      <WrapperGif>
        <GifDemo />
      </WrapperGif>


      {/* <SignInGiphy /> */}
      {/* <Grid width={200} columns={3} fetchGifs={fetchGifs} /> */}
    </Container>
  );
}

export default SignIn;