import styled from 'styled-components'

import sectionOne from '/assets/backgrounds/background.svg';

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 3rem;
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

  &:first-child {
    --padding-top: 6rem;
    --heading-font-size: 41px;
    --padding-bottom: 4rem;

    flex: 1;
    background: url(${sectionOne}) no-repeat center;
    background-size: cover;
    text-align: center;
    p {
      text-align: justify;
      color: var(--color-quaternary);
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

  background: var(--bg-color);
  position: relative;
  z-index: 2;
  /* :nth-child(2n) {
  position: absolute;
  background-color: blue;
   margin-top: 6rem;
  }   */


`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  > header h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: 100rem;
  }
  > header p {
    margin: 1.8rem 0;
    font-size: 20px;
    color: var(--text-color);
    /* max-width: 95%; */
  }
  padding: var(--padding-top) var(--padding-bottom); /*5rem*/
`;

export const Background = styled.div`
  flex: 1;
  background: url(${sectionOne}) no-repeat center;
  background-size: cover;
`;

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
