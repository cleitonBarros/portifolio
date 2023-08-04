import { styled } from "styled-components";

import fundo from "../../assets/img/fundo.png";

export const Header = styled.header`
  position: fixed;
  top: 2.25rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.DEVICE.laptop} {
    top: 2.75rem;
  }
  @media ${({ theme }) => theme.DEVICE.desktop} {
    top: 3.75rem;
  }
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
    gap: 2rem;

    li {
      cursor: pointer;
      p {
        font-size: 1.5rem;
        font-weight: 400;
        font-family: "Fira Sans", sans-serif;

        transition: all 0.5s ease-in-out;
      }
    }
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    ul {
      gap: 3rem;
    }
    .logo {
      font-size: 5rem;
    }
  }
`;
