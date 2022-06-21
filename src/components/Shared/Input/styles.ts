import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-primary);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid var(--color-secondary);
  color: #666360;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid var(--color-quaternary);
      color: var(--color-quaterna);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  display: flex;
  align-items: center;
  & + div {
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
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
