import { slides } from "../../assets";
import * as S from "./style";

export function Projects() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div className="container">
            {slides.map((img) => (
              <div
                key={img.id}
                style={{ backgroundImage: `url(${img.url})` }}
                className="painel animate__animated animate__fadeInDown"
              >
                <a href={img.link} target="_blank" rel="noreferrer">
                  {img.alt}
                </a>
              </div>
            ))}
          </div>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
