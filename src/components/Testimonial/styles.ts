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
  text-align: justify;
  padding: 24px 32px 0px 24px;
  /* gap: 12px; */
  /* height: 340px; */
  position: absolute;
  width: 445px;
  height: auto;
  left: 735px;
  top: 12rem;
  background: var(--color-primary);
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`

export const TestimonialTwo = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  padding: 24px 32px 0px 24px;
  /* padding: 32px;
  gap: 32px; */

  position: absolute;
  width: 445px;
  height: auto;
  left: 735px;
  top: 33rem;
  background: var(--color-primary);
  /* Dark Shadow */
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`
export const TestimonialThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: unset;
  text-align: justify;
  padding: 24px 32px 0px 24px;

  position: absolute;
  z-index: 3;
  width: 550px;
  height: 480px;
  left: 155px;
  top: 15rem;
  background: var(--color-primary);
  /* Dark Shadow */
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`

export const QuoteMark = styled.div`
position: absolute;
width: 12%;
height: 120px;
left: 205px;
top: 1.5rem;


flex: 1;
/* background-color: red; */
/* background: red; */
background: url(${quoteMark}) no-repeat center;
opacity: 0.6;
`

export const LogoTestimonial = styled.div`
  /* width: 140px;
  height: 40px; */
  padding-bottom: 1rem;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.3rem;

  width: 80%;
  /* width: 286px; */
  /* height: 250px; */
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`

export const FeedbackTestimonial = styled.div`
  width: 130%;
  height: 224px;
  /* Lead / Lead 1 */
  /* font-family: 'Roboto', sans-serif; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  /* or 178% */
  font-feature-settings: 'liga' off;
  /* Text / Gray 900 */
  color: #18191F;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  opacity: 0.6;
`

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-weight: 500;
  padding-top: 1rem;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: flex-start;
  flex-grow: 0;
  /* font-family: 'Roboto', sans-serif; */
  /* align-items: flex-start; */
  /* padding: 0px; */
  /* width: 142px;
  height: 52px; */

`
