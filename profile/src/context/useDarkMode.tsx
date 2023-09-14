import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

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

const DarkModeContext = createContext({} as ThemeContextType);

function DarkModeProvider({ children }: ProviderProps) {
  const [darkMode, setDarkMode] = useState<themeType>(
    () => localStorage.getItem("Elias-theme") as themeType
  );

  function changeTheme() {
    const ThemeValue = darkMode === "light" ? "dark" : "light";
    setDarkMode(ThemeValue);

    localStorage.setItem("Elias-theme", ThemeValue);
  }

  useEffect(() => {
    if (!darkMode) {
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

function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}
export { DarkModeProvider, useDarkMode };
