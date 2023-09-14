import { styled } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 5rem 6%;
  z-index: 90;

  transition: all 0.1s ease-out;

  &.scrolled {
    border-bottom: 1px dashed ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: ${({ theme }) => theme.COLORS.HEADER.LOGO.STATIC};
    font-size: 3.5rem;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;

    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.COLORS.HEADER.LOGO.HOVER};
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      button.langue {
        background-color: ${({ theme }) => theme.COLORS.HEADER.TRANSLATE};
        padding: 0.5rem;
        border-radius: 50%;
        object-fit: cover;
        aspect-ratio: 1/1;
        font-size: 1.6rem;
        font-weight: 600;
        font-family: "Fira Sans", sans-serif;
        color: ${({ theme }) => theme.COLORS.HEADER.LANGUAGE};
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
