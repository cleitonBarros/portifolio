import { useContext, useEffect, useRef } from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoBootstrap
} from "react-icons/bi";
import { DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

import { itens } from "../../assets";
import foto from "../../assets/img/foto.png";
import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

import { Code, ReadCvLogo, UserRectangle } from "@phosphor-icons/react";
import ScrollReveal from "scrollreveal";

export function LandingPage() {
  const { t } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const clips = document?.querySelectorAll("video");

    if (clips) {
      for (let i = 0; i < clips.length; i++) {
        clips[i].addEventListener("mouseenter", () => {
          clips[i].play();
        });
      }

      for (let i = 0; i < clips.length; i++) {
        clips[i].addEventListener("mouseout", () => {
          clips[i].pause();
        });
      }
    }
    ScrollReveal({
      distance: "60px",
      duration: 1200
    });
    ScrollReveal().reveal(".Paragraph-1", { delay: 300, origin: "top" });
    ScrollReveal().reveal(".Paragraph-2", { delay: 600, origin: "left" });
    ScrollReveal().reveal(".role", { delay: 500, origin: "bottom" });
    ScrollReveal().reveal(".link-1", {
      delay: 700,
      origin: "left"
    });
    ScrollReveal().reveal(".link-2, .bange", { delay: 700, origin: "right" });
    ScrollReveal().reveal(".title", { delay: 300, origin: "top" });
    ScrollReveal().reveal(".img", { delay: 400, origin: "right" });
    ScrollReveal().reveal(".sit", { delay: 800, origin: "bottom" });
    ScrollReveal().reveal(".painel", { delay: 800, origin: "top" });
    ScrollReveal().reveal(".skill-1, .box-img", {
      delay: 400,
      origin: "left"
    });
    ScrollReveal().reveal(".skill-2", { delay: 600, origin: "top" });
    ScrollReveal().reveal(".skill-3", { delay: 800, origin: "right" });
    ScrollReveal().reveal(".skill-4, #download", {
      delay: 1000,
      origin: "left"
    });
    ScrollReveal().reveal(".skill-5", { delay: 1200, origin: "top" });
    ScrollReveal().reveal(".skill-6", {
      delay: 1400,
      origin: "right"
    });
    ScrollReveal().reveal(".skill-7", { delay: 1600, origin: "left" });
    ScrollReveal().reveal(".skill-8", { delay: 1800, origin: "top" });
    ScrollReveal().reveal(".skill-9", { delay: 2000, origin: "right" });
  }, []);

  const inputRef = useRef(null);
  function handleScroll() {
    console.log(inputRef);
  }
  return (
    <main>
      <S.Home>
        <S.TextField id="inicio">
          <h3 className="Paragraph-1">
            {t("myName")}{" "}
            <div className="name">
              Cleiton barros,
              <div className="wave-wrap">
                <div className="wave"></div>
              </div>
            </div>
          </h3>
          <h3 className="Paragraph-1">
            {t("myNickName")}{" "}
            <div className="name">
              Eli
              <div className="wave-wrap">
                <div className="wave"></div>
              </div>
            </div>
          </h3>

          <p className="role">{t("role")}</p>

          <S.Links>
            <ul>
              <li className="link-1">
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
              <li className="link-2">
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
        <picture className="img">
          <img src={foto} alt={t("alt")} />
        </picture>
        <article className="Text">
          <header>
            <h2 className="title">
              <div className="squard"></div> {t("aboutPage.title")}
            </h2>
          </header>
          <p className="Paragraph-2">
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
            <h4 className="sit">
              &quot; Voir le monde en noir et blanc c&apos;est se priver des
              couleurs de la vie &quot; - Morgana
            </h4>
          </cite>
          <footer>
            <a
              id="download"
              href={itens.pdf}
              download="CleitonBarros_Frontend Developer"
            >
              <ReadCvLogo size={50} />
              <span>Curriculo</span>
            </a>
          </footer>
        </article>
      </S.About>
      <S.Skills id="skill">
        <ul>
          <li className="skill-1">
            <BiLogoReact />
          </li>
          <li className="skill-2">
            <BiLogoTypescript />
          </li>
          <li className="skill-3">
            <SiStyledcomponents />
          </li>
          <li className="skill-4">
            <DiHtml5 />
          </li>
          <li className="skill-5">
            <DiCss3 />
          </li>
          <li className="skill-6">
            <BiLogoJavascript />
          </li>
          <li className="skill-7">
            <DiSass />
          </li>
          <li className="skill-8">
            <BiLogoBootstrap />
          </li>
          <li className="skill-9">
            <BiLogoTailwindCss />
          </li>
        </ul>
      </S.Skills>
      <S.Project id="project">
        {itens.first.map((img) => (
          <>
            <article className="project-item" key={img.id}>
              <picture className="box-img">
                <legend className="hoverme">Hover me</legend>
                <div
                  ref={inputRef}
                  onMouseEnter={handleScroll}
                  className="parallax"
                  style={{
                    backgroundImage: `url(${img.url})`
                  }}
                ></div>
              </picture>
              <aside className="project-text">
                <hgroup className="title">
                  <div className="squard"></div>
                  <h2>{img.title}</h2>
                </hgroup>
                <p className="Paragraph-2"> {t("project.text")}</p>
                <ul className="bange">
                  {img.tech.map((techs) => (
                    <li key={img.id}>{techs}</li>
                  ))}
                </ul>
                <a
                  target="_blank"
                  href={img.link}
                  rel="noreferrer"
                  className="sit"
                >
                  {t("project.button")}
                </a>
              </aside>
            </article>
          </>
        ))}
      </S.Project>
    </main>
  );
}
