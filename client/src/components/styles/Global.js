import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    /* background-color: ${
      window.location.href.endsWith("/")
        ? "white"
        : ({ theme }) => theme.colors.BgColor
    }; */

    background-color: ${({ theme }) => theme.colors.BgColor};

    
  }

  a {
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;

export default GlobalStyles;
