import styled from 'styled-components'

// import chartExample from '/assets/portal/chartexample.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem 1rem 1rem;
  padding: 1rem 0.5rem 0;
  background: ${(props) => props.theme.colors.white};

  /* width: 100%; */
  /* @media (min-width: 1440px) {
    width: calc(28rem + ((100vw - 1440px) / 2));
  } */
  max-width: 450px;

  border-spacing: 0 6px;

  min-width: 27.8rem;
  height: 14rem;

  /* Dark Theme/Green */
  /* background: #FFFF; */
  border-radius: 8px;

  /* Inside auto layout */
  /* flex: none;
  order: 0;
  flex-grow: 0; */
`

export const ChartBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin: 1rem 1rem; */

  padding: 1rem;

  /* @media (min-width: 1440px) {
    width: calc(820px + ((100vw - 1440px) / 2));
  } */
  /* max-width: 100%; */

  max-width: 100%;
  border-spacing: 0 6px;

  min-width: 420px;
  height: 14rem;
`

/* background: url(${chartExample}) no-repeat center;
background-size: cover; */
