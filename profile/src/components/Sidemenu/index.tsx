import * as S from "./style";

import * as Dialog from "@radix-ui/react-dialog";
import { t } from "i18next";

export function Sidemenu() {
  return (
    <Dialog.Root>
      <S.Hamburger>
        <span />
        <span />
        <span />
      </S.Hamburger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <S.Header>
          <S.Nav>
            <ul>
              <li>
                <a href="#">{t("menu.home")}</a>
              </li>
              <li>
                <a href="#about">{t("menu.about")}</a>
              </li>
              <li>
                <a href="#project">{t("menu.projects")}</a>
              </li>
            </ul>
          </S.Nav>
        </S.Header>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
