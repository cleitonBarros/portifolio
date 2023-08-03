import * as S from "./style";

import { List } from "@phosphor-icons/react";

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
            <List size={32} />
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
