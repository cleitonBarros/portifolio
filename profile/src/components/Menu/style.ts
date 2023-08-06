import { styled } from "styled-components";

export const Header = styled.div`
  border-top: 2px solid #000;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-height: calc(100vh - 7.5rem);

  background-color: #fff6e0;
  background-image: url(${({ theme }) => theme.COLORS.NAV.BACKGROUND});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all 0.5s ease-in-out;
  transform: translateY(100%);

  &.open {
    transform: translateY(0);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 420px) {
    min-height: calc(100vh - 8.5rem);
  }
  @media (min-width: 1130px) {
    min-height: calc(100vh - 12.5rem);
  }
`;

export const Nav = styled.div`
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
        font-weight: 500;
        font-variation-settings:
          "wght" 800,
          "wdth" 125;
        font-size: 1.75rem;
        font-family: "Poppins", sans-serif;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.NAV.MENUTEXT};
        letter-spacing: 0.1rem;
        -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.NAV.MENUSTROCK};
      }
      &:hover a {
        color: ${({ theme }) => theme.COLORS.NAV.HOVER};
        -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.NAV.HOVER};
      }
    }
  }

  @media (min-width: 1130px) {
    ul {
      li {
        a {
          font-weight: 700;
          font-size: 2.4rem;
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
