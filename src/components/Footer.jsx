import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons/icons";
import useTheme from "../contexts/theme";
import useTranslations from "../hooks/useTranslations";

const Footer = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-[#252128]" : "bg-white";
  const contentText = themeMode === "dark" ? "text-[#FFFFFF]" : "text-black";
  const otherTexts = themeMode === "dark" ? "text-[#C1BAED]" : "text-[#4731D3]";
  const iconColor = themeMode === "dark" ? "#C1BAED" : "#4731D3";

  const { t } = useTranslations();

  return (
    <div>
      <div
        className={`${bgColor} ${otherTexts} h-[380px] pt-[100px] font-body font-bold flex items-center flex-col`}
      >
        <p className="text-3xl">{t.footerp1}</p>
        <p className={`${contentText} font-normal text-center mt-4`}>
          {t.footerp2} <br />
          {t.footerp3}
        </p>
        <p className="font-semibold text-center underline mt-4">
          hasan.sirdas@outlook.com
        </p>

        <div
          className={`${iconColor} flex text-center items-center gap-4 mt-4 `}
        >
          <button>
            <TwitterIcon color={iconColor} />
          </button>
          <button>
            <InstagramIcon color={iconColor} />
          </button>
          <button>
            <LinkedinIcon color={iconColor} />
          </button>
          <button>
            <GithubIcon color={iconColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
