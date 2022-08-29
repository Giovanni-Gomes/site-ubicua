import styled from 'styled-components'

export const Container = styled.section`
  &.WrapperCard {
    width: 100%;
    display: flex;
    justify-content: center;
    /* gap: 1.5rem; */
    max-width: 1278px;
    margin: 0 auto;
  }

  /* &.card-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */

  &.card-section {
    width: 100%;
    /* margin-top: 5rem; */
    display: flex;
    gap: 1rem;
    max-width: 1278px;
    margin: 0 auto;
    /* flex-wrap: wrap; */
    /* justify-content: center; */
  }

  &.table-section {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    max-width: 1278px;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.colors['gray-700']};
    /* background: ${(props) => props.theme.colors.tertiary}; */
    padding: 0 1rem;
    border-radius: 8px;

  }
`

export const Title = styled.h2`
  text-align: center;
  margin: 1rem;
  color: ${(props) => props.theme.colors['gray-500']}
`
