import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${({ theme }) => theme.colors.BgColor};
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    
  }
`;

export default GlobalStyles;
