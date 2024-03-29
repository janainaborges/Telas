import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
