import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

import { Code, UserRectangle } from "@phosphor-icons/react";

export function Home() {
  const useLanguage = useContext(LanguageContext);
  const useDarkMode = useContext(DarkModeContext);
  const isDark: string = useDarkMode?.darkMode === true ? " " : "dark";

  return (
    <>
      <S.Container>
        <div className="text-intro">
          <h3 className={`intro-id ${isDark}`}>
            {useLanguage?.t("myName")}{" "}
            <div className={`name ${isDark}`}>
              Cleiton barros,
              <div className="wave-wrap">
                <div className={`wave ${isDark}`}></div>
              </div>
            </div>
          </h3>

          <h3 className={`intro-id ${isDark}`}>
            {useLanguage?.t("myNickName")}{" "}
            <div className={`name ${isDark}`}>
              Eli
              <div className="wave-wrap">
                <div className={`wave ${isDark}`}></div>
              </div>
            </div>
          </h3>
          <div className="into-roles">
            <p className={`intro-role ${isDark}`}>{useLanguage?.t("role")}</p>
          </div>
          <div className="into-links">
            <ul>
              <li>
                <div className="link-wrap">
                  <div className="link">
                    <a className={isDark} href="#">
                      <Code
                        size={24}
                        color={!useDarkMode?.darkMode ? "#00D2C1" : "#F31559"}
                      />{" "}
                      {useLanguage?.t("projects")}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="link-wrap">
                  <div className="link">
                    <a className={isDark} href="#">
                      <UserRectangle
                        size={24}
                        color={!useDarkMode?.darkMode ? "#00D2C1" : "#F31559"}
                      />
                      {useLanguage?.t("about")}
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
