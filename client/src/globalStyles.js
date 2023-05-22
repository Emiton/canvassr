import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // Hacky way to get basic layout and spacing 
  body * {
    display: block;
    margin-bottom: 8px;
  }
`;

export default GlobalStyle;