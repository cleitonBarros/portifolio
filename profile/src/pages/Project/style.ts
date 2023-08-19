/* eslint-disable prettier/prettier */
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding-top: 12rem;
  font-family: "Franklin Gothic Medium", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;

  .container {
    display: flex;
    width: 90vw;
    flex-wrap: wrap;

    .painel {
      border: 1px dashed black;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 42rem;
      border-radius: 50px;
      color: snow;
      cursor: pointer;
      flex: 0.5;
      margin: 10px;
      position: relative;
      transition: flex 0.7s ease-in;
    }
    .painel a {
      font-size: 24px;
      position: absolute;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      bottom: 20px;
      left: 20px;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      background-color: #f4f4f4;
    }
    .painel:hover {
      flex: 3;
    }
    .painel:hover a {
      opacity: 1;
      transition: opacity 0.4s ease-in 0.6s;
    }
  }

  .mobile {
    width: 90vw;

    .painel {
      border: 1px dashed black;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      height: 5rem;
      border-radius: 50px;
      color: snow;
      cursor: pointer;
      margin: 10px;
      position: relative;
      transition: all 0.7s ease-in;
    }
    .painel a {
      font-size: 1.25rem;
      position: absolute;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      bottom: 20px;
      left: 20px;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      background-color: #f4f4f4;
    }
    .painel:hover {
      height: 30rem;
    }
    .painel:hover a {
      opacity: 1;
      transition: opacity 0.4s ease-in 0.6s;
    }
  }
`;
