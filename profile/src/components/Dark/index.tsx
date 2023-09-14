/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDarkMode } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const { darkMode, changeTheme } = useDarkMode();
  return (
    <S.Container>
      <input
        onChange={changeTheme}
        checked={darkMode === "light"}
        type="radio"
        name="mode"
        id="dark"
      />
      <label title="dark mode" htmlFor="dark">
        Dark
      </label>
      <S.Line></S.Line>
      <input
        checked={darkMode === "dark"}
        onChange={changeTheme}
        type="radio"
        name="mode"
        id="light"
      />
      <label title="light mode" htmlFor="light">
        Light
      </label>
    </S.Container>
  );
}
