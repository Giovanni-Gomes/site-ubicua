import styled from 'styled-components';
import { FaCloud } from 'react-icons/fa';

import logoPortal from '/assets/portal/imgs/logo.svg';

type props = {
  bg: string;
}

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
  background: ${(props: any) => props.theme.navBar};
  display: flex;
  // justify-content: space-around;
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
// export const LogoPortal = styled.div`

//   display: flex;
//   // flex-direction: column;
//   justify-content: center;
//   // align-items: flex-start;
//   padding: 8px 16px;
//   gap: 10px;

//   // position: absolute;
//   // width: 80px;
//   // height: 64px;
//   // left: 0px;
//   // top: 0px;


// `

// export const LogoImg = styled.img`
//   display: flex;
//   /* flex-direction: row; */
//   align-items: flex-start;
//   padding: 4px;
//   gap: 10px;

//   width: 48px;
//   height: 48px;


//   /* Inside auto layout */
//   /* flex: none;
//   order: 0;
//   align-self: stretch;
//   flex-grow: 0; */

//   /* flex: 1; */
//   background: url(${logoPortal});
//   background-size: cover;
// `

// export const UbicuaLogo = styled(FaCloud)`
// width: 4rem;
// height: 4rem;
// fill: darkturquoise;
// `;

// export const MenuDropdown = styled.div`
// display: flex;
// gap: 1rem;
// /* padding-right: 3rem; */
// width: 100%;
// justify-content: flex-start;
// `;
