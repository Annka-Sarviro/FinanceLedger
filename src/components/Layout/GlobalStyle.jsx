import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
    margin: 0;
   
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  a,li, ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
  }
`;
