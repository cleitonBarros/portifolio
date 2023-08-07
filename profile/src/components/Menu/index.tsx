import "animate.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              {t("menu.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              {t("menu.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/projects"
            >
              {t("menu.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/experiences"
            >
              {t("menu.experience")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              {t("menu.contact")}
            </NavLink>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
