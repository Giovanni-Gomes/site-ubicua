import styled from 'styled-components';
import { FaCloud } from 'react-icons/fa';

export const Container = styled.nav`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const HeaderPortal = styled.div`
  // position: absolute;
  // width: 100vw;
  // height: 64px;
  // top: 0;
  // left: 0;
  // right: 0;
  background: ${props => props.theme.colors.secondary};//${(props: any) => props.theme.navBar};
  display: flex;
   justify-content: space-around;
  // align-items: baseline;
  align-items: center;
  padding: 0 1rem;
  /* padding-left: 0.5rem; */
  gap: 1rem;





/* display: flex;
// align-items: center;
// width: 100vw;
// margin: 0 auto;
// padding: 16px 32px;
// position: fixed;
// top: 0;
// left: 0;
// right: 0;

> h1 {
  display: flex;
  align-items: center;


  > span{
    color: white;
    margin-left: 10px;
    font-size: 1.2rem;
  }
  }*/

  > div.wrapper {
    margin-left: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
