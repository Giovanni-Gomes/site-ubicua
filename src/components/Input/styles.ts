import styled from 'styled-components';

export const InputCustom = styled.input`
  border-style: double;
  border-radius: 10px;
  padding: 0.7rem;
  margin: 0.5rem;
  font-size: 1rem;
  &:focus {
    border-color: #8257e6;
    box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
