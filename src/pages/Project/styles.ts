import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div``

export const ButtonAlert = styled(Popover.Button)``

export const ButtonDetails = styled(Popover.Button)``

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

export const PopContainer = styled(Popover)``

export const PopPanelAlert = styled(Popover.Panel)`
  position: fixed;
  z-index: 10;
  top: 50%; /* Metade da altura da tela */
  left: 50%; /* Metade da largura da tela */
  margin-top: -150px; /* Metade da altura do elemento */
  margin-left: -190px; /* Metade da largura do elemento */
`

export const PopPanelDetails = styled(Popover.Panel)`
  position: fixed;
  z-index: 10;
  top: 50%; /* Metade da altura da tela */
  left: 50%; /* Metade da largura da tela */
  margin-top: -250px; /* Metade da altura do elemento */
  margin-left: -320px; /* Metade da largura do elemento */
`

export const Span = styled.span`
  font-size: 1.5rem;
`
