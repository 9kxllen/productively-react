import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #212529;
    color: #F8F9FA;
    height: 100vh;
    width: 100vw;
    background: url('https://images.unsplash.com/photo-1502053877922-431b5e61e449?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default GlobalStyle;
