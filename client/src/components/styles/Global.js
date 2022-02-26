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
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
