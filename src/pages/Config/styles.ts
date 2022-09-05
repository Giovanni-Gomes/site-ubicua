import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  margin: 0 auto;

  &:first-of-type {
    margin-top: 6rem;
  }

  form {
    width: 100%;
    padding: 2rem 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border-top-left-radius: 0;
    background: #eff6ff; //${(props: any) => props.theme.textSecondary};

    h1 {
      margin-bottom: 0.5rem;
      color: ${(props: any) => props.theme.colors['gray-600']};
    }

    span {
      margin-bottom: 0.2rem;
      color:${(props) => props.theme.colors['gray-500']};
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

  ul {
    display: flex;
    list-style: none;
    li {
      button {
        padding: 0 1rem;
        border-radius: 0.5rem;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        border: none;

        font-size: 16px;
        color: ${(props) => props.theme.colors['gray-400']};
        background: lightblue;

        &.active {
          background: #eff6ff;
          color: ${(props) => props.theme.colors.green};
          &:hover {
            color: ${(props) => props.theme.colors.green};
          }
        }

        &:hover {
          color: ${(props) => props.theme.colors.hoverDark};
        }
      }
    }

  }
`

export const FormFooter = styled.div`
  display: flex;
  align-items: right;
  justify-content: space-between;
  margin-top: 1rem;

  Button {
    float: left;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.4rem;
    margin: 0.6rem 0rem 0rem 0rem;
  }
`

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  border-color: transparent;
  cursor: pointer;

  width: 56px;
  height: 56px;
  color: ${(props) => props.theme.colors.red}; // #eb1500;
  border-radius: 8px;
`

export const FormInputsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
