import { useContext } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const { changeTheme } = useContext(DarkModeContext);
  return (
    <S.Container className="animate__animated animate__fadeInDown">
      <input type="radio" name="mode" id="dark" />
      <label onClick={changeTheme} title="dark mode" htmlFor="dark">
        Dark
      </label>
      <S.Line></S.Line>
      <input type="radio" name="mode" id="light" />
      <label onClick={changeTheme} title="light mode" htmlFor="light">
        Light
      </label>
    </S.Container>
  );
}
