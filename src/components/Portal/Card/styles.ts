import styled from 'styled-components';
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Container = styled.div`
  /* width: 309px; */
  min-width: 18.445rem;
  margin: 0.5rem 1rem;
  justify-content: space-between;
  border-radius: 0.8rem;

  &.info {
    background: ${props => props.theme.colors.primary};//props.colorMode === 'light' ? '#FFF' : 'red'//${(props: StyleFunctionProps) => props.colorScheme === 'light' ? '#FFF' : 'red'};//#2EC5CE;//blue;
    color: white;
  }

  &.success {
    background: ${props => props.theme.colors.secondary};//props.colorMode === 'light' ? '#FFF' : 'red'//${(props: StyleFunctionProps) => props.colorScheme === 'light' ? '#FFF' : 'red'};//#2EC5CE;//blue;
    color: white;
  }


`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin: 0.8rem;
  width: 100%;
`

export const CardHeader = styled.header`
  padding: 0.20rem 0.8rem;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const CardContent = styled.div`

`;
