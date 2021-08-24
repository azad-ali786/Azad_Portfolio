import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
}
html {
  scroll-behavior: smooth;
}
body{
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background-color : black;
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
  a {
	cursor: pointer;
    text-decoration: none;
}
a:hover {
	text-decoration: none;
}
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
}
`;

export default GlobalStyle;
