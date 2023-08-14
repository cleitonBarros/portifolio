/* eslint-disable prettier/prettier */
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 1.75rem;
`;

export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;

  .body {
    width: 100%;
    max-width: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    .barraVertical {
      width: 0.5rem;
      height: 50vh;
      background-color: ${({ theme }) => theme.COLORS.MODE.SLASH};
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 3rem;

      li {
        & > svg {
          fill: ${({ theme }) => theme.COLORS.NAME};
        }
        a {
          font-size: 3rem;
          text-transform: uppercase;
          transition: all 0.5s;
          color: ${({ theme }) => theme.COLORS.TEXT};

          &:hover {
            color: ${({ theme }) => theme.COLORS.MODE.SLASH};
          }
        }
      }
    }
  }

  @media (min-width: 1025px) {
    .body {
      ul {
        li {

          a {
            font-size: 2.4rem;
          }
        }
      }
    }
  }
`;
