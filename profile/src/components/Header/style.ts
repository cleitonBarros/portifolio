import { styled } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 2.25rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1130px) {
    top: 2.75rem;
  }
  @media (min-width: 1280px) {
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
    color: ${({ theme }) => theme.COLORS.LOGO.STATIC};
    font-size: 3.5rem;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;

    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.COLORS.LOGO.HOVER};
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    li {
      cursor: pointer;
      p {
        font-size: 1.5rem;
        font-weight: 400;
        font-family: "Fira Sans", sans-serif;
        color: ${({ theme }) => theme.COLORS.LANGUAGE};
        transition: all 0.5s ease-in-out;
      }
    }
  }

  @media (min-width: 425px) {
    ul {
      gap: 3rem;
    }
    .logo {
      font-size: 5rem;
    }
  }
`;
