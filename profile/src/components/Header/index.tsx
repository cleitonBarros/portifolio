import * as S from "./style";

import { Spin as Hamburger } from "hamburger-react";

export function Header() {
  return (
    <S.Header>
      <S.Nav>
        <div title="Logo">
          <a className="logo" href="#">
            ılǝ.
          </a>
        </div>
        <ul>
          <li title="translate">
            <p>EN</p>
          </li>
          <li title="menu">
            <Hamburger size={32} duration={0.8} />
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
