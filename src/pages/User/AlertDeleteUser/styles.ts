import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors['gray-600']};
  /* color: black; */
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  gap: 2rem;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const ButtonAlertClose = styled(Popover.Button)`
  background-color: #8257e6;
  border-radius: 1rem;
  border-color: transparent;
  /* flex: 1 1 0%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: white;
  margin: 1rem 0.5rem;
  padding: 0.7rem;
  cursor: pointer;
  min-width: 6rem;

  &:hover {
    background-color: #996dff;
  }

  &:focus {
    border-color: #8257e6;
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
export const Button = styled.button`
  background-color: #8257e6;
  border-radius: 1rem;
  border-color: transparent;
  /* flex: 1 1 0%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: white;
  margin: 1rem 0.5rem;
  padding: 0.7rem;
  cursor: pointer;
  min-width: 6rem;

  &:hover {
    background-color: #996dff;
  }

  &:focus {
    border-color: #8257e6;
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