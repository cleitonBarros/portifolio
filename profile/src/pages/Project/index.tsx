import { useContext } from "react";

import { slides } from "../../assets";
import { LanguageContext } from "../../context/useLanguage";
import { UseWindowSize } from "../../hooks/useWidthSize";
import * as S from "./style";

export function Projects() {
  const [width] = UseWindowSize();
  const { t } = useContext(LanguageContext);
  return (
    <>
      <S.Container>
        <S.Wrapper>
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
        </S.Wrapper>
      </S.Container>
    </>
  );
}
