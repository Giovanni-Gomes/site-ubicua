import styled from 'styled-components';

import chartExample from '/assets/portal/chartexample.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 1rem;

  padding: 1rem;

  @media (min-width: 1440px) {
    width: calc(490px + ((100vw - 1440px) / 2));
  }
  /* max-width: 100%; */

  max-width: 100%;
  border-spacing: 0 6px;

  min-width: 490px;
  height: 14rem;

  /* Dark Theme/Green */
  background: #FFFF;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChartBackground = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 1rem;

  padding: 1rem;

  @media (min-width: 1440px) {
    width: calc(420px + ((100vw - 1440px) / 2));
  }
  /* max-width: 100%; */

  max-width: 100%;
  border-spacing: 0 6px;

  min-width: 420px;
  height: 14rem;

  background: url(${chartExample}) no-repeat center;
  background-size: cover;

`

