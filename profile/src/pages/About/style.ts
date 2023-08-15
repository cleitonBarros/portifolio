/* eslint-disable prettier/prettier */
import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 12rem;
  min-width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 11rem);

  .Text {
    padding: 1rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.COLORS.TEXTBKG};
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.NAME};
      text-align: justify;
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
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT};
      text-align: end;
    }
  }

  .img {
    max-width: 20rem;
    img {
      border-radius: 50%;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 425px) {
    .Text {
      margin-bottom: 0;
      p {
        text-align: left;

        font-size: 1.25rem;
      }
    }
  }
  @media (min-width: 770px) {
    .Text {
      max-width: 50rem;

      h2 {
        font-size: 2.5rem;
      }
      h4 {
        font-size: 1.5rem;
        font-weight: 500;
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
      img {
        width: 20rem;
      }
    }
  }
  @media (min-width: 1025px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    .Text {
      max-width: 50rem;
    }
    .img {
      max-width: 24rem;
      img {
        width: 24rem;
      }
    }
  }
`;

export const Skill = styled.div`
  margin-top: 3rem;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      aspect-ratio: 1/1;
      background-color: ${({ theme }) => theme.COLORS.MODE.DARK};
      border-radius: 10%;
      border: 2px solid ${({ theme }) => theme.COLORS.TEXTBKG};
      width: 8rem;
      height: 8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.COLORS.MODE.SLASH};
        width: 60%;
        height: auto;
        display: block;
      }
    }
  }
  @media (min-width: 425px) {
    ul {
      width: 500px;
    }
  }

  @media (min-width: 1025px) {
    ul {
      width: 50%;
      li {
        width: 12rem;
        height: 12rem;
      }
    }
  }
`;

export const Contact = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

 
  min-height: 100vh;

 

  .barraVertical {
    width: 5px;
    height: 20rem;
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
