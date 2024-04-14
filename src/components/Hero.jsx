import React from "react";
import { GithubIcon, LinkedinIcon } from "../icons/icons";
import ThemeBtn from "./ThemeBtn";
import useTheme from "../contexts/theme";

const Hero = () => {
  const { themeMode } = useTheme();

  const buttonBgColor = themeMode === "dark" ? "bg-[#2B2727]" : "bg-white";
  const buttonBorderColor =
    themeMode === "dark" ? "border-white" : "border-transparent";
  const buttonTextColor =
    themeMode === "dark" ? "text-white" : "text-special-blue";
  const iconColor = themeMode === "dark" ? "white" : "#4731D3";

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`h-auto flex-grow text-white ${
          themeMode === "dark" ? "bg-darkmodeLeft" : "bg-lightmodeLeft"
        }`}
      >
        <div className="justify-center font-body font-bold text-2xl">
          <div className="w-full max-w-sm mx-auto flex justify-center lg:justify-end lg:mr-[-170px] mb-4 mt-4">
            <ThemeBtn />
          </div>
          <p className="text-special-green ml-40 mt-12 mb-36 lg:ml-36 lg:mt-12 lg:mb-24">
            Hasan Sırdaş
          </p>
        </div>

        <div className="ml-12 mr-12 mt-[200px] lg:ml-36 lg:mt-12 lg:mb-16">
          <p className="font-body font-bold text-6xl text-special-green mb-6">
            I am a Frontend <br />
            Developer...
          </p>
          <p className="font-body text-xl text-white mb-6">
            ...who likes to craft solid and scalable frontend products <br />
            with great user experiences.
          </p>
          <div>
            <button
              className={`${buttonBgColor} ${buttonBorderColor} ${buttonTextColor} border-2 hover:bg-special-green text-special-blue font-body font-semibold text-sm ml-0 mt-4 mr-4 mb-24 p-2 rounded w-28`}
            >
              <div
                className={`${iconColor}items-center flex gap-2 justify-center`}
              >
                <GithubIcon color={iconColor} />
                Github
              </div>
            </button>
            <button
              className={`${buttonBgColor} ${buttonBorderColor} ${buttonTextColor} border-2 hover:bg-special-green text-special-blue font-body font-semibold text-sm ml-0 mt-4 mr-4 mb-24 p-2 rounded w-28`}
            >
              <div
                className={`${iconColor}items-center flex gap-2 justify-center`}
              >
                <LinkedinIcon color={iconColor} />
                Linkedin
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:block h-auto w-1/3 flex-none flex items-center justify-center ${
          themeMode === "dark" ? "bg-darkmodeRight" : "bg-lightmodeRight"
        }`}
      ></div>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQH3SuVX0xKCgw/profile-displayphoto-shrink_800_800/0/1700637350197?e=1718236800&v=beta&t=QNthLz9HDYDTFbPzBClyH2Lxe6A05WxcHycR5_ECIRU"
        alt="Hasan Sırdaş Profile Picture"
        className="rounded-xl w-40 h-40 ml-0 mt-24 lg:w-80 lg:h-80 lg:ml-[520px] lg:mt-[140px] absolute"
      />
    </div>
  );
};

export default Hero;
