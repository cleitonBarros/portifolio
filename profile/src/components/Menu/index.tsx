import "animate.css";

//import { Link } from "react-router-dom";
import { useContext } from "react";

import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

interface MenuProps {
  classe: boolean;
}

export function Menu({ classe }: MenuProps) {
  const { t } = useContext(LanguageContext);
  return (
    <S.Header className={classe ? "open" : " "}>
      <S.Nav>
        <ul>
          <li>
            <a href="#">{t("menu.home")}</a>
          </li>
          <li>
            <a href="#">{t("menu.about")}</a>
          </li>
          <li>
            <a href="#">{t("menu.projects")}</a>
          </li>
          <li>
            <a href="#">{t("menu.experience")}</a>
          </li>
          <li>
            <a href="#">{t("menu.contact")}</a>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
