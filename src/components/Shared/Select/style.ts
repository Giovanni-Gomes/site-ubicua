import styled from 'styled-components'
import Tooltip from '../Tooltip'
interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}
export const Container = styled.div<ContainerProps>`
  label {
    color: black;
  }

  select {
    background: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    border: 2px solid var(--color-primary);
    color: ${(props) => props.theme.colors.primary}; //#666360;
    display: flex;
    align-items: center;
    /* :hover {
      border-radius: 8px;
    } */
    :focus {
      /* border: 1px solid ${(props) => props.theme.colors.primary}; */
      border-radius: 8px;
      -moz-appearance: none;
      -webkit-appearance: none;
    }

    /* -webkit-border-radius: 8px; */
    /* -moz-appearance: none;
      -webkit-appearance: none; */
  }

  select::-ms-expand {
    display: none;
  }
`
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #eb1500;
    color: #fff !important;
    &::before {
      border-color: #eb1500 transparent;
    }
  }
`

// ${(props) =>
//   props.isErrored &&
//   css`
//     border-color: ${(props) => props.theme.colors.red}; //#c53030;
//   `}
// ${(props) =>
//   props.isFocused &&
//   css`
//     border: 2px solid red;
//     //var(--color-login);
//     color: ${(props) => props.theme.colors.secondary}; //var(--color-login);
//   `}
// ${(props) =>
//   props.isFilled &&
//   css`
//     color: ${(props) => props.theme.colors.secondary}; //var(color-secondary);
//   `}

/* -moz-appearance: none;
    -webkit-appearance: none; */
/* -webkit-transform: rotate(-45deg); */
