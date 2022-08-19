import styled from 'styled-components'

export const ContainerFlags = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.2rem;
`

export const SelectFlag = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 0.5rem;
  /* margin: 0rem 0.3rem 0rem 0.3rem; */
  > img {
    filter: grayscale(1);

    &.selected {
      /* background: red; */
      filter: grayscale(0);
      &:hover {
        filter: grayscale(0);
      }
    }
    &:hover {
      filter: grayscale(0.5);
    }
  }
`
