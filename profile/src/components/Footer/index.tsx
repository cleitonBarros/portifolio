/* eslint-disable @typescript-eslint/no-explicit-any */
//import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

import { At, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <S.Container>
      <p>
        Feito por 🏳️‍🌈
        <a
          href="https://github.com/cleitonBarros"
          target="_blank"
          rel="noreferrer"
        >
          Cleiton Barros
        </a>
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cleitonBarros"
          >
            <GithubLogo size={32} weight="fill" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/cleitonbarrosmoura/"
          >
            <LinkedinLogo size={32} weight="fill" />
          </a>
        </li>
        <li>
          <a href="mailto:cleiton.barrosmoura@gmail.com">
            <At size={32} weight="bold" />
          </a>
        </li>
      </ul>
    </S.Container>
  );
}
