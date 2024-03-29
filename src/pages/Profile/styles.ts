import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  margin-top: 0 auto;
  > header {
    height: 66px;
    background: #28262e;
    display: flex;
    align-items: center;
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      svg {
        color: #999591;
        width: 30px;
        height: 30px;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto 0;
  width: 100%;
  form {
    margin: 2.3rem 0;
    width: 30rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
    h1 {
      margin-bottom: 8px;
      font-size: 32px;
      text-align: left;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 0px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
    input[name='old_password'] {
      margin-top: 18px;
    }
  }
`

export const AvatarInput = styled.div`
  margin-bottom: 8px;
  position: relative;
  align-self: center;
  img {
    width: 124px;
    height: 124px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${(props) => props.theme.colors.secondary}; //#ff9000;
    border-radius: 50px;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#F15BB5')};
    }
  }
`
