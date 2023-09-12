import "animate.css";
import { useContext, useEffect, useState } from "react";

import { LanguageContext } from "../../context/useLanguage";
import { Dark } from "../Dark";
import { Sidemenu } from "../Sidemenu";
import * as S from "./style";

export function Header() {
  const useLanguage = useContext(LanguageContext);
  const Langue = useLanguage?.currentLanguage;
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
        return;
      } else {
        setIsScroll(false);
      }
    });
  }, [isScroll]);

  return (
    <>
      <S.Header className={isScroll ? "scrolled" : ""}>
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
            <li title="menu">
              <Sidemenu />
            </li>
          </ul>
        </S.Nav>
      </S.Header>
    </>
  );
}
