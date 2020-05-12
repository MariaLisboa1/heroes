import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    scroll-behavior: smooth;
    min-height: 100%;
  }

  body {
    background: #F3F3F3;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
