import styled from 'styled-components';

export const Container = styled.div``;

export const TableCustom = styled.table`
  width: auto;
  border-collapse: collapse;
  align-items: center;
  th {
    padding: 5px;
    background: #15db95;
    text-align: left;
  }
  tbody {
    width: 100%;
    tr {
      text-align: left;
      border-bottom: 1px solid #bcbcbc;
      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`;
