import "animate.css";

import { useContext } from "react";

import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

export function Menu({ Open, close }: MenuProps) {
  function closeMenu() {
    close(!Open);
  }
  const { t } = useContext(LanguageContext);
  return (
    <S.Header className={Open ? "open" : " "}>
      <S.Nav>
        <ul>
          <li onClick={closeMenu}>
            <a href="#">{t("menu.home")}</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">{t("menu.about")}</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#project">{t("menu.projects")}</a>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
