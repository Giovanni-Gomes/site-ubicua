import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: .25rem 1rem;
  font-size: 1rem;
  background: transparent;
  color: #999;
  border: none;
  position: relative;

  &:hover {
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    width: 20%;
    height: 0.2rem;
    background-color: #fff;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  cursor: pointer;
`
