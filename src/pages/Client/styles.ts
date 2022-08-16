import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div``

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
