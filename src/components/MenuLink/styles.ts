import styled from 'styled-components';

export const A = styled.a`
  text-decoration: none;
  color: var(--logo-color);
  display: block;
  position: relative;
  padding: 0.5rem 0;
  align-items: left;
  
 

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: hotpink;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  &:focus {
    border-color: #8257e6;
    padding: 0 0.5rem;
    border-radius: 4px;
    box-shadow: inset 0 0 0 calc(1px + 0px) #8257e6;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
