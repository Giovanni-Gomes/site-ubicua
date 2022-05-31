import { FaCloud } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #222;
  padding: 2rem;

  > .WrapperCard {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
`;

export const Header = styled.header`
  z-index: 3;

  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > h1 {
    display: flex;
    align-items: center;
    min-width: 16rem;

    > span{
      color: white;
      margin-left: 10px;
      font-size: 1.8rem;
    }
  }
`;

export const UbicuaLogo = styled(FaCloud)`
  width: 2rem;
  height: 2rem;
  fill: darkturquoise;
`;

export const MenuNav = styled.div`
  display: flex;
  /* margin-left: 2rem; */
  padding-right: 3rem;
  width: 100%;
  justify-content: end;

  > .list {
    display: flex;
    list-style: none;
    gap: 2rem;
    color: gray;
    > :first-child {
      color: white;
      &:hover {
        > .menuDrop {
          display: flex;
          flex-direction: column;
          background: gray;
          position: absolute;
          padding: 0 1rem 0 1.7rem;
          margin-top: 0.5rem;
          border-radius: 0.5rem;

        }
      }
    }

    > li .menuDrop {
      display: none;
    }
  }
`;
