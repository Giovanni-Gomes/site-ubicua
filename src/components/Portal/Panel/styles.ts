import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 2rem;
  height: 100%;
  background: var(--color-tertiary);
  border-radius: 10px;
  padding: 3px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  height: 30px;
  width: 275.6px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    background: bg;
    border-radius: 10px;
    &:hover {
        opacity: 0.5;
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  gap: 0.3rem;
  height: 30px;
  width: 275.6px;
  justify-content: end;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    background: bg;
    border-radius: 10px;
    &:hover {
        opacity: 0.5;
    }
  }
`

export const Input = styled.input`
  max-width: 250px;
  border-radius: 20px;
  color: tomato;
  font-size: 15px;

  &::placeholder {
    opacity: 0.6;
    color: gray;
    padding: 0 0 0 10px;
  }
  /* background: bg; */
  /* &:focus {
    border-color: bg;
  } */
`

export const Title = styled.h1`

`