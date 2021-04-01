import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom right, #36d1dc, #5b86e5); 
    color: #F8F9FA;
    height: 100vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
