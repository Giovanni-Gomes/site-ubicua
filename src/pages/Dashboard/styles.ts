import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 4rem auto 0;
  height: 100%;
  > p {
    max-width: 1278px;
    margin: 0.5rem auto;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    color: ${(props) => props.theme.colors['text-color']};
    span {
      font-size: 1.2rem;
    }
  }

  td > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`

export const TableContainer = styled.div`
    display: flex;
    gap: 1rem;
`
