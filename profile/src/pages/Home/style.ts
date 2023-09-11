/* eslint-disable prettier/prettier */
import { keyframes, styled } from "styled-components";

import wave from "../../assets/svg/wave-light.svg";

const waving = keyframes`
0%{
  transform: translateX(-10);
}
100%{
  transform: translateX(-50%);

}
`;
export const Home = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
  padding: 6rem 6%;
  background-color: ${({ theme }) => theme.COLORS.SECTION};

  h3 {
    text-transform: uppercase;
    font-size: 1.75rem;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 1rem;
    text-transform: none;
    line-height: 2;
    color: ${({ theme }) => theme.COLORS.PARAGRAPH};
  }

  .text-intro {
    position: relative;
    text-align: center;

    .intro-id {
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.H3};
      letter-spacing: 0.1rem;
      font-weight: 700;
      -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.STROCK};
      .name {
        text-transform: none;
        line-height: 0;
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        font-family: "Borel", cursive;
        font-weight: bold;
        letter-spacing: normal;
        color: ${({ theme }) => theme.COLORS.NAME};
        -webkit-text-stroke: 0;
        &:hover .wave-wrap .wave {
          animation: ${waving} 10s linear infinite;
          opacity: 0.7;
        }
        .wave-wrap {
          overflow: hidden;
          position: absolute;
          top: -3rem;
          left: 0;
          width: 100%;
          height: 6.875rem;
          z-index: -1;

          .wave {
            position: absolute;
            background-image: url(${wave});
            background-repeat: repeat-x;
            background-position-x: 0;
            background-position-y: 0;
            bottom: 50%;
            opacity: 0.5;
            width: 90rem;
            height: 30%;

            &.dark {
              opacity: 0.3;
            }
          }
        }
      }
    }
  }
  @media (min-width: 425px) {
    padding: 10rem 10%;

    li {
      &:first-child {
        margin-right: 2rem;
      }
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (min-width: 765px) {
    padding: 16rem 10%;

    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
    .text-intro {
      .intro-id {
        line-height: 1;
      }
    }
  }
`;
export const TextField = styled.div`
  position: relative;
  text-align: center;

  h3 {
    text-transform: uppercase;
    font-size: 1.75rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.COLORS.H3};
    -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.STROCK};

    .name {
      text-transform: none;
      line-height: 0;
      position: relative;
      white-space: nowrap;
      cursor: pointer;
      display: inline-block;
      font-family: "Borel", cursive;
      font-weight: bold;
      letter-spacing: normal;
      color: ${({ theme }) => theme.COLORS.NAME};
      -webkit-text-stroke: 0;

      &:hover .wave-wrap .wave {
        animation: ${waving} 10s linear infinite;
        opacity: 0.7;
      }

      .wave-wrap {
        overflow: hidden;
        position: absolute;
        top: -3rem;
        left: 0;
        width: 100%;
        height: 6.875rem;
        z-index: -1;

        .wave {
          position: absolute;
          background-image: url(${wave});
          background-repeat: repeat-x;
          background-position-x: 0;
          background-position-y: 0;
          bottom: 50%;
          opacity: 0.5;
          width: 90rem;
          height: 30%;

          &.dark {
            opacity: 0.3;
          }
        }
      }
    }

    .role {
      p {
        font-size: 1rem;
        text-transform: none;
        line-height: 2;
        color: ${({ theme }) => theme.COLORS.PARAGRAPH};
      }
    }
  }

  @media (min-width: 425px) {
    h3 {
      font-size: 2rem;
      line-height: 1;
    }
  }

  @media (min-width: 770px) {
    h3 {
      font-size: 3rem;
    }
    .role {
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1280px) {
    h3 {
      font-size: 4rem;
    }
    .role {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
export const Links = styled.div`
  ul {
    &.slow5 {
      --animate-duration: 1s;
    }
    li {
      display: inline-flex;
      font-size: 1.5rem;
      .link-wrap {
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        overflow-x: hidden;

        .link {
          width: auto;
          margin-bottom: 3px;
          white-space: nowrap;
          a {
            font-size: 1.25rem;
            color: ${({ theme }) => theme.COLORS.LIST.ITEM};

            text-transform: lowercase;
            text-decoration: none;

            display: flex;
            align-items: center;
            row-gap: 0.5em;

            margin-bottom: 1rem;

            transition: all 0.3s ease-in-out;

            &:hover {
              color: ${({ theme }) => theme.COLORS.LIST.ITEM_HOVER};
            }
          }
        }
      }
    }
  }
  @media (min-width: 425px) {
    ul {
      li {
        &:first-child {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;

  width: 100%;
  padding: 6rem 6%;

  .Text {
    padding: 1rem;
    border-radius: 12px;
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
    padding: 10rem 10%;
    .Text {
      margin-bottom: 0;
      p {
        text-align: left;

        font-size: 1.25rem;
      }
    }
  }
  @media (min-width: 765px) {
    padding: 16rem 10%;

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
  @media (min-width: 1024px) {
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

export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECTION};

  width: 100%;
  padding: 6rem 6%;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      aspect-ratio: 1/1;
      background-color: ${({ theme }) => theme.COLORS.HEADER.MODE.DARK};
      border-radius: 10%;
      border: 2px solid ${({ theme }) => theme.COLORS.TEXTBKG};
      width: 8rem;
      height: 8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
        width: 60%;
        height: auto;
        display: block;
      }
    }
  }
  @media (min-width: 425px) {
    padding: 10rem 10%;
    ul {
      width: 500px;
    }
  }
  @media (min-width: 765px) {
  }
  @media (min-width: 1024px) {
    ul {
      width: 50%;
      li {
        width: 12rem;
        height: 12rem;
      }
    }
  }
`;

export const Project = styled.div`
  padding: 4rem 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  gap: 5rem;
  margin: 0;
  font-family: "Poppins", sans-serif;

  .project-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 2rem;

    .box-img {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      border-width: 0px;
      width: 100%;
      max-width: 700px;
      filter: grayscale(1);
      cursor: pointer;

      &:hover {
        filter: grayscale(0);
      }

      .parallax {
        width: 100%;
        height: 25rem;
        background-size: cover;
        background-position: left top;
        transition: background-position-y 0.8s ease-in;

        &:hover {
          background-position-y: 100%;
          transition: background-position-y 8s ease-in;
        }
      }
      .hoverme {
        width: 100px;
        height: 50px;
        color: white;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
      }
    }
    .project-text {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.5rem;

        .squard {
          background-color: ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
          width: 8px;
          height: 24px;
        }
        h2 {
          color: red;
          font-size: 2rem;
          font-weight: 500;
          font-family: "Fira Sans", sans-serif;
          color: ${({ theme }) => theme.COLORS.NAME};
        }
      }

      p {
        color: ${({ theme }) => theme.COLORS.TEXT};
        font-size: 1.25rem;
        font-weight: 400;
      }

      .bange {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        p {
          padding: 0.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          background-color: ${({ theme }) => theme.COLORS.HEADER.TRANSLATE};
          color: ${({ theme }) => theme.COLORS.ICON};
        }
      }
    }

    a {
      background-color: ${({ theme }) => theme.COLORS.ICON};
      margin-top: 10px;
      padding: 0.5rem 1rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      font-size: 1rem;
      font-weight: 600;
    }
  }
  @media (min-width: 765px) {
    .project-item {
      .project-text {
        .squard {
          width: 8px;
          height: 30px;
        }
        h2 {
          font-size: 2.5rem;
          font-weight: 500;
        }
        p {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .project-item {
      .box-img {
        width: 100%;
        .parallax {
          height: 32rem;
        }
      }
    }
    .project-item {
      flex-direction: row;
    }
  }
  @media (min-width: 1280px) {
    .project-item {
      .project-text {
        h2 {
          color: blue;
          font-size: 3rem;
          font-weight: 600;
        }
        p {
          font-size: 1.75rem;
          font-weight: 400;
        }
        .bange {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          p {
            padding: 1rem;
            font-weight: 500;
            border-radius: 1rem;
            font-size: 1.25rem;
          }
        }
      }
      a {
        font-size: 1.5rem;
      }
    }
  }
`;
