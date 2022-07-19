import styled, { keyframes } from 'styled-components';

export const Container = styled.nav`
--bg: ${(props: any) => props.theme.navBar};
--bg-accent: #484a4d;
--text-color: #dadce1;
--nav-size: 1rem;
--border-radius: 8px;
--speed: 300ms;
// height: var(--nav-size);
/* z-index: 10; */

/* --border: 1px solid #474a4d; */
/* background: var(--bg); */
/* padding: 0 1rem; */
/* border-bottom: var(--border); */

// a {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   text-decoration: none;
//   gap: 0.5rem;
// }

button {
  cursor: pointer;
  /* padding-top: 0.2rem; */
  margin-top: 0.3rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  background: transparent;
  border: none;

}

> .navbar-nav {

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1440px) {
    overflow-x: scroll;
  }
  ::-webkit-scrollbar {
    height: .4rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: violet;
  }
  max-width: 1024px
}
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  position: absolute;
  background: #444;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 1rem;
  /* padding: 0.5rem 1rem; */
  border-radius: 4px;
  color: #999;
  animation: ${appearFromBottom} 0.2s;



  > li {
    /* padding: 0.5rem 1rem; */
    /* border-bottom: 1px solid #999; */
    &:first-child{
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:hover {

      background: #333;
    }
  }
`
