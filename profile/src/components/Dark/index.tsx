import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const useDarkMode = useContext(DarkModeContext);
  const isDark: string = useDarkMode?.darkMode === true ? " " : "dark";
  return (
    <S.Container>
      <input type="radio" name="mode" id="dark" checked />
      <label
        onClick={() => useDarkMode?.setDarkMode(true)}
        title="dark mode"
        htmlFor="dark"
        className={isDark}
      >
        Dark
      </label>
      <S.Line className={isDark}></S.Line>
      <input type="radio" name="mode" id="light" />
      <label
        onClick={() => useDarkMode?.setDarkMode(false)}
        title="light mode"
        htmlFor="light"
        className={isDark}
      >
        Light
      </label>
    </S.Container>
  );
}
