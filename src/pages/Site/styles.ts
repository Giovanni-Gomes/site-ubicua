import { Popover } from '@headlessui/react'
import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  margin: 0 auto;
  &:first-of-type {
    margin-top: 6rem;
  }
  form {
    /* position: absolute; */
    /* align-items: center; */
    /* margin: 6rem auto; */

    /* top: 400rem; */
    /* left: 8rem; */
    /* right: 8rem; */
    width: 100%;
    /* width: 80%; */
    /* margin-top: 1.563rem; */

    padding: 2rem 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    &.pages {
      border-top-left-radius: 0;
    }
    background: #eff6ff; //${(props: any) => props.theme.textSecondary};

    h1 {
      margin-bottom: 0.5rem;
      color: var(--color-secondary);
    }

    span {
      margin-bottom: 0.2rem;
      color: var(--color-secondary);
    }

    a {
      color: var(--color-secondary);
      display: block;
      margin-top: 0.2rem;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }
  ul {
    display: flex;
    list-style: none;

    li {
      /* position: relative; */

      /* &:nth-child(2) {
        left: 4.5rem;
      }

      &:nth-child(3) {
        left: 9.375rem;
      } */

      button {
        /* position: absolute; */
        padding: 0 1rem;
        border-radius: 0.5rem;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        border: none;

        font-size: 16px;
        color: var(--color-secondary);
        background: lightblue;

        &.active {
          background: #eff6ff;
          /* border-bottom: solid #EFF6FF; */
          /* color: #FFF; */
          &:hover {
            color: var(--color-secondary);
          }
        }

        /* &:first-of-type{
          border-left: none;
        } */

        &:hover {
          color: ${shade(0.2, '#F4EDE8')};
          /* border: 0.01rem solid #8257e6;
          border-bottom: none; */
        }
      }
    }
  }
`

export const ButtonAlert = styled(Popover.Button)`
  cursor: pointer;
  background-color: transparent;
`

export const ButtonDetails = styled(Popover.Button)``

export const PopContainer = styled(Popover)``

export const PopPanelAlert = styled(Popover.Panel)`
  position: fixed;
  z-index: 10;
  top: 50%; /* Metade da altura da tela */
  left: 50%; /* Metade da largura da tela */
  margin-top: -150px; /* Metade da altura do elemento */
  margin-left: -190px; /* Metade da largura do elemento */
`

export const PopPanelDetails = styled(Popover.Panel)`
  position: fixed;
  z-index: 10;
  top: 50%; /* Metade da altura da tela */
  left: 50%; /* Metade da largura da tela */
  margin-top: -250px; /* Metade da altura do elemento */
  margin-left: -320px; /* Metade da largura do elemento */
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
export const FormFooter = styled.div`
  display: flex;
  align-items: right;
  /* background-color: red; */
  justify-content: space-between;

  Button {
    float: left;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    /* align-items: center; */
    /* justify-content: space-between; */

    margin: 0.6rem 0rem 0rem 0rem;
  }
`

export const CancelButton = styled.button`
  /* flex: 1 1 0%; */
  display: flex;
  align-items: center;
  border-color: transparent;
  cursor: pointer;

  width: 56px;
  height: 56px;
  color: #eb1500;
  border-radius: 5px;
`

// import { shade } from 'polished'
// import styled from 'styled-components'

// export const Container = styled.div`
//   /* position: absolute; */
//   /* top: 2rem; */
//   /* left: 0px; */
//   width: 80%;
//   /* height: 100%; */
//   /* position: relative; */
//   display: flex;
//   flex-direction: column;
//   justify-content: baseline;
//   margin: 0 auto;

//   &:first-of-type {
//     margin-top: 6rem;
//   }

//   form {
//     /* position: absolute; */
//     /* align-items: center; */
//     /* margin: 6rem auto; */

//     /* top: 400rem; */
//     /* left: 8rem; */
//     /* right: 8rem; */
//     width: 100%;
//     /* width: 80%; */
//     /* margin-top: 1.563rem; */

//     padding: 2rem 6rem 2rem;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     border-radius: 1rem;
//     border-top-left-radius: 0;
//     &.simple-form {
//       border-top-left-radius: 1rem;
//     }
//     background: var(--bg-portal); //#EFF6FF;//${(props: any) =>
//       props.theme.textSecondary};

//     h1 {
//       margin-bottom: 0.5rem;
//       color: var(--color-secondary);
//     }

//     span {
//       margin-bottom: 0.2rem;
//       color: var(--color-secondary);
//     }

//     a {
//       color: var(--color-secondary);
//       display: block;
//       margin-top: 0.2rem;
//       text-decoration: none;
//       transition: color 0.2s;
//       &:hover {
//         color: ${shade(0.2, '#F4EDE8')};
//       }
//     }
//   }

//   ul {
//     display: flex;
//     list-style: none;

//     li {
//       /* position: relative; */

//       /* &:nth-child(2) {
//         left: 4.5rem;
//       }

//       &:nth-child(3) {
//         left: 9.375rem;
//       } */

//       button {
//         /* position: absolute; */
//         padding: 0 1rem;
//         border-radius: 0.5rem;
//         border-bottom-left-radius: 0rem;
//         border-bottom-right-radius: 0rem;
//         border: none;
//         cursor: pointer;

//         font-size: 16px;
//         color: var(--color-secondary);
//         background: lightblue;

//         &.active {
//           background: #eff6ff;
//           /* border-bottom: solid #EFF6FF; */
//           /* color: #FFF; */
//           &:hover {
//             color: var(--color-secondary);
//           }
//         }

//         /* &:first-of-type{
//           border-left: none;
//         } */

//         &:hover {
//           color: ${shade(0.2, '#F4EDE8')};
//           /* border: 0.01rem solid #8257e6;
//           border-bottom: none; */
//         }
//       }
//     }
//   }
// `
