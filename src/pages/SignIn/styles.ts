import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/carousel/banner01.jpg';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  width: 100%;
  height: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-50px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  /* top: 7rem;
  left: 37.5rem;
  right: 37.5rem; */
  width: 100%;
  height: 100%;

  animation: ${appearFromLeft} 2s;

  form {
    width: 35rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 6rem;
    border-radius: 1rem;

    h1 {
      margin-bottom: 24px;
      color: #041fff;
    }
  }

  > a {
    color: #fff999;
    font-size: 1.5rem;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    align-items: center;

    /* svg {
      margin-right: 16px;
    } */

    &:hover {
      color: #996DFF;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const WrapperGif = styled.div`
  /* position: fixed;
  right: 0; */
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  height: 100%;
  width: 100%;

  > .gif {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const SignInGiphy = styled.div`
 flex: 1;
`


export const Input = styled.input`

  background: var(--color-tertiary);
  border: 1px solid var(--color-border);
  padding: 13px 18px;
  font-size: 14px;
  margin-top: 18px;

`
