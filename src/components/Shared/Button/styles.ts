import styled from 'styled-components'

export const ButtonCustom = styled.button`
  background-color: ${(props) => props.theme.colors['primary-500']}; //#8257e6;
  border-radius: 8px;
  border-color: transparent;
  /* flex: 1 1 0%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: white;
  margin: 1rem 0.5rem;
  padding: 1rem;
  cursor: pointer;
  min-width: 6rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['primary-300']};
    //#996dff;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors['primary-300']}; //#8257e6;
    box-shadow: inset 0 0 0 calc(1px + 0px);
    outline: 1px solid transparent;
    outline-offset: 2px;
  }

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:disabled {
    opacity: 0.5;
  }
  &:disabled:hover {
    background-color: rgb(130 87 230 / 1);
  }
`
