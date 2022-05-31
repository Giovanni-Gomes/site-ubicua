import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 33%;
  height: 12rem;
  border-radius: 0.8rem;
  margin: 1rem;
  
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
`;

export const CardHeader = styled.header`
  padding: .2rem .7rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Subtitle = styled.h4`
  font-size: .8rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

export const CardContent = styled.div`
  
`;