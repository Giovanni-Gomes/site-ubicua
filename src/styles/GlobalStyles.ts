import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :focus {
    outline: none;
  }
  body {
    background: ${props => props.theme.colors.primary}; //${(props) => props.theme.colors.hoverLight};
    /* color: ${(props) => props.theme['gray-300']}; ['gray-900']*/
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  /* :root {
    --bg-primary: #FFFFFF;
    --bg-secondary: #8C30F5;
    --bg-portal: #EFF6FF;

    --bg-dark: #232323;

    --color-primary: #FFFFFF;
    --color-secondary: #8C30F5;
    --color-tertiary: #D5FAFC;
    --color-quaternary: #2EC5CE;
    --color-footer: #0B0D17;
    --color-black: #0B0D17;
    --color-border: #BDC4C9;

    --color-login: #df35e6;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  html, body {
      overflow-x: hidden;
  }

  body {

    background: ${props => props.theme.colors.primary};
    color: #c4c4c4;
    transition: background-color 0.30s ease;
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
      font-family: 'Poppins', sans-serif;
  } */






`;
