import { Link } from "react-router-dom";

import * as S from "./style";

import { GithubLogo, LinkedinLogo, Paperclip } from "@phosphor-icons/react";

export function Projects() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div className="body">
            <ul>
              <li className="animate__animated animate__fadeInDown">
                <GithubLogo size={64} weight="fill" />
              </li>
              <li className="animate__animated animate__fadeInDown animate__slow">
                <LinkedinLogo size={64} weight="fill" />
              </li>
              <li className="animate__animated animate__fadeInDown animate__slower">
                <Paperclip size={64} weight="fill" />
              </li>
            </ul>
            <div className="barraVertical Text animate__animated animate__fadeIn animate__slow"></div>
            <ul>
              <li className="animate__animated animate__fadeInDown">
                <Link to="https://github.com/cleitonBarros" target="_blank">
                  Github
                </Link>
              </li>
              <li className="animate__animated animate__fadeInDown animate__slow">
                <Link
                  to="https://www.linkedin.com/in/cleitonbarrosmoura/"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </li>
              <li className="animate__animated animate__fadeInDown animate__slower">
                <Link to="mailto:cleiton.barrosmoura@gmail.com">Email</Link>
              </li>
            </ul>
          </div>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
