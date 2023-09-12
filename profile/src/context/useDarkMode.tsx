import { ReactNode, createContext, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import { darkModeTheme } from "../styles/themes/darkModeTheme";
import { defaultTheme } from "../styles/themes/defaultTheme";

type themeType = "light" | "dark" | null;
interface ThemeContextType {
  darkMode: themeType;
  changeTheme: () => void;
}
interface ProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as ThemeContextType);

const localStorageTheme = localStorage.getItem("Elias-theme") as themeType;

export function DarkModeProvider({ children }: ProviderProps) {
  const [darkMode, setDarkMode] = useState<themeType>(localStorageTheme);

  function changeTheme() {
    const ThemeValue = darkMode === "light" ? "dark" : "light";
    setDarkMode(ThemeValue);

    localStorage.setItem("Elias-theme", ThemeValue);
  }

  useEffect(() => {
    if (!localStorageTheme) {
      changeTheme();
      localStorage.setItem("Elias-theme", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, changeTheme }}>
      <ThemeProvider
        theme={darkMode === "light" ? defaultTheme : darkModeTheme}
      >
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}
