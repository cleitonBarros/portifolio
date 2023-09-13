import "animate.css";
import { useContext } from "react";

import { LanguageContext } from "../../context/useLanguage";
import { Dark } from "../Dark";
import { SiderMenu } from "../SideMenu";
import * as S from "./style";

export function Header() {
  const useLanguage = useContext(LanguageContext);
  const Langue = useLanguage?.currentLanguage;

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
              <p onClick={useLanguage?.handleLanguageChange}>
                {Langue === "pt" ? "PT" : "EN"}
              </p>
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
