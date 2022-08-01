import styled from 'styled-components'

export const Container = styled.div`
  /* @media (min-width: 1360px) {
    width: calc(1370px + ((100vw - 1440px) / 2));
  } */
  /* max-width: 100%; */
  border-radius: 0.8rem;
  /* margin-top: 8rem; */
  /* margin: 1rem; */

  opacity: 0.8;
  display: flex;
  /* width: 100%; */
  /* height: 100vh; */
  flex-direction: column;
  word-wrap: break-word;
  /* background-color: #ffffff; */
  /* border: 1px solid #EFF2F5; */
  background-clip: border-box;
  box-shadow: none;

  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0rem;

  padding: 1rem;

  &.blue {
    background: blue;
    color: white;
  }

  &.white {
    background: white;
  }

  &.beige {
    background: beige;
  }

  &.black {
    background: black;
  }

  &.transparent {
    background-color: transparent;
  }
`

export const CardHeader = styled.header`
  /* padding: .2rem .7rem; */

  /* justify-content: space-between; */
  /* align-items: stretch; */
  /* flex-wrap: wrap; */
  /* padding: 0.25rem 2.25rem; */

  /* background-color: var(--bg-secondary); */
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  /* display: flex; */
  /* align-items: center; */
  display: inline;
`

export const Title = styled.h2`
  font-size: 1.6rem;
  margin: 0 0.75rem 0 0;
  flex-wrap: wrap;
`

export const Subtitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  color: var(--color-primary);
`

export const CardToolbar = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-primary);
  }
`

export const CardContent = styled.div``
