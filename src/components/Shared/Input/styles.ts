import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-primary);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 0.1rem;
  width: 100%;
  border: 0.5px solid var(--color-primary);
  color: #666360;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #eb1500; //#c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid var(--color-login);
      color: var(--color-login);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: var(color-secondary);
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
    color: var(--color-secondary);
    &::placeholder {
      color: var(--color-secondary);
    }
    &:focus {
      border-color: var(--color-secondary);
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
    background: #eb1500;
    color: #fff !important;
    &::before {
      border-color: #eb1500 transparent;
    }
  }
`

export const Label = styled.label`
  color: black;
  margin-top: 8px;
`
