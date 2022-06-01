import styled from 'styled-components';

export const Container = styled.footer`
  background: #0B0D17;
  max-height: 393px;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 0 7rem ;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;


  > h3 {
    color: #F4F5F7;
    font-size: 1.125rem;
  }

  > ul {
    list-style: none;
    > li {
      color: #EEEFF4;
      font-size: 0.875rem;
    }
  }
`;

export const Under = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid #FFFFFF;
  opacity: 0.1;
  > a {
    color: #D9DBE1;
    font-size: 0.875rem;
    text-decoration: none;
  }

  > #wrapperImage {
    display: flex;
    gap: 1rem;
    
    > img {
      color: #fff;
      opacity: 1;
      fill: #fff;
      fill-opacity: 1;
    }
  }
`;
