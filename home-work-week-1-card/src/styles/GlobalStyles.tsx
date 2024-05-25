import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #c0bfbf;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${myTheme.color.main};
        font-size: ${myTheme.fontSize.large};
        font-style: normal;
        display: flex;
        justify-content: center;

    }
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`