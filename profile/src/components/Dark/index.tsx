/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";

import { DarkModeContext } from "../../context/useDarkMode";
import * as S from "./style";

export function Dark() {
  const storage = localStorage.getItem("Elias-theme");
  useEffect(() => {
    const darkCheckbox: any = document.getElementById("dark");
    const LightCheckbox: any = document.getElementById("light");

    if (storage === "light") {
      darkCheckbox.defaultChecked = true;
    } else {
      LightCheckbox.defaultChecked = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { changeTheme } = useContext(DarkModeContext);
  return (
    <S.Container>
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
