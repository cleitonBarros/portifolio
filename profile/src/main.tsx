import React from "react";
// eslint-disable-next-line import-helpers/order-imports
import ReactDOM from "react-dom/client";

import "./lib/i18n";

import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";
import { DarkModeProvider } from "./context/useDarkMode.tsx";
import { ChangeLanguageProvider } from "./context/useLanguage.tsx";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChangeLanguageProvider>
      <DarkModeProvider>
        <HelmetProvider>
          <GlobalStyles />
          <App />
        </HelmetProvider>
      </DarkModeProvider>
    </ChangeLanguageProvider>
  </React.StrictMode>
);
