import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute; */
  /* top: 2rem; */
  /* left: 0px; */
  width: 80%;
  /* height: 100%; */
  /* position: relative; */
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
    border-top-left-radius: 0;
    &.simple-form {
      border-top-left-radius: 1rem;
    }
    background: #EFF6FF;//${(props: any) => props.theme.textSecondary};

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
        cursor: pointer;

        font-size: 16px;
        color: var(--color-secondary);
        background: lightblue;

        &.active {
          background: #EFF6FF;
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
`;

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
  color: #EB1500;
  border-radius: 5px;
`


