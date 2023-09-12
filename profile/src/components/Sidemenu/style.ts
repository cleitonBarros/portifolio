import styled, { keyframes } from "styled-components";

import dia from "./../../assets/img/dia.jpg";

import { Content, Trigger } from "@radix-ui/react-dialog";

export const Hamburger = styled(Trigger)`
  padding: 0;
  border: none;
  cursor: pointer;
  text-align: center;
  background: transparent;

  display: grid;
  gap: 10px;

  span {
    height: 4px;
    width: 40px;
    background-color: ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
    transition:
      transform 0.3s,
      opacity 0.3s;
  }

  &[data-state="open"] {
    span:nth-child(1) {
      transform: translateY(14px) rotate(-45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-14px) rotate(45deg);
    }
  }
`;

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

export const Header = styled(Content)`
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

  &[data-state="open"] {
    animation: ${slideIn} 0.3s ease-out;
  }

  &[data-state="closed"] {
    animation: ${slideOut} 0.3s ease-out;
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: grid;
    gap: 1rem;

    li {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
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
