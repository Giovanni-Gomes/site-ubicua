import styled, { keyframes } from 'styled-components';

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

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  position: absolute;
  background: #444;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #999;
  animation: ${appearFromBottom} 0.2s;

  > li {
    padding: 0.5rem 0;
    /* border-bottom: 1px solid #999; */

    &:first-child{
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`