import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import { Dark } from "../Dark";
import * as S from "./style";

import { Spin as Hamburger } from "hamburger-react";

export function Header() {
  const useLanguage = useContext(LanguageContext);
  const useDarkMode = useContext(DarkModeContext);
  const isDark: string = useDarkMode?.darkMode === true ? " " : "dark";

  const Langue = useLanguage?.currentLanguage;
  return (
    <S.Header>
      <S.Nav>
        <div title="Logo">
          <a className={`logo ${isDark}`} href="#">
            ılǝ.
          </a>
        </div>
        <Dark />
        <ul>
          <li title="translate">
            <p className={isDark} onClick={useLanguage?.handleLanguageChange}>
              {Langue === "pt" ? "PT" : "EN"}
            </p>
          </li>
          <li title="menu">
            <Hamburger
              color={!useDarkMode?.darkMode ? "#00D2C1" : "#F31559"}
              size={44}
              duration={0.5}
            />
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
