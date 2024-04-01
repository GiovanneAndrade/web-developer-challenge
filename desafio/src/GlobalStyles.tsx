import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    background:#343434;
  }
  
`;

export default GlobalStyles;
