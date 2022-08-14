import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 2rem;
  height: 100%;
  background: ${(props: any) => props.theme.colors.primary};
  border-radius: 10px;
  /* padding: 3px; */
`
// var(--color-tertiary);
export const WrapperHeader = styled.div`
  padding: 1rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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
    color: ${(props) => props.theme.colors['primary-300']};
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
    color: ${(props) => props.theme.colors['primary-300']};
    border-radius: 10px;
    &:hover {
      opacity: 0.5;
    }
  }
`

export const Input = styled.input`
  max-width: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  color: ${(props) => props.theme.colors['text-color']};
  font-size: 0.875rem;
  padding: 0.2rem 0.8rem;
  /* padding: 0.2rem; */

  :focus {
    background-color: ${(props) => props.theme.colors['primary-500']};
  }

  &::placeholder {
    opacity: 0.8;
    color: gray;
    /* padding: 0 0 0 10px; */
  }
  /* background: bg; */
  /* &:focus {
    border-color: bg;
  } */
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors['text-color']};
  font-size: 1.2rem;
  padding: 0.2rem;
`
