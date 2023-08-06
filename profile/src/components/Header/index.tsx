import { useContext } from "react";
import "animate.css";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import { Dark } from "../Dark";
import * as S from "./style";

import { Spin as Hamburger } from "hamburger-react";

export function Header() {
  const useLanguage = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  const Langue = useLanguage?.currentLanguage;
  return (
    <S.Header>
      <S.Nav>
        <div className="animate__animated animate__fadeInDown " title="Logo">
          <a className="logo " href="#">
            ılǝ.
          </a>
        </div>
        <Dark />

        <ul className="animate__animated animate__fadeInDown">
          <li title="translate">
            <p onClick={useLanguage?.handleLanguageChange}>
              {Langue === "pt" ? "PT" : "EN"}
            </p>
          </li>
          <li title="menu">
            <Hamburger
              color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
              size={44}
              duration={0.5}
            />
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
