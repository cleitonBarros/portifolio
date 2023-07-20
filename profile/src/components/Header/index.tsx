import { useState } from "react";

import * as S from "./style";

export function Header() {
  const [open, setClose] = useState<boolean>(false);

  function openMenu() {
    setClose(!open);

    const menu = document.querySelector(".menu");
    if (menu?.classList.contains("open")) {
      menu?.classList.add("close");

      setTimeout(function () {
        menu?.classList.remove("open");
      }, 1500);
    } else {
      menu?.classList.remove("close");
      menu?.classList.add("open");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <S.Container>
      <S.Nav>
        <S.NavBar>
          <a href="#0" className="logo">
            LOGO
          </a>
          <div className="icons">
            <i
              onClick={openMenu}
              className={open ? "icon-menu icon-closed" : "icon-menu "}
            >
              <span></span>
            </i>
          </div>
        </S.NavBar>
        <S.Menu className="menu">
          <li className="menu-link">
            <a href="#0" className="text-item">
              Sobre
            </a>
          </li>
          <li className="menu-link sub">
            <a href="#0" className="text-item">
              Projetos
              {/* <span className="icon"></span> */}
            </a>
            {/* <ul className="submenu">
              <li className="sub-item">
                <a href="#0">Burger King</a>
              </li>
              <li className="sub-item">
                <a href="#0">Southwest Airlines</a>
              </li>
              <li className="sub-item">
                <a href="#0">Levi Strauss</a>
              </li>
            </ul> */}
          </li>
          <li className="menu-link sub">
            <a href="#0" className="text-item">
              Serviços
              {/* <span className="icon"></span> */}
            </a>
            {/* <ul className="submenu">
              <li className="sub-item">
                <a href="#0">Print Design</a>
              </li>
              <li className="sub-item">
                <a href="#0">Web Design</a>
              </li>
              <li className="sub-item">
                <a href="#0">Mobile App Development</a>
              </li>
            </ul> */}
          </li>
          <li className="menu-link">
            <a href="#0" className="text-item">
              Experiencia
            </a>
          </li>
          <li className="menu-link">
            <a href="#0" className="text-item">
              Contato
            </a>
          </li>
        </S.Menu>
      </S.Nav>
    </S.Container>
  );
}
