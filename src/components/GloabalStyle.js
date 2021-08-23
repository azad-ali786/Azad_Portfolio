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
::-webkit-scrollbar {
    width: 10px;
  }
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
    ::-webkit-scrollbar-thumb {
    background: #888; 
      border-radius:10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    
    background: #555; 
  } 
`;

export default GlobalStyle;
