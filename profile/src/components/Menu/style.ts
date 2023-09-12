import { styled } from "styled-components";

import dia from "./../../assets/img/dia.jpg";

export const Header = styled.menu`
  border-top: 2px solid #000;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 55%;
  min-height: 100vh;

  background-color: #fff6e0;
  background-image: url(${dia});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;

  transition: all 0.5s;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 450px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 15%;
  }
`;

export const Nav = styled.nav`
  padding: 0 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    li {
      a {
        padding: 1rem;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.NAV.MENUTEXT};
        letter-spacing: 0.1rem;
        -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.NAV.MENUSTROCK};

        &.active {
          color: ${({ theme }) => theme.COLORS.NAV.HOVER};
          -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.NAV.HOVER};
        }
      }
      &:hover a {
        color: ${({ theme }) => theme.COLORS.NAV.HOVER};
        -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.NAV.HOVER};
      }
    }
  }

  @media (min-width: 1024px) {
    ul {
      li {
        a {
          font-weight: 700;
          font-size: 2rem;
        }
      }
    }
  }
  @media (min-width: 1980px) {
    ul {
      li {
        a {
          font-weight: 700;
          font-size: 3.2rem;
        }
      }
    }
  }
`;
