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
  margin-top: 7rem;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  position: relative;

  .Text {
    padding: 1rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.COLORS.TEXTBKG};

    max-width: 100%;
    min-width: 18.75rem;

    h2 {
      font-size: 2rem;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.NAME};

      display: flex;
      align-items: center;
      gap: 0.5rem;

      div {
        background-color: ${({ theme }) => theme.COLORS.ICON};
        width: 8px;
        height: 30px;
      }
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      text-align: justify;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXT};

      a {
        text-transform: uppercase;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TEXT};
      }
    }

    h4 {
      margin-top: 2rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXT};
      text-align: end;
    }
  }

  .img {
    position: absolute;
    top: -8%;
    right: 2%;
    width: 5rem;
    img {
      border-radius: 50%;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 425px) {
    margin-top: 5rem;

    .Text {
      p {
        font-size: 1.1rem;
      }
      .img {
        position: absolute;
        top: 22%;
        right: 2%;
        max-width: 6rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    @media (min-width: 768px) {
      gap: 2rem;
      flex-direction: column-reverse;
      .Text {
        max-width: 50rem;

        h2 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.25rem;

          a {
            font-weight: 600;
            &:hover {
              color: ${({ theme }) => theme.COLORS.NAV.HOVER};
            }
          }
        }
      }
      .img {
        position: static;
        width: 18rem;
        img {
          width: 100%;
          min-width: 15rem;
          height: auto;
        }
      }
    }
    @media (min-width: 1025px) {
      flex-direction: row;
      .Text {
        max-width: 50rem;
        p {
          font-size: 1.5rem;
        }
      }
      .img {
        position: static;
        width: 24rem;
        img {
          width: 100%;
          min-width: 20rem;
          height: auto;
        }
      }
    }
  }
`;
