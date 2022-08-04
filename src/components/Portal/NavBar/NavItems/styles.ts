import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props: any) => props.theme.colors['text-menu']};
  /* color: red;
  background-color: red; */
  a {
    display: flex;
    justify-content: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    font-size: 1rem;
    font-weight: 700;
    &:hover {
      /* filter: brightness(1.2); */
      /*background-color: ${(props: any) => props.theme.hover};*/
      border-bottom: 3px solid ${(props: any) => props.theme.colors.secondary}; //['text-menu']

      /* border-radius: 1rem;
      padding: 0.5rem 0.5rem; */
      //color: ${(props: any) => props.theme.hover};//var(--color-quaternary);
    }
  }
`

/* width: calc(10rem * 0.8); */
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  color: ${(props: any) => props.theme.textPrimary};

//  /* color: red;
//  background-color: red; */

//  > .icon-button {
//    text-decoration: none;
//    font-size: 1rem;
//    color: ${(props: any) => props.theme.bgPortal};
//    /* --button-size: calc(10rem * 0.5); */
//    /* width: var(--button-size); */
//    /* width: 100%; */
//    /* height: var(--button-size); */
//    /* height: 100%; */

//    /* padding: 5px; */
//    margin: 2px;
//    display: flex;
//    gap: 0.2rem;
//    align-items: center;
//    justify-content: center;
//    transition: filter 100ms;
//    font-weight: bold;
//    padding: 0.5rem 0.5rem;
//    &:hover {
//      filter: brightness(1.2);
//      background-color: ${(props: any) => props.theme.hover};
//      border-radius: 1rem;
//      padding: 0.5rem 0.5rem;
//      //color: ${(props: any) => props.theme.hover};//var(--color-quaternary);
//    }
//  }
