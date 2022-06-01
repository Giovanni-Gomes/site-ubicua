import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    /* @tailwind base;
    @tailwind components;
    @tailwind utilities; */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: 'Poppins', Roboto, sans-serif;
    }

    :root {
        --color-primary: #191919;
        --color-secondary: #d3d3d3;
        --color-tertiary: #fff;
        --color-quaternary: #000;
        --color-blue: #0061ff;
        --color-border: #bdc4c9;
    }
`;