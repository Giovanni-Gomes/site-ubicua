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
        font-family: 'Poppins', 'Roboto', sans-serif;
    }

    :root {
        --color-primary: #FFFFFF;
        --color-secondary: #8C30F5;
        --color-tertiary: #D5FAFC;
        --color-quaternary: #2EC5CE;
        --color-footer: #0B0D17;
        --color-black: #0B0D17;
        --color-border: #BDC4C9;


        --color-login: #df35e6;
    }


    // COLOR PRIMARYS GIOVANNI
    /* :root {
        --color-primary: #191919;
        --color-secondary: #d3d3d3;
        --color-tertiary: #fff;
        --color-quaternary: #000;
        --color-black: #0061ff;
        --color-border: #bdc4c9;
    } */
`;
