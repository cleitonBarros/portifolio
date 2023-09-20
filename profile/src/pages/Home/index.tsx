import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoPhp
} from "react-icons/bi";
import { DiCss3, DiHtml5, DiSass, DiLaravel } from "react-icons/di";
import { SiStyledcomponents, SiFigma } from "react-icons/si";

import { itens } from "../../assets";
import foto from "../../assets/img/foto.png";
import { useDarkMode } from "../../context/useDarkMode";
import { useLangue } from "../../context/useLanguage";
import { AnimationScroll } from "../../lib/scrollReveal";
import * as S from "./style";

import { Code, ReadCvLogo, UserRectangle } from "@phosphor-icons/react";

export function LandingPage() {
  const { t, currentLanguage } = useLangue();
  const { darkMode } = useDarkMode();
  const Langue = currentLanguage;

  AnimationScroll();

  return (
    <main>
      <S.Home>
        <S.TextField id="inicio">
          <h3 className="Paragraph-1 top">
            {t("myName")}{" "}
            <div className="name">
              Cleiton barros,
              <div className="wave-wrap">
                <div className="wave"></div>
              </div>
            </div>
          </h3>
          <h3 className="Paragraph-1 top">
            {t("myNickName")}{" "}
            <div className="name">
              Eli
              <div className="wave-wrap">
                <div className="wave"></div>
              </div>
            </div>
          </h3>

          <p className="role bottom">{t("role")}</p>

          <S.Links>
            <ul>
              <li className="left-2">
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
              <li className="right-2">
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
        <picture className="img right">
          <img src={foto} alt={t("alt")} />
        </picture>
        <article className="Text">
          <header>
            <h2 className="title top">
              <div className="squard"></div> {t("aboutPage.title")}
            </h2>
          </header>
          <p
            aria-describedby={t("aboutPage.description")}
            className="Paragraph-2 left"
          >
            {t("aboutPage.description")}
            <a
              href="https://github.com/cleitonBarros"
              target="_blank"
              rel="noreferrer"
            >
              {t("aboutPage.click")}
            </a>
          </p>
          <cite>
            <h4 className="right">
              &quot; Voir le monde en noir et blanc c&apos;est se priver des
              couleurs de la vie &quot; - Morgana
            </h4>
          </cite>
          <footer>
            <a
              id="download"
              className="bottom"
              href={Langue === "PT" ? itens.PT : itens.EN}
              download="CleitonBarros_Frontend Developer"
            >
              <ReadCvLogo size={50} />
              <span>Curriculo</span>
            </a>
          </footer>
        </article>
      </S.About>
      <S.Skills id="skill">
        <article>
          <header className="bottom">
            <h2>{t("skills.title")}</h2>
            <p>{t("skills.sub")}</p>
          </header>
          <div className="text">
            <p className="left-2">{t("skills.main-text")}</p>
            <p className="right-2">
              {t("skills.linkedin")}
              <a
                href="https://www.linkedin.com/in/cleitonbarrosmoura/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Linkedin{" "}
              </a>
              {t("skills.linkedin2")}
            </p>
          </div>
          <ul>
            <li className="bottom-1">
              <DiHtml5 />
            </li>
            <li className="bottom-2">
              <DiCss3 />
            </li>
            <li className="bottom-3">
              <BiLogoReact />
            </li>
            <li className="bottom-4">
              <BiLogoTypescript />
            </li>
            <li className="bottom-5">
              <BiLogoJavascript />
            </li>
            <li className="bottom-6">
              <SiStyledcomponents />
            </li>
            <li className="bottom-7">
              <DiSass />
            </li>
            <li className="bottom-8">
              <BiLogoBootstrap />
            </li>
            <li className="bottom-9">
              <BiLogoTailwindCss />
            </li>
            <li className="bottom-10">
              <DiLaravel />
            </li>
            <li className="bottom-11">
              <BiLogoPhp />
            </li>
            <li className="bottom-12">
              <SiFigma />
            </li>
          </ul>
        </article>
      </S.Skills>
      <S.Project id="project">
        {itens.first.map((img) => (
          <article className="project-item" key={img.id}>
            <picture className="box-img left-2">
              <legend className="hoverme">Hover me</legend>
              <div
                className="parallax"
                style={{
                  backgroundImage: `url(${img.url})`
                }}
              ></div>
            </picture>
            <aside className="project-text">
              <hgroup className="title top">
                <div className="squard"></div>
                <h2>{img.title}</h2>
              </hgroup>
              <p className="Paragraph-2 left"> {t("project.text")}</p>
              <ul className="bange right-2">
                {img.tech.map((techs) => (
                  <li key={`img_${img.id}-${Math.round(Math.random() * 1000)}`}>
                    {techs}
                  </li>
                ))}
              </ul>
              {img.link === "" ? (
                <a
                  target="_blank"
                  href={img.link}
                  rel="noreferrer"
                  className="bottom disabled"
                >
                  {t("project.soon")}
                </a>
              ) : (
                <a
                  target="_blank"
                  href={img.link}
                  rel="noreferrer"
                  className="bottom"
                >
                  {t("project.button")}
                </a>
              )}
            </aside>
          </article>
        ))}
      </S.Project>
    </main>
  );
}
