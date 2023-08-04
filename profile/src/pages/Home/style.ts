/* eslint-disable prettier/prettier */
import { keyframes, styled } from "styled-components";

import background from "../../assets/img/Background_Abstract.jpg";
import wave from "../../assets/svg/wave-light.svg";

const waving = keyframes`
0%{
  transform: translateX(-10);
}
100%{
  transform: translateX(-50%);

}
`;
export const Container = styled.main`
  position: absolute;
  z-index: -10;

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  min-width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 1.75rem;

  h3 {
    text-transform: uppercase;
    font-weight: 300;
    font-variation-settings:
      "wght" 800,
      "wdth" 125;
    font-size: 1.75rem;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 1rem;
    font-variation-settings:
      "wght" 500,
      "wdth" 100;
    text-transform: none;
    line-height: 2;
  }

  .color {
    border-radius: 80%;
    position: absolute;
    filter: blur(300px);

    &:nth-child(1) {
      top: -350px;
      width: 600px;
      height: 700px;
      background: #4a88d9;
    }
    &:nth-child(2) {
      bottom: -150px;
      left: -50px;
      width: 500px;
      height: 500px;
      background: #de1600;
    }
    &:nth-child(3) {
      bottom: 250px;
      right: 100px;
      width: 300px;
      height: 300px;
      background: #e0cbda;
    }
    &:nth-child(4) {
      bottom: 0px;
      right: 700px;
      width: 350px;
      height: 150px;
      background: #dbf500;
    }
    &:nth-child(5) {
      top: 0px;
      left: 0px;
      width: 150px;
      height: 150px;
      background: #00db0e;
    }
  }
  .text-intro {
    position: relative;
    text-align: center;

    .intro-id {
      line-height: normal;
      color: transparent;
      letter-spacing: 0.1rem;
      font-weight: 700;
      -webkit-text-stroke: 2px #606887;
      font-variation-settings:
        "wght" 800,
        "wdth" 100;

      .name {
        text-transform: none;
        line-height: 0;
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        font-family: "Borel", cursive;
        font-weight: bold;
        font-variation-settings:
          "wght" 800,
          "wdth" 125;
        letter-spacing: normal;
        color: #606887;
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
          }
        }
      }
    }

    .into-links {
      padding-top: 2rem;
      ul {
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
                color: #606887;
                text-transform: lowercase;
                text-decoration: none;

                display: flex;
                align-items: center;
                gap: 0.5em;

                margin-bottom: 1rem;
                
                transition: all 0.3s ease-in-out;

                &:hover {
                  color: #000;

                }
              }
            }
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    li {
      &:first-child {
        margin-right: 2rem;
      }
    }
    h3 {
      font-size: 2rem;
    }
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  @media ${({ theme }) => theme.DEVICE.desktop} {
    padding: 0 0;
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
