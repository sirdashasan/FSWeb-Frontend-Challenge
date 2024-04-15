import { useContext } from "react";
import Translations from "../Translations";
import { TranslationsContext } from "../contexts/TranslationProvider.jsx";

const useTranslations = () => {
  const { language, setLanguage } = useContext(TranslationsContext);

  return {
    t: Translations[language],
    changeLanguage: setLanguage,
  };
};

export default useTranslations;
