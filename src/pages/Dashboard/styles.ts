import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  /* width: 1440px;
  height: 1877px; */

  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  /* width: 100%; */
`;


export const TableContainer = styled.section`
  // margin-top: 10px;
  margin: 10px 10px;
  table {
    width: 100%;
    border-spacing: 0 6px;
    thead {
      th {
        padding: 5px;
        text-align: left;
        text-transform: uppercase;
      }
    }
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 10px;
      border: 0;
      background: #28262e;
      font-size: 16px;
      font-weight: normal;
      color: #fff;
      &.title {
        color: #15db95;
      }
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        align-items: center;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
