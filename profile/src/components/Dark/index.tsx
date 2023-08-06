import { useContext, useState } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const { changeTheme } = useContext(DarkModeContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuState, toggleMenu] = useState<boolean>(true);

  function handleToggleMenu() {
    toggleMenu(menuState);
  }

  function handleChangeTheme() {
    changeTheme();
    handleToggleMenu();
  }

  return (
    <S.Container className="animate__animated animate__fadeInDown">
      <input type="radio" name="mode" id="dark" />
      <label onClick={handleChangeTheme} title="dark mode" htmlFor="dark">
        Dark
      </label>
      <S.Line></S.Line>
      <input type="radio" name="mode" id="light" />
      <label onClick={handleChangeTheme} title="light mode" htmlFor="light">
        Light
      </label>
    </S.Container>
  );
}
