import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem 1rem 1rem 0;
  /* width */
  /* @media (max-width: 1440px) {
    width: calc(840px + ((100vw - 1440px) / 2));
  } */
  width: 100%;
  max-width: 800px;
  /* border-spacing: 0 6px; */

  /* min-width: 800px; */
  height: 14rem;

  /* Dark Theme/Blue */
  background: #2ec5ce;
  border-radius: 8px;

  /* Inside auto layout */
  /* flex: none;
  order: 0;
  flex-grow: 0; */
`
