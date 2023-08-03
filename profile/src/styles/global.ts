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
    font-family: 'Fira Sans', sans-serif;
    overflow-y: hidden;
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
