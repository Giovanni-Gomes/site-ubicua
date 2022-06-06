import styled from 'styled-components'
import { FaCloud } from 'react-icons/fa';

import sectionOne from '/assets/backgrounds/background.svg';

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-black);    
    --icon-color: var(--color-secondary);    
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
    --icon-color: var(--color-primary);  
  }
  &.white {
    --bg-color: var(--color-primary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-secondary);
    --icon-color: var(--color-secondary);  
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-black);
    --icon-color: var(--color-tertiary);  
  }


  &:first-child {
    --padding-top: 6rem;
    --heading-font-size: 41px;
    --padding-bottom: 11rem;

    flex: 1;
    background: url(${sectionOne}) no-repeat center;
    background-size: cover;
    text-align: center;
    p {
      text-align: justify;
      color: var(--color-quaternary);
    }
    
    /* font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px; */
    
    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);

`;


export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > header h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    text-align:right;
    /* max-width: 50rem; */
  }
  > header p {
    margin: 20px 0;
    font-size: 16px;
    color: var(--text-color);
    /* max-width: 95%; */
    text-align:right;

  }
  padding: var(--padding-top) 32px var(--padding-bottom);
`;

