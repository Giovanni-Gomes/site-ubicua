import styled from "styled-components";
import { shade } from "polished"

export const Button = styled.a`
  color: ${(props: any) => props.theme.colors.white};
  background-color: ${(props: any) => props.theme.colors.primary};
  padding: 0;
  position: absolute;
  top: 30rem;
    left: 5rem;
  opacity: 0;
  margin: 0;
  cursor: pointer;
  text-align: center;
  padding: 0.6rem 2rem 0.6rem 2rem;
  font-size: 1.4rem;
  border-radius: 8px;
  &:hover {
    color: ${shade(0.8, '#9B5DE5')};
    background-color: ${(props: any) => props.theme.colors.secondary};
    transition: 0.5s ease-in-out;
  }
  /* &.button1 {
    top: 30rem;
    left: 5rem;
   }
  &.button2 {
    top: 25rem;
    left: 5rem;
  }
  &.button3 {
    top: 20rem;
    left: 5rem;
  } */
`