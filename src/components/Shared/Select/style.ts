import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
    label {
        color: black;
    }

    select {
        background: var(--color-primary);
        border-radius: 10px;
        padding: 16px;
        /* margin-bottom: 0.1rem; */
        width: 100%;
        border: 1px solid var(--color-primary);
        color: #666360;
        display: flex;
        align-items: center;
        :hover {
          border-radius: 10px;
          border: 1px solid var(--color-secondary);
        }
    }

`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #EB1500;
    color: #fff !important;
    &::before {
      border-color: #EB1500 transparent;
    }
  }
`;
