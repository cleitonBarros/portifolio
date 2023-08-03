import { styled } from "styled-components";

import fundo from "../../assets/fundo.png";

export const Header = styled.header`
  position: fixed;
  top: 6.25rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    background-image: url(${fundo});
    background-clip: text;
    -webkit-background-clip: text;

    font-size: 3.5rem;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: transparent;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    li {
      cursor: pointer;
      p {
        font-size: 1rem;
        font-weight: 200;
        font-family: "Fira Sans", sans-serif;

        transition: all 0.5s ease-in-out;
      }
    }
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    .logo {
      font-size: 5rem;
    }
  }
`;
