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
import { Link } from "react-router-dom";

import foto from "../../assets/img/foto.png";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

import { GithubLogo, LinkedinLogo, Paperclip } from "@phosphor-icons/react";

export function About() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <S.Container>
        <S.Wrapper>
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
        </S.Wrapper>
        <S.Wrapper>
          <S.Skill>
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
          </S.Skill>
        </S.Wrapper>
        <S.Wrapper>
          <S.Contact>
            <ul>
              <li className="animate__animated animate__fadeIn animate__slower ">
                <GithubLogo size={64} weight="fill" />
              </li>
              <li className="animate__animated animate__fadeIn animate__slower  animate__slow">
                <LinkedinLogo size={64} weight="fill" />
              </li>
              <li className="animate__animated animate__fadeIn animate__slower  animate__slower">
                <Paperclip size={64} weight="fill" />
              </li>
            </ul>
            <div className="barraVertical animate__animated animate__fadeIn  animate__slow"></div>
            <ul>
              <li className="animate__animated animate__fadeIn">
                <Link to="https://github.com/cleitonBarros" target="_blank">
                  Github
                </Link>
              </li>
              <li className="animate__animated animate__fadeIn animate__slow">
                <Link
                  to="https://www.linkedin.com/in/cleitonbarrosmoura/"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </li>
              <li className="animate__animated animate__fadeIn animate__slower">
                <Link to="mailto:cleiton.barrosmoura@gmail.com">Email</Link>
              </li>
            </ul>
          </S.Contact>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
