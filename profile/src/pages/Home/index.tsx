import { useContext } from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoBootstrap
} from "react-icons/bi";
import { DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

import { slides } from "../../assets";
import foto from "../../assets/img/foto.png";
import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import { UseWindowSize } from "../../hooks/useWidthSize";
import * as S from "./style";

import { Code, UserRectangle } from "@phosphor-icons/react";

export function LandingPage() {
  const [width] = UseWindowSize();
  const { t } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <S.Home>
        <S.TextField id="inicio">
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
                    <a href="#project">
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
                    <a href="#about">
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
          </S.Links>
        </S.TextField>
      </S.Home>
      <S.About id="about">
        <div className="img animate__animated animate__fadeIn animate__slow">
          <img src={foto} alt="eu" />
        </div>
        <div className="Text animate__animated animate__fadeIn animate__slower">
          <h2>
            <div></div>
            {t("aboutPage.title")}
          </h2>
          <p>
            {t("aboutPage.description")}
            <a
              href="https://github.com/cleitonBarros"
              target="_blank"
              rel="noreferrer"
            >
              {t("aboutPage.click")}
            </a>
          </p>
          <h4>
            &quot; Voir le monde en noir et blanc c&apos;est se priver des
            couleurs de la vie &quot; - Morgana
          </h4>
        </div>
      </S.About>
      <S.Skills id="skill">
        <ul className="animate__animated animate__fadeIn  animate__slow">
          <li>
            <BiLogoReact />
          </li>
          <li>
            <BiLogoTypescript />
          </li>
          <li>
            <SiStyledcomponents />
          </li>
          <li>
            <DiHtml5 />
          </li>
          <li>
            <DiCss3 />
          </li>
          <li>
            <BiLogoJavascript />
          </li>
          <li>
            <DiSass />
          </li>
          <li>
            <BiLogoBootstrap />
          </li>
          <li>
            <BiLogoTailwindCss />
          </li>
        </ul>
      </S.Skills>
      <S.Project id="project">
        {width > 600 ? (
          <div className="container">
            {slides.map((img) => (
              <div
                key={img.id}
                style={{ backgroundImage: `url(${img.url})` }}
                className="painel animate__animated animate__fadeInDown"
              >
                <a href={img.link} target="_blank" rel="noreferrer">
                  {t("project.button")}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="mobile">
            {slides.map((img) => (
              <div
                key={img.id}
                style={{ backgroundImage: `url(${img.url})` }}
                className="painel animate__animated animate__fadeInDown"
              >
                <a href={img.link} target="_blank" rel="noreferrer">
                  {t("project.button")}
                </a>
              </div>
            ))}
          </div>
        )}
      </S.Project>
    </>
  );
}
