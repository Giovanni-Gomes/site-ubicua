import styled from 'styled-components'

import sectionOne from '/assets/backgrounds/background.svg'

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-secondary); /*var(--color-quaternary)*/
    --logo-color: var(--color-black);
    --icon-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
    --icon-color: var(--color-quaternary);
  }
  &.white {
    --bg-color: var(--color-primary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-secondary);
    --icon-color: var(--color-quaternary);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-black);
    --icon-color: var(--color-tertiary);
  }
  background: var(--bg-color);
  position: relative;

`



export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > header h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    font-size: 3rem;
  }
  > header p {
    max-width: 30rem;
    margin: 2rem auto;
    font-size: 16px;
    color: var(--text-color);
    /* max-width: 95%; */
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
  background: linear-gradient(-45deg, ${(props) => props.theme.colors['bg-color']}, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.hoverDark}, ${(props) => props.theme.colors['gray-800']});
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > div {
    max-width: 20rem;
    /* text-align: center; */
    margin: 0.5rem 0;
    > p {
      text-align: justify;
      padding: 0.5rem 2rem;
    }
  }
`

// export const Background = styled.div`
//   flex: 1;
//   background: url(${sectionOne}) no-repeat center;
//   background-size: cover;
// `;
