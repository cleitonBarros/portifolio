import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: none;
    scroll-behavior:smooth;
  }
  a{
    color: #000;
  }

  body{
    background-color: #FFF6E0;
    background-image: url(${({ theme }) => theme.COLORS.BACKGROUND});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat; 
    font-family: 'Fira Sans', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }


  html ::-webkit-scrollbar {
    width: 6px;
  }

  html ::-webkit-scrollbar-thumb {
  background: black;
  }
    
  html ::-webkit-scrollbar-track {
    background: white;
  }
`;
