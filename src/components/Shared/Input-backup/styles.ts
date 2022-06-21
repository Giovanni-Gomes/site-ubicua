import styled from 'styled-components';

export const InputCustom = styled.input`
  border-style: solid;
  border-radius: 20px;
  padding: 0.7rem;
  margin: 0.5rem;
  font-size: 1rem;
  &:focus {
    border-color: var(--color-secondary);
    /* box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27); */
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
