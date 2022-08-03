import styled from 'styled-components'

export const Container = styled.div``

export const TableCustom = styled.table`
  /* margin-top: 5rem; */
  /* align-items: center; */
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0 6px;
  min-width: 600px;
  thead {
    th {
      background: ${(props: any) => props.theme.primary};
      padding: 0.5rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 0.875rem;
      color: #28262e;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
  }
  th {
    flex-direction: row;
    align-items: flex-start;
    /* width: 1295px;
    height: auto; */
    padding: 5px;
    background: ${(props: any) => props.theme.primary};
  }
  tbody {
    width: 100%;

    tr {
      border-bottom: 1px solid #bcbcbc;
      td {
        /* padding: 150px 10px; */
        border: 0;
        background: ${(props: any) => props.theme.secondary}; //#28262e;
        font-size: 14px;
        font-weight: normal;
        color: #28262e; //${(props: any) => props.theme.navBar};
        padding: 0.5rem;
        text-align: center;
        &.title {
          color: #15db95;
        }
        &:first-child {
          width: 20%;
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
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    //${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
