import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons/icons";
import useTheme from "../contexts/theme";

const Footer = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-[#252128]" : "bg-white";
  const contentText = themeMode === "dark" ? "text-[#FFFFFF]" : "text-black";
  const otherTexts = themeMode === "dark" ? "text-[#C1BAED]" : "text-[#4731D3]";
  const iconColor = themeMode === "dark" ? "#C1BAED" : "#4731D3";

  return (
    <div>
      <div
        className={`${bgColor} ${otherTexts} h-auto font-body font-bold flex items-center flex-col`}
      >
        <p className="text-3xl">Send me a message!</p>
        <p className={`${contentText} font-normal text-center mt-4`}>
          Got a question or proposal, or just want <br />
          to say hello? Go ahead.
        </p>
        <p className="font-semibold text-center underline mt-4">
          hasan.sirdas@outlook.com
        </p>

        <div
          className={`${iconColor} flex text-center items-center gap-4 mt-4`}
        >
          <TwitterIcon color={iconColor} />
          <InstagramIcon color={iconColor} />
          <LinkedinIcon color={iconColor} />
          <GithubIcon color={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
