import "animate.css";
import { useContext, useEffect, useState } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import { LanguageContext } from "../../context/useLanguage";
import { Dark } from "../Dark";
import { Menu } from "../Menu";
import * as S from "./style";

import { Spin as Hamburger } from "hamburger-react";

export function Header() {
  const useLanguage = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setOpen] = useState<boolean>(false);
  const Langue = useLanguage?.currentLanguage;
  const [isScroll, setIsScroll] = useState<boolean>(false);

  <Hamburger
    onToggle={(toggled) => {
      if (toggled) {
        setOpen(true);
        return;
      } else {
        setOpen(false);
      }
    }}
  />;
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
          <div className="animate__animated animate__fadeInDown " title="Logo">
            <a className="logo " href="#">
              ılǝ.
            </a>
          </div>
          <Dark />

          <ul className="animate__animated animate__fadeInDown">
            <li title="translate">
              <p onClick={useLanguage?.handleLanguageChange}>
                {Langue === "pt" ? "PT" : "EN"}
              </p>
            </li>
            <li title="menu">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color={darkMode === "dark" ? "#00D2C1" : "#F31559"}
                size={44}
                duration={0.5}
              />
            </li>
          </ul>
        </S.Nav>
      </S.Header>
      <Menu Open={isOpen} close={setOpen} />
    </>
  );
}
