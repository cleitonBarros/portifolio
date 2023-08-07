import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

import { Code, UserRectangle } from "@phosphor-icons/react";

export function Home() {
  const { t } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <S.Container>
        <div className="text-intro">
          <h3
            className={`animate__animated animate__fadeIn animate__slow intro-id `}
          >
            {t("myName")}{" "}
            <div className={`name `}>
              Cleiton barros,
              <div className="wave-wrap">
                <div className={`wave `}></div>
              </div>
            </div>
          </h3>

          <h3
            className={`animate__animated animate__fadeIn animate__slower intro-id `}
          >
            {t("myNickName")}{" "}
            <div className={`name `}>
              Eli
              <div className="wave-wrap">
                <div className={`wave `}></div>
              </div>
            </div>
          </h3>
          <div className="into-roles">
            <p
              className={`animate__animated animate__fadeIn animate__slower intro-role `}
            >
              {t("role")}
            </p>
          </div>
          <div className="into-links">
            <ul className={`animate__animated animate__fadeIn animate__slower`}>
              <li>
                <div className="link-wrap">
                  <div className="link">
                    <a href="#">
                      <Code
                        size={24}
                        color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
                      />{" "}
                      {t("projects")}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="link-wrap">
                  <div className="link">
                    <a href="#">
                      <UserRectangle
                        size={24}
                        color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
                      />
                      {t("about")}
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </S.Container>
    </>
  );
}
