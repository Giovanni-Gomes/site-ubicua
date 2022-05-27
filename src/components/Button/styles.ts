import styled from 'styled-components';

export const ButtonCustom = styled.button`
  background-color: #8257e6;
  border-radius: 1rem;
  border-color: transparent;
  /* flex: 1 1 0%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  color: white;
  margin: 1rem 0.5rem;
  padding: 1rem 0;

  &:hover {
    background-color: #996DFF;
  }

  &:focus {
    border-color: #8257e6;
    box-shadow: inset 0 0 0 calc(2px + 0px) rgb(24 24 27);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:disabled {
    opacity: 0.5;
  }
  &:disabled:hover {
    background-color: rgb(130 87 230 / 1);
  }
`;
