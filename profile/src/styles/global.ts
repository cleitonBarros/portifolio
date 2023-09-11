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
    background-color:${({ theme }) => theme.COLORS.BACKGROUND} ;
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .Paragraph-1,
  .Paragraph-2,
  .role,
  .link-1,
  .link-2,
  .img,
  .title,
  .sit,
  .painel,
  .skill-1,.skill-2,.skill-3,.skill-4,.skill-5,.skill-6,.skill-7,.skill-8,.skill-9,.box-img ,.bange{
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
