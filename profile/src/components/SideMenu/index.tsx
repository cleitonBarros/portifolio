import "animate.css";

import React from "react";

import { useLangue } from "../../context/useLanguage";
import * as S from "./style";

import * as Dialog from "@radix-ui/react-dialog";

export function SiderMenu() {
  const [open, setOpen] = React.useState(false);
  const { t } = useLangue();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <S.Hamburger className={open ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </S.Hamburger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <S.SidebarMenu className={open ? "open" : ""}>
          <S.Nav>
            <ul>
              <li onClick={() => setOpen(!open)}>
                <a href="#">{t("menu.home")}</a>
              </li>
              <li onClick={() => setOpen(!open)}>
                <a href="#about">{t("menu.about")}</a>
              </li>
              <li onClick={() => setOpen(!open)}>
                <a href="#project">{t("menu.projects")}</a>
              </li>
            </ul>
          </S.Nav>
        </S.SidebarMenu>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
