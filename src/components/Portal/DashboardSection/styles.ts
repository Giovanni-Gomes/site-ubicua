import styled from 'styled-components';

export const Container = styled.section`
  &.WrapperCard {
    display: flex;

  }

  /* &.card-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */

  &.card-section {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
  }

  &.table-section {
    display: flex;
  }
`;
