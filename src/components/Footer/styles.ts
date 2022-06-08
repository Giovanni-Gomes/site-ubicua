import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--color-footer);
  max-height: 393px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 0 4rem 8rem;
`;

export const Card = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding: 0rem 4rem; */
  /* width: 475px; */
  /* left: 500px; */
  > h3 {
    color: var(--color-quaternary);
    font-size: 1.125rem;
  }

  > ul {
    list-style: none;

    > li {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      margin: 1rem auto;

      a {
        color: var(--color-tertiary);
        text-decoration: none;
      }
      a:hover {
        color: var(--color-quaternary);
      }

    }
  }
`;

export const Under = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid var(--color-primary);
  opacity: 0.1;
  > a {
    color: var(--color-tertiary);
    font-size: 0.875rem;
    text-decoration: none;
  }

  > #wrapperImage {
    display: flex;
    gap: 1rem;

    > a {
        opacity: 1;
        fill: var(--color-primary);
        fill-opacity: 1;
      > img {
        width: 1.2rem;
      }
     
    }
  }
`;
