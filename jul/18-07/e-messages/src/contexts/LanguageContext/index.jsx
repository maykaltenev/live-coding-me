import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("german");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
