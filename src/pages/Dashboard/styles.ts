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
  background: red;

  display: flex;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > h1 {
    display: flex;
    align-items: center;
    /* min-width: 12rem; */

    > span{
      color: white;
      margin-left: 10px;
      font-size: 1.2rem;
    }
  }
`;

export const UbicuaLogo = styled(FaCloud)`
  width: 4rem;
  height: 4rem;
  fill: darkturquoise;
`;

export const MenuDropdown = styled.div`
  display: flex;
  gap: 1rem;
  /* padding-right: 3rem; */
  width: 100%;
  justify-content: flex-start;
`;
