import * as S from "./style";

import { Code, UserRectangle } from "@phosphor-icons/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export function Home() {
  return (
    <S.Container>
      <div className="text-intro">
        <h3 className="intro-id">
          Oi, eu sou{" "}
          <div className="name">
            Cleiton barros
            <div className="wave-wrap">
              <div className="wave"></div>
            </div>
          </div>
        </h3>
        <h3 className="intro-id">
          Mas você pode me chamar de{" "}
          <div className="name">
            Eli
            <div className="wave-wrap">
              <div className="wave"></div>
            </div>
          </div>
        </h3>
        <div className="into-roles">
          <p className="intro-role">
            Eu sou desenvolvedor web front-end &amp; UX/UI designer
          </p>
        </div>
        <div className="into-links">
          <ul>
            <li>
              <div className="link-wrap">
                <div className="link">
                  <a href="#">
                    <Code size={24} /> Ver meus projetos
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="link-wrap">
                <div className="link">
                  <a href="#">
                    <UserRectangle size={24} /> Saber sobre mim
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </S.Container>
  );
}
