import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.white}; //var(--color-primary);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 0.1rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.primary}; //var(--color-primary)
  //color: #666360;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.colors.red}; //#c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${(props) => props.theme.colors.secondary};
      //var(--color-login);
      color: ${(props) => props.theme.colors.secondary}; //var(--color-login);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.secondary}; //var(color-secondary);
    `}
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.5rem;
  }
  & + label {
    margin-top: 8px;
  }

  input {
    flex: 1;

    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.primary}; //var(--color-secondary);
    &::placeholder {
      color: ${(props) => props.theme.colors.primary}; //var(--color-secondary);
    }
    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      //var(--color-secondary);
      /* box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27); */
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${(props) => props.theme.colors.red};
    color: #fff !important;
    &::before {
      border-color: ${(props) => props.theme.colors.red} transparent; //#eb1500
    }
  }
`

export const Label = styled.label`
  color: ${(props) => props.theme.colors['text-color']};
  margin-top: 0.2rem;
  margin-left: 0.5rem;
`
