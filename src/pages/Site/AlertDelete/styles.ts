import { shade } from 'polished';
import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors['gray-600']};
  /* color: black; */
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
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
  background-color: ${(props) => props.theme.colors['primary-300']};
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
    background-color: ${(props) => props.theme.colors['primary-500']};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors['primary-500']};
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


export const ButtonDelete = styled.button`
  background-color: ${(props) => props.theme.colors.red};
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
    background-color: ${shade(0.2, '#AB222E')};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors['primary-500']};
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

  > svg {
    margin-right: 0.4rem;
  }
`
