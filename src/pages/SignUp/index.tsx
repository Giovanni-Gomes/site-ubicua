import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../../components/MenuForm/styles';
import Button from '../../components/Button'

import Input from '../../components/Input';

import { Grid, Gif, Carousel } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from "@giphy/js-types";
import { useAsync } from "react-async-hook";

import { AnimationContainer, Background, Container, Content, SignInGiphy, WrapperGif } from './styles';

const SignUp: React.FC = () => {
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

  return (
    <Container>
      <WrapperGif>
        <GifDemo />
      </WrapperGif>
      <Content>
        <AnimationContainer>
          <Form>
            <span className='title'>Registre-se</span>
            <span className='subtitle'>preencha o formulário abaixo</span>

            <Input type="text" placeholder='Nome' />
            <Input type="email" placeholder='E-mail' />
            <Input type="password" placeholder='Senha' />

            <Button type='submit' text='Cadastrar'/>

            <span className='terms'>
              Esta página está sujeita à Política de privacidade e aos Termos de serviço.
            </span>
          </Form>
          <Link to="/">
            Página inícial
          </Link>
        </AnimationContainer>
      
      </Content>
      {/* <CarouselDemo /> */}


      {/* <SignInGiphy /> */}
      {/* <Grid width={200} columns={3} fetchGifs={fetchGifs} /> */}
    </Container>
  );
}

export default SignUp;