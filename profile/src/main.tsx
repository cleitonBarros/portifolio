import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./lib/i18n";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/useDarkMode.tsx";
import { ChangeLanguageProvider } from "./context/useLanguage.tsx";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChangeLanguageProvider>
      <DarkModeProvider>
        <Suspense fallback={<div>Loading...</div>} />
        <GlobalStyles />
        <App />
      </DarkModeProvider>
    </ChangeLanguageProvider>
  </React.StrictMode>
);
