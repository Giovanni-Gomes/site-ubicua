import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  /* position: absolute; */
  /* top: 2rem; */
  /* left: 0px; */
  width: 100%;
  /* height: 100%; */
  display: flex;

  form {
    /* position: absolute; */
    /* align-items: center; */
    margin: 6rem auto;
    /* top: 400rem; */
    /* left: 8rem; */
    /* right: 8rem; */
    width: 80%;

    padding: 2rem 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background: #eff6ff; //${(props: any) => props.theme.textSecondary};

    h1 {
      margin-bottom: 0.5rem;
      color: var(--color-secondary);
    }

    span {
      margin-bottom: 0.2rem;
      color: var(--color-secondary);
    }

    a {
      color: var(--color-secondary);
      display: block;
      margin-top: 0.2rem;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }
`

export const FormFooter = styled.div`
  display: flex;
  align-items: right;
  /* background-color: red; */
  justify-content: space-between;

  Button {
    float: left;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    /* align-items: center; */
    /* justify-content: space-between; */

    margin: 0.6rem 0rem 0rem 0rem;
  }
`

export const CancelButton = styled.button`
  /* flex: 1 1 0%; */
  display: flex;
  align-items: center;
  border-color: transparent;
  cursor: pointer;

  width: 56px;
  height: 56px;
  color: #eb1500;
  border-radius: 5px;
`
