import "animate.css";
//import { useContext } from "react";

import { useLangue } from "../../context/useLanguage";
import { Dark } from "../Dark";
import { SiderMenu } from "../SideMenu";
import * as S from "./style";

export function Header() {
  const { currentLanguage, handleLanguageChange } = useLangue();
  const Langue = currentLanguage;

  return (
    <>
      <S.Header>
        <S.Nav>
          <h1 title="Logo">
            <a className="logo " href="#">
              ılǝ.
            </a>
          </h1>
          <Dark />
          <ul>
            <li title="translate">
              <button className="langue" onClick={handleLanguageChange}>
                {Langue === "pt" ? "PT" : "EN"}
              </button>
            </li>
            <li className="menu">
              <SiderMenu />
            </li>
          </ul>
        </S.Nav>
      </S.Header>
    </>
  );
}
