import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 20%;
  margin: 1rem 1rem;
  justify-content: space-between;
  border-radius: 0.8rem;

  /* opacity: 0.8; */

  &.info {
    background: blue;
    color: white;
  }

  &.success {
    background: green;
  }

  &.danger {
    background: red;
  }

  &.black {
    background: black;
  }

  &.white {
    background: ${(props: any) => props.theme.navBar};
    /* background: ${(props: any) => props.theme.textPrimary}; */
  }







`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 6rem;
  margin: 0.8rem;
  /* justify-content: center; */
  width: 100%;
`

export const CardHeader = styled.header`
  padding: 0.2rem 0.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Subtitle = styled.h4`
  font-size: .8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const CardContent = styled.div`

`;
