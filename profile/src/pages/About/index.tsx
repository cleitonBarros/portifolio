import { useContext } from "react";

import foto from "../../assets/img/foto.png";
import { LanguageContext } from "../../context/useLanguage";
import * as S from "./style";

export function About() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <S.Container>
        <S.Wrapper>
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
          <div className="img animate__animated animate__fadeIn animate__slow">
            <img src={foto} alt="eu" />
          </div>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
