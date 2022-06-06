import styled from 'styled-components';

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 32px;
  --content-width: 100%;
  
  &.blue {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-secondary); 
    --logo-color: var(--color-black);    
    --icon-color: var(--color-secondary);    
  }
  background: var(--bg-color);
  height: 65rem;
  padding: 2rem 0;
  position: relative;

`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
 
  > header h2 {
    position: absolute;
    z-index: 1;
    left: 25rem;
    top: 2rem;
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: 50rem;
  }
  > header p {
    position: absolute;
    z-index: 1;
    top: 4rem;
    left: 24rem;
    margin: 20px 0;
    font-size: 16px;
    width: 50%;
    color: var(--text-color);
    /* max-width: 95%; */
  }
`;
