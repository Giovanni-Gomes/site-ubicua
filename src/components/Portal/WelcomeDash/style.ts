import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem 1rem;

  @media (max-width: 1440px) {
    width: calc(800px + ((100vw - 1440px) / 2));
  }
  max-width: 100%;
  border-spacing: 0 6px;

  min-width: 800px;
  height: 14rem;

  /* Dark Theme/Blue */
  background: #2EC5CE;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
