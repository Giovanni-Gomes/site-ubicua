import styled from 'styled-components'

export const Container = styled.div`
  /* position: relative; */
  /* width: 1440px;
  height: 1877px; */


  max-width: 1440px;
  margin: 4rem auto 0;
  height: 100%;
  /* width: 100%; */
  > p {
    /* display: flex; */
    max-width: 1278px;
    margin: 0.5rem auto;
    border-radius: 8px;
    /* background: linear-gradient(90deg, ${(props) => props.theme.colors['gray-800']}, ${(props) => props.theme.colors.hoverDark}, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors['bg-color']});
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
      0% {
          background-position: 100% 50%;
      }
      50% {
          background-position: 0% 50%;
      }
      100% {
          background-position: 100% 50%;
      }
    } */
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    color: ${(props) => props.theme.colors['text-color']};
    span {
      font-size: 1.2rem;
    }
  }



`

// export const TableContainer = styled.section`
//   // margin-top: 10px;
//   margin: 10px 10px;
//   table {
//     width: 100%;
//     border-spacing: 0 6px;
//     thead {
//       th {
//         padding: 5px;
//         text-align: left;
//         text-transform: uppercase;
//       }
//     }
//     th {
//       color: #969cb3;
//       font-weight: normal;
//       padding: 20px 32px;
//       text-align: left;
//       font-size: 16px;
//       line-height: 24px;
//     }
//     td {
//       padding: 20px 10px;
//       border: 0;
//       background: #28262e;
//       font-size: 16px;
//       font-weight: normal;
//       color: #fff;
//       &.title {
//         color: #15db95;
//       }
//       img {
//         width: 42px;
//         height: 42px;
//         border-radius: 50%;
//         align-items: center;
//       }
//     }
//     td:first-child {
//       border-radius: 8px 0 0 8px;
//     }
//     td:last-child {
//       border-radius: 0 8px 8px 0;
//     }
//   }
// `

export const TableContainer = styled.div`
    display: flex;
    gap: 1rem;
`
