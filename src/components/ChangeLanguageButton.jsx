import React, { useContext } from "react";
import useTranslations from "../hooks/useTranslations";
import { TranslationsContext } from "../contexts/TranslationProvider";
import { toast } from "react-toastify";

const ChangeLanguageButton = () => {
  const { changeLanguage } = useTranslations();
  const { language } = useContext(TranslationsContext);

  const handleClick = () => {
    if (language === "tr") {
      changeLanguage("en");
      toast.success("Language changed to English!");
    } else {
      changeLanguage("tr");
      toast.success("Dil Türkçe'ye değiştirildi!");
    }
  };

  const buttonText =
    language === "tr" ? (
      <span>
        SWITCH to <span style={{ color: "#CBF281" }}>ENGLISH</span>
      </span>
    ) : (
      <span>
        <span style={{ color: "#CBF281" }}>TÜRKÇE</span>'YE GEÇ
      </span>
    );

  return (
    <div>
      <div className="font-body font-semibold text-base ">
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ChangeLanguageButton;
