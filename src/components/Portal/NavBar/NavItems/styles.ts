import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: any) => props.theme.colors['text-menu']};
  /* color: red;
  background-color: red; */
  /* width: 10rem;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black; */
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    font-size: 1rem;
    font-weight: 400;
    &:hover {
      /* filter: brightness(1.2); */
      /*background-color: ${(props: any) => props.theme.hover};*/
      border-bottom: 3px solid ${(props: any) => props.theme.colors.quaternary}; //['text-menu']

      /* border-radius: 1rem;
      padding: 0.5rem 0.5rem; */
      //color: ${(props: any) => props.theme.hover};//var(--color-quaternary);
    }
  }
`

