import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from "react";

export type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};
interface Props {
  children: ReactNode;
}
export const DarkModeContext = createContext<DarkModeProps | null>(null);

export function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  if (!darkMode) {
    window.document.body.classList.add("dark");
  } else {
    window.document.body.classList.remove("dark");
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
