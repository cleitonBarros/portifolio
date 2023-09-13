import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    scroll-behavior:smooth;
  }
  a{
    color: #000;
  }

  body{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND} ;
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .top, .left, .left-2, .bottom, .right, .right-2,
  #download,
  .painel,
  .bottom-1,.bottom-2,.bottom-3,.bottom-4,.bottom-5,.bottom-6,.bottom-7,.bottom-8,.bottom-9,.bottom-10,.bottom-11,.bottom-12,.box-img ,.bange{
    visibility: hidden;
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
