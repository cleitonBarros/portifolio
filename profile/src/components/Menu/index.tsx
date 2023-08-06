import "animate.css";

//import { Link } from "react-router-dom";

import * as S from "./style";

interface MenuProps {
  classe: boolean;
}

export function Menu({ classe }: MenuProps) {
  return (
    <S.Header className={classe ? "open" : " "}>
      <S.Nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Experiência</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
