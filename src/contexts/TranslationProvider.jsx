import React, { createContext, useState, useEffect } from "react";

export const TranslationsContext = createContext();

const TranslationsProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <TranslationsContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
