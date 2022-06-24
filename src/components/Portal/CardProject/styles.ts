import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 1px solid #EFF2F5;
  box-shadow: none;
  border-radius: 1rem;
  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0rem;

  &.blue {
    background: blue;
    color: white;
  }

  &.white {
    background: white;
  }

  &.beige {
    background: beige;
  }

  &.black {
    background: black;
  }

  &.transparent {
    background-color: transparent;
  }
`;

export const CardHeader = styled.header`
  /* padding: .2rem .7rem; */

  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  min-height: 120px;
  padding: 0 2.25rem;
  background-color: red;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  /* display: flex; */
  /* align-items: center; */
  display: inline;


`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0.75rem 0 0;
  flex-wrap: wrap;
`;

export const Subtitle = styled.h4`
  font-size: .8rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  color: var(--color-primary);
`;

export const CardToolbar = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-primary);
  }
`

export const CardContent = styled.div`

`;
