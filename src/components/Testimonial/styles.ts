import styled from 'styled-components';

import quoteMark from '/assets/testimonial/quote.png';

export const Container = styled.div`
  /* width: 100%; */
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  /* Brand / Turquoise 100 */
  background: var(--bg-color);
  /* Inside auto layout */
  flex: none;
  order: 3;
  flex-grow: 0;
  :nth-child(1n) {
    position: absolute;    
    /*background-color: lime;
    margin-top: 6rem; */
  } 
`;

export const TestimonialOne = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
  position: relative;
  width: 445px;
  height: 340px;
  left: 735px;
  top: 168px;

  background: var(--color-primary);
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`

export const TestimonialTwo = styled.div` 
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  position: relative;
  z-index: 4;
  width: 350px;
  height: 276px;
  left: 735px;
  top: 200px;
  background: var(--color-primary);
  /* Dark Shadow */
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`
export const TestimonialThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  position: relative;
  z-index: 5;
  width: 550px;
  height: 436px;
  left: 155px;
  top: -350px;
  background: var(--color-primary);
  /* Dark Shadow */
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`

export const QuoteMark = styled.div`
position: relative;
width: 12%;
height: 120px;
left: 205px;
top: 80px;
z-index: 4;
/* background-color: red; */
flex: 1;
/* background: red; */
background: url(${quoteMark}) no-repeat center;
/* background-size: cover; */
/* background-size: cover; */

opacity: 0.6;
`
