import styled from 'styled-components'
import { FaCloud } from 'react-icons/fa'

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;
    
    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);

  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;
    min-width: 16rem;

    > span{
      color: var(--text-color);
      margin-left: 10px;
      font-size: 1.8rem;
    }
  }

  
  > div.button {
    display: flex;
    gap: 1rem;

    > :nth-child(1) {
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      background: var(--logo-color);
      color: var(--bg-color);
      border: 1px solid var(--logo-color);
      text-decoration: none;
      min-width: 5rem;
      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px) #8257e6;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: var(--logo-color);
        border: 1px solid var(--logo-color);
        background-color: var(--bg-color);
      }

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    > :nth-child(2) {
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      background: transparent;
      color: var(--logo-color);
      border: 1px solid var(--logo-color);
      text-decoration: none;
      min-width: 7.2rem;

      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px) #8257e6;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: var(--bg-color);
        border: 1px solid var(--bg-color);
        background-color: var(--logo-color);
      }

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const UbicuaLogo = styled(FaCloud)`
  width: 2rem;
  height: 2rem;
  fill: var(--logo-color);
`;

export const MenuNav = styled.div`
  display: flex;
  gap: 3rem;
  font-weight: 500;
  /* margin-left: 2rem; */
  padding-right: 3rem;
  width: 100%;
  justify-content: end;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > header h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: 50rem;
  }
  > header p {
    margin: 20px 0;
    font-size: 16px;
    color: var(--text-color);
    max-width: 95%;
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
`;