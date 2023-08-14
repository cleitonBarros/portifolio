import "animate.css";

import { Dispatch, SetStateAction, useContext } from "react";
import { NavLink } from "react-router-dom";

import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

interface MenuProps {
  Open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

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
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              {t("menu.home")}
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              {t("menu.about")}
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/projects"
            >
              {t("menu.projects")}
            </NavLink>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
