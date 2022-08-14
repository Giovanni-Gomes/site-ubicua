import styled, { keyframes } from 'styled-components'

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*background-color: red; ${(props) => props.theme.colors.primary}; */
  clip: rect(auto, auto, auto, auto);
`

export const Content = styled.header`
  z-index: 5;
  background: ${(props) => props.theme.colors.hoverDark};
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem 0.5rem;

  > h1 {
    display: flex;
    align-items: center;
    min-width: 30rem;

    > span {
      color: ${(props) => props.theme.colors.white};
      margin-left: 10px;
      font-size: 1.8rem;
    }
  }

  > div.button {
    animation: ${appearFromTop} 2s;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    > :nth-child(1) {
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 8px;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.primary};
      text-decoration: none;
      width: 80px;
      display: flex;
      justify-content: center;
      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px)
          ${(props) => props.theme.colors['primary-500']};
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
        border: 1px solid ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors['primary-700']};
      }

      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    > :nth-child(2) {
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 8px;
      background: transparent;
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.secondary};
      text-decoration: none;
      width: 115.2px;
      display: flex;
      justify-content: center;
      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px)
          ${(props) => props.theme.colors.secondary};
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: ${(props) => props.theme.colors['primary-700']};
        border: 1px solid ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors['secondary-500']};
      }

      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const MenuNav = styled.div`
  animation: ${appearFromTop} 2s;
  display: flex;
  gap: 3rem;
  font-weight: 500;
  padding-right: 3rem;
  width: 100%;
  justify-content: end;
`
