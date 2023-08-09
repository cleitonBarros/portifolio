import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

import { Code, UserRectangle } from "@phosphor-icons/react";

export function Home() {
  const { t } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <S.Container id="Home">
      <S.TextField>
        <h3 className="animate__animated animate__fadeIn animate__slow  ">
          {t("myName")}{" "}
          <div className="name">
            Cleiton barros,
            <div className="wave-wrap">
              <div className="wave"></div>
            </div>
          </div>
        </h3>

        <h3 className="animate__animated animate__fadeIn animate__slower ">
          {t("myNickName")}{" "}
          <div className="name">
            Eli
            <div className="wave-wrap">
              <div className="wave"></div>
            </div>
          </div>
        </h3>
        <div className="role">
          <p className="animate__animated animate__fadeIn animate__slower">
            {t("role")}
          </p>
        </div>
        <S.Links>
          <ul className="animate__animated animate__fadeIn animate__slower slow5">
            <li>
              <div className="link-wrap">
                <div className="link">
                  <NavLink to="/projects">
                    <Code
                      size={24}
                      color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
                    />{" "}
                    {t("projects")}
                  </NavLink>
                </div>
              </div>
            </li>
            <li>
              <div className="link-wrap">
                <div className="link">
                  <NavLink to="/about">
                    <UserRectangle
                      size={24}
                      color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
                    />
                    {t("about")}
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </S.Links>
      </S.TextField>
    </S.Container>
  );
}
