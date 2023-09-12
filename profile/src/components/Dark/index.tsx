/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const { darkMode, changeTheme } = useContext(DarkModeContext);
  return (
    <S.Container>
      <input
        type="radio"
        name="mode"
        id="dark"
        checked={darkMode === "dark"}
        onChange={changeTheme}
      />
      <label title="dark mode" htmlFor="dark">
        Dark
      </label>
      <S.Line></S.Line>
      <input
        type="radio"
        name="mode"
        id="light"
        checked={darkMode === "light"}
        onChange={changeTheme}
      />
      <label title="light mode" htmlFor="light">
        Light
      </label>
    </S.Container>
  );
}
