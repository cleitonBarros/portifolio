import { createGlobalStyle } from "styled-components";

import background from "../assets/img/Background_Abstract.png";
import backgroundDark from "../assets/img/dark.jpg";

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
    background-color: ${({ theme }) => theme.COLORS.WHITE[200]};
    &.dark{
      background-image: url(${backgroundDark});
    }

    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    
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
