import styled from 'styled-components'
import { Popover } from '@headlessui/react'


export const ButtonAlert = styled(Popover.Button)`
  cursor: pointer;
  background-color: transparent;
`

export const ButtonDetails = styled(Popover.Button)``

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

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

export const Div = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
