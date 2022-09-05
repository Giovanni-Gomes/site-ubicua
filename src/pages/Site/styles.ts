import { Popover } from '@headlessui/react'
import styled, { ThemeConsumer } from 'styled-components'
import { shade } from 'polished'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  margin: 0 auto;
  &:first-of-type {
    margin-top: 6rem;
  }
  form {
    width: 100%;

    padding: 2rem 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    &.pages {
      border-top-left-radius: 0;
    }
    background: #eff6ff; //${(props: any) => props.theme.textSecondary};

    h1 {
      margin-bottom: 0.5rem;
      color: ${(props: any) => props.theme.colors['gray-600']};
    }

    span {
      margin-bottom: 0.2rem;
      color:${(props) => props.theme.colors['gray-500']};
    }

  }
  ul {
    display: flex;
    list-style: none;
    li {
      button {
        padding: 0 1rem;
        border-radius: 0.5rem;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        border: none;

        font-size: 16px;
        color: ${(props) => props.theme.colors['gray-400']};
        background: lightblue;

        &.active {
          background: #eff6ff;
          /* border-bottom: solid #EFF6FF; */
          color: ${(props) => props.theme.colors.green};
          &:hover {
            color: ${(props) => props.theme.colors.green};
          }
        }

        &:hover {
          color: ${(props) => props.theme.colors.hoverDark};
        }
      }
    }

  }
`

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
export const FormFooter = styled.div`
  display: flex;
  align-items: right;
  justify-content: space-between;

  Button {
    float: left;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    margin: 0.6rem 0rem 0rem 0rem;
  }
`

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  border-color: transparent;
  cursor: pointer;

  width: 56px;
  height: 56px;
  color: #eb1500;
  border-radius: 5px;
`

export const Back = styled(Link)`
  position: absolute;
  top: 45px;
  left: 45px;
  :first-child {
    color: ${(props) => props.theme.colors['gray-600']};
  }
`