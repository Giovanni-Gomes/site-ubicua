import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem 0.5rem 0 0;
  padding: 1rem;
  /* width */
  /* @media (max-width: 1440px) {
    width: calc(840px + ((100vw - 1440px) / 2));
  } */
  width: 100%;
  /* border-spacing: 0 6px; */

  /* min-width: 800px; */
  height: 20rem;
  border: 1px solid ${(props) => props.theme.colors['gray-700']};

  /* Dark Theme/Blue */
  background: ${(props) => props.theme.colors.white}; // ['primary-300']
  border-radius: 8px;

  > p{
    color: black; //${(props) => props.theme.colors['text-menu']}
    text-decoration: underline;
    font-size: 1.1rem;
    font-weight: 300;
    font-style: oblique;
  }
`
