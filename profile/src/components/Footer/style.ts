import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 2rem 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.COLORS.SECTION};
  row-gap: 1rem;

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
    a {
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.TEXT};
      &:hover {
        color: ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
      }
    }
  }
  ul {
    display: flex;
    align-items: center;

    gap: 1.5rem;
    li {
      a {
        svg {
          color: ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
        }
      }
    }
  }
  @media (min-width: 425px) {
    justify-content: space-between;
  }
`;
