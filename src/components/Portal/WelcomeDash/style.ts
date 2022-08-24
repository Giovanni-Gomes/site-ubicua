import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0.5rem 0 0;
  padding: 1rem 0.5rem ;
  /* width */
  /* @media (max-width: 1440px) {
    width: calc(840px + ((100vw - 1440px) / 2));
  } */
  width: 100%;
  /* border-spacing: 0 6px; */

  /* min-width: 800px; */
  height: 18rem;

  /* Dark Theme/Blue */
  background: ${(props) => props.theme.colors.white}; // ['primary-300']
  border-radius: 8px;

  > p{
    color: black; //${(props) => props.theme.colors['text-menu']}
  }
`
