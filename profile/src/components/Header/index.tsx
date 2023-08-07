import "animate.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <>
      <S.Header>
        <S.Nav>
          <div className="animate__animated animate__fadeInDown " title="Logo">
            <NavLink className="logo " to="/">
              ılǝ.
            </NavLink>
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
      <Menu classe={isOpen} />
    </>
  );
}
