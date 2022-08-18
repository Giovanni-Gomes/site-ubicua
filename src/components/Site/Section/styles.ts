import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translate(50px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`

export const Container = styled.div`
  --padding-top: 2.25rem;
  --padding-bottom: 6rem;
  --heading-font-size: 3rem;
  --content-width: 100%;

  &.blue {
    --bg-color: ${(props) => props.theme.colors.tertiary};
    --text-color: ${(props) => props.theme.colors.secondary};
    --logo-color: ${(props) => props.theme.colors.hoverDark};
    --icon-color: ${(props) => props.theme.colors.secondary};
  }
  &.beige {
    --bg-color: ${(props) => props.theme.colors.secondary};
    --text-color: ${(props) => props.theme.colors.quaternary};
    --logo-color: ${(props) => props.theme.colors.primary};
    --icon-color: ${(props) => props.theme.colors.quaternary};
  }
  &.white {
    --bg-color: ${(props) => props.theme.colors.primary};
    --text-color: ${(props) => props.theme.colors.quaternary};
    --logo-color: ${(props) => props.theme.colors.secondary};
    --icon-color: ${(props) => props.theme.colors.quaternary};
  }
  &.black {
    --bg-color: ${(props) => props.theme.colors.quaternary};
    --text-color: ${(props) => props.theme.colors.tertiary};
    --logo-color: ${(props) => props.theme.colors.hoverDark};
    --icon-color: ${(props) => props.theme.colors.tertiary};
  }

  &:first-child {
    /* --padding-top: 2rem;
    --heading-font-size: 41px;
    --padding-bottom: 8rem;
    flex: 1;
    background-size: cover;
    text-align: center; */
    height: 100vh;
    p {
      /* text-align: justify; */
      padding-left: 0.5rem;
      color: ${(props) => props.theme.colors['text-menu']};
    }
    button {
      animation: ${appearFromRight} 4s;
      text-align: center;
      padding: 0.6rem 2rem 0.6rem 2rem;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors['text-menu']};
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 8px;
      /* text-shadow: black 0.1em 0.1em 2px; */
      /* max-width: 20%; */
      cursor: pointer;
      &:hover {
        color: ${shade(0.8, '#9B5DE5')};
        background-color: ${(props) => props.theme.colors.secondary};
        transition: 0.5s ease-in-out;
      }
    }

    /* font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px; */

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 74px;
      --p-font-size: 24px;
    }
  }

  /* background: ${(props) => props.theme.colors.hoverLight}; */
  position: relative;
  z-index: 2;
`

// export const Content = styled.div`
//   /* max-width: 1440px; */
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   position: relative;
//   div p {
//     margin: 1.8rem 0;
//     font-size: 20px;
//     color: ${(props) => props.theme.colors['text-menu']};
//   }
//   > div h2 {
//     animation: ${appearFromRight} 2s;
//     font-size: var(--heading-font-size);
//     color: ${(props) => props.theme.colors.white};
//     text-shadow: black 0.1rem 0.1em 2px;
//     //text-shadow: black 0.1em 0.1em 0.2em;
//     padding: 2rem 0 2rem 0;
//     max-width: 100rem;
//   }
//   padding: 0 0 6rem 4rem;
// `
export const Wrapper = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  position: absolute;
  right: 10rem;
  > div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    max-width: 10rem;
  }
`

/* padding: var(--padding-top) var(--padding-bottom);  */
/* 5rem */
/* > header p {
    margin: 1.8rem 0;
    font-size: 20px;
    color: ${(props) => props.theme.colors['text-menu']};

  }; */
// export const Background = styled.div`
//   flex: 1;
//   background: url(${sectionOne}) no-repeat center;
//   background-size: cover;
// `
