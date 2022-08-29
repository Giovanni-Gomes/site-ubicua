import styled from 'styled-components'

export const Container = styled.div``

export const TableCustom = styled.table`
  /* margin-top: 5rem; */
  /* align-items: center; */
  border-collapse: collapse;
  width: 100%;
  /* margin: 0 auto; */
  border-spacing: 0 6px;
  /* min-width: 600px; */
  thead {
    th {
      /* background: ${(props) => props.theme.colors.primary}; */
      padding: 0.5rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors['gray-100']};
      line-height: 1.6;
      border-bottom: 1px solid ${(props) => props.theme.colors['gray-100']};

      /* &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      } */
    }
  }
  th {
    flex-direction: row;
    align-items: flex-start;
    /* width: 1295px;
    height: auto; */
    padding: 5px;
    /* background: ${(props) => props.theme.colors.primary}; */
  }
  tbody {
    width: 100%;

    tr {
      border-bottom: 1px solid #bcbcbc;
      td {
        /* padding: 150px 10px; */
        border: 0;
        font-size: 14px;
        font-weight: normal;
        color: ${(props) => props.theme.colors['text-color']};
        padding: 0.5rem;
        text-align: center;
        &.title {
          color: ${(props) => props.theme.colors.quaternary};
        }
        &:first-child {
          /* width: 20%; */
          padding-left: 0.3rem;
        }
        &:last-child {
          padding-right: 0.3rem;
        }
        img {
          /* width: 38px;
          height: 38px;
          border-radius: 50%; */
          align-items: center;
        }

        p {
          color: ${(props) => props.theme.colors['text-color']};
        }
      }
    }
  }
`

const STATUS_COLORS = {
  desenvolvimento: 'desenvolvimento',
  concluído: 'concluído',
  interrompido: 'interrompido',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
