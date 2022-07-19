import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: var(--bg-color); */
  clip: rect(auto, auto, auto, auto);
`;

export const Content = styled.header`
  z-index:5;
  
  background: var(--bg-color);
  display: flex;
  align-items: center;
  /* max-width: 1440px; */
  margin: 0 auto;
  /* padding: 100px 32px; */
  padding: 16px 32px;


  > h1 {
    display: flex;
    align-items: center;
    min-width: 30rem;

    > span{
      color: var(--text-color);
      margin-left: 10px;
      font-size: 1.8rem;
    }
  }
  
  > div.button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    > :nth-child(1) {
      font-weight: bold;
      padding: 0.5rem ;
      border-radius: 1rem;
      background: var(--logo-color);
      color: var(--bg-color);
      border: 1px solid var(--logo-color);
      text-decoration: none;
      width: 80px;
      display: flex;
      justify-content: center;
      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px) var(--logo-color);
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: var(--logo-color);
        border: 1px solid var(--logo-color);
        background-color: var(--bg-color);
      }

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    > :nth-child(2) {
      font-weight: bold;
      padding: 0.5rem ;
      border-radius: 1rem;
      background: transparent;
      color: var(--logo-color);
      border: 1px solid var(--logo-color);
      text-decoration: none;
      width: 115.2px;
      display: flex;
      justify-content: center;
      &:focus {
        box-shadow: inset 0 0 0 calc(3px + 0px) var(--logo-color);
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      &:hover {
        color: var(--bg-color);
        border: 1px solid var(--bg-color);
        background-color: var(--logo-color);
      }

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }

  position: fixed;
  /* position: fixed; */
  /* z-index: 1; */
  top: 0;
  left: 0;
  right: 0;

`;

export const MenuNav = styled.div`
  display: flex;
  gap: 3rem;
  font-weight: 500;
  /* margin-left: 2rem; */
  padding-right: 3rem;
  width: 100%;
  justify-content: end;
`;