import styled from 'styled-components'
import { FaCloud } from 'react-icons/fa'

import sectionOne from '/assets/backgrounds/background.svg'

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-black);
    --icon-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
    --icon-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-primary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-secondary);
    --icon-color: var(--color-secondary);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-black);
    --icon-color: var(--color-tertiary);
  }

  &:first-child {
    --padding-top: 6rem;
    --heading-font-size: 41px;
    --padding-bottom: 11rem;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  /* gap: 5rem; */
  align-items: center;
  justify-content: flex-end;
  position: relative;

  > header {
    width: 50%;
  }

  > header h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    /* max-width: 50rem; */
  }
  > header p {
    margin: 20px 0;
    font-size: 16px;
    color: var(--text-color);
    /* max-width: 95%; */
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
  background: linear-gradient(90deg, ${(props) => props.theme.colors['gray-500']}, ${(props) => props.theme.colors.hoverDark}, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors['bg-color']});
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;
  @keyframes gradient {
    0% {
        background-position: 100% 50%;
    }
    50% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
  }

  > img {
    height: 20rem;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    border-radius: 1.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    left: 20rem;
    bottom: 0;
    &.top {
      left: 10rem;
      top: 0rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }
    &.bottom {
      left: 26rem;
      bottom: -1rem;
    }
  }
`
