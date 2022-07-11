import styled from 'styled-components';

export const Container = styled.div`

`;

export const TableCustom = styled.table`
  /* margin-top: 5rem; */
  border-collapse: collapse;
  align-items: center;
  width: 100%;
  border-spacing: 0 6px;
  thead {
    th {
      background: red;
      padding: 10px;
      text-align: left;
      text-transform: uppercase;
    }
  }
  th {
    flex-direction: row;
    align-items: flex-start;
    /* width: 1295px;
    height: auto; */
    padding: 5px;
    background: ${(props: any) => props.theme.navBar};
    text-align: left;
  }
  tbody {
    width: 100%;
    tr {
      text-align: left;
      border-bottom: 1px solid #bcbcbc;
      td {
        padding: 150px 10px;
        border: 0;
        background: #28262e;
        font-size: 16px;
        font-weight: normal;
        color: red;
        padding: 10px;
        text-align: left;
        &.title {
        color: #15db95;
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
`;
