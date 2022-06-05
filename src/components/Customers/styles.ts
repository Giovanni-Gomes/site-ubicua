import styled from 'styled-components';

export const Container = styled.div`
/* Default / White */
background: var(--color-primary);

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
:nth-child(1n) {
  position: absolute;    
  /*background-color: lime;
  margin-top: 6rem; */
}  
`;

export const LogoSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
margin: 1rem;
gap: 24px;

position: relative;
width: 1110px;
height: 110px;
left: 165px;
top: 16px;
`

export const Logos = styled.div`
/* Auto layout */
z-index: 2;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 0px;
gap: 64px;

width: 891px;
height: 60px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
`
