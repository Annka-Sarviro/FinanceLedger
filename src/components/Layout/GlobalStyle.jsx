import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
body {
    background-color: var(--white-color);
    color: var(--white-color);
    margin: 0;
    font-family:  'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

a, li, ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }

img {
    display: block;
  }
`;
