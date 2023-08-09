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
export const Container = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 1.75rem;
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
    }
  }

  @media (min-width: 768px) {
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
    padding: 0 0;

    h3 {
      font-size: 4rem;
      line-height: 1;
    }
    .role {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
export const Links = styled.div`
  padding-top: 2rem;
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
            font-variation-settings:
              "wght" 500,
              "wdth" 125;
            color: ${({ theme }) => theme.COLORS.LIST.ITEM};

            text-transform: lowercase;
            text-decoration: none;

            display: flex;
            align-items: center;
            gap: 0.5em;

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
