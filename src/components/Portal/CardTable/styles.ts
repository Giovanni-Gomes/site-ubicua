import styled from 'styled-components'

export const Container = styled.div`
  /* @media (min-width: 1360px) {
    width: calc(1370px + ((100vw - 1440px) / 2));
  } */
  /* max-width: 100%; */
  /* border-radius: 0.8rem; */
  /* margin-top: 8rem; */
  /* margin: 1rem; */
  width: 35rem;
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
  margin-bottom: 1rem;
  position: relative;

  &.projects, &.contracts {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors['text-menu']};
    > a {
      position: absolute;
      top: 1.5rem;
      right: 0.6rem;
      color: ${(props) => props.theme.colors['text-menu']};
    }
  }

  &.users, &.feedbacks {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors['gray-600']};
    > a {
      position: absolute;
      top: 1.5rem;
      right: 0.6rem;
      color: ${(props) => props.theme.colors['gray-600']};
    }
  }



  &.transparent {
    background-color: transparent;
  }



  background: ${(props: any) => props.theme.colors.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  /* padding: 2px; */
  
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
  font-size: 1.4rem;
  /* margin: 0 0.75rem 0 0; */
  /* flex-wrap: wrap; */
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
