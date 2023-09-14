import { ReactNode, createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { TFunction } from "i18next";

export type languageProps = {
  t: TFunction<"translation", undefined>;
  handleLanguageChange(): void;
  currentLanguage: string;
};
interface contextProps {
  children: ReactNode;
}

export const LanguageContext = createContext({} as languageProps);

function ChangeLanguageProvider({ children }: contextProps) {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  const handleLanguageChange = () => {
    const newLang = currentLanguage === "pt" ? "en" : "pt";
    changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ t, handleLanguageChange, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
function useLangue() {
  const context = useContext(LanguageContext);
  return context;
}
export { ChangeLanguageProvider, useLangue };
