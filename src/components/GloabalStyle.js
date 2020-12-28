import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background-color : #040404;
}
`;

export default GlobalStyle;
