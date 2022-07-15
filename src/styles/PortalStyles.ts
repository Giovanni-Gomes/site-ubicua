import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --bg-primary: #FFFFFF;
    --bg-secondary: #8C30F5;
    --bg-portal: '#EFF6FF',

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
    background: ${(props: any) => props.theme.portal};
    color: ${(props: any) => props.theme.textPrimary};

    transition: background-color 0.40s ease;

  }

  *, button, input {
    font-family: 'Poppins', sans-serif;

  }


`;
