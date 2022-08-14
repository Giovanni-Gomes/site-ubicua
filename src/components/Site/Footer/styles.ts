import styled from 'styled-components'

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.black};
  max-height: 393px;
  width: 100%;
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 0 4rem 8rem;
`

export const Card = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h3 {
    color: ${(props) => props.theme.colors.quaternary};
    font-size: 1.2rem;
  }

  > ul {
    list-style: none;

    > li {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      margin: 1rem auto;

      a {
        color: ${(props) => props.theme.colors['primary-300']};
        text-decoration: none;
      }
      a:hover {
        color: ${(props) => props.theme.colors['primary-500']};
      }
    }
  }
`

export const Under = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  opacity: 0.1;
  > a {
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 0.875rem;
    text-decoration: none;
  }

  > #wrapperImage {
    display: flex;
    gap: 1rem;

    > a {
      opacity: 1;
      fill: ${(props) => props.theme.colors.primary};
      fill-opacity: 1;
      > img {
        width: 1.2rem;
      }
    }
  }
`
