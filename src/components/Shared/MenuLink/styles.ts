import styled from 'styled-components'

export const ContainerA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  display: block;
  position: relative;
  padding: 0.5rem 0;
  align-items: left;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${(props) => props.theme.colors.secondary};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  /* &:focus {
    border-color: var(--text-color);
    padding: 0 0.5rem;
    border-radius: 4px;
    box-shadow: inset 0 0 0 calc(1px + 0px) var(--text-color);
    outline: 2px solid transparent;
    outline-offset: 2px;
  } */
`
