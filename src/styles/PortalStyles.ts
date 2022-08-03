import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
    background: ${(props: any) => props.theme.colors['bg-color']};
    color: ${(props: any) => props.theme.colors.grey};
    transition: background-color 0.40s ease;
    -webkit-font-smoothing: antialiased;
  }

  *, button, input, a, p {
    border-style: none;
    background: transparent;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }


`
