import React from "react";
import { GithubIcon, LinkedinIcon } from "../icons/icons";
import ThemeBtn from "./ThemeBtn";
import useTheme from "../contexts/theme";
import ChangeLanguageButton from "./ChangeLanguageButton";
import useTranslations from "../hooks/useTranslations";
// import useAxios from "../hooks/useAxios";

const Hero = () => {
  const { themeMode } = useTheme();

  const buttonBgColor = themeMode === "dark" ? "bg-[#2B2727]" : "bg-white";
  const buttonBorderColor =
    themeMode === "dark" ? "border-white" : "border-transparent";
  const buttonTextColor =
    themeMode === "dark" ? "text-white" : "text-special-blue";
  const iconColor = themeMode === "dark" ? "white" : "#4731D3";

  const { t } = useTranslations();

  /* const { response, loading, error } = useAxios(
    "https://run.mocky.io/v3/06a2a977-e299-4649-815b-265a0cecc08c"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const data = response && response.data; */

  return (
    <article className="flex flex-row justify-center">
      <section
        className={`h-auto flex-grow text-white ${
          themeMode === "dark" ? "bg-darkmodeLeft" : "bg-lightmodeLeft"
        }`}
      >
        <nav className="justify-center font-body font-bold text-2xl">
          <div className="w-full max-w-sm mx-auto flex justify-start ml-[120px] mr-[100px] lg:justify-end lg:ml-[610px] mt-4">
            <ChangeLanguageButton />
          </div>
          <div className="w-full max-w-sm mx-auto flex justify-end lg:justify-end lg:mr-[-170px] mb-4 mt-[-22px] ">
            <ThemeBtn />
          </div>
        </nav>
        <p className="text-special-green font-body font-bold text-3xl flex justify-start lg:flex lg:justify-center ml-[50px] mt-10 mb-36 lg:ml-[-530px] lg:flex-none lg:mt-12 lg:mb-24">
          {/* {data.name} */}
          Hasan Sırdaş
        </p>

        <div className="ml-12 mr-12 mt-[200px] lg:ml-36 lg:mt-12 lg:mb-16">
          <p className="font-body font-bold text-6xl text-special-green lg:ml-0 mb-6">
            {t.herop1a} <br /> {t.herop1b}
          </p>
          <p className="font-body text-xl text-white mb-6">
            {t.herop2a} <br />
            {t.herop2b}
          </p>
          <div>
            <button
              className={`${buttonBgColor} ${buttonBorderColor} ${buttonTextColor} border-2 hover:bg-special-green text-special-blue font-body font-semibold text-sm ml-0 mt-4 mr-4 mb-24 p-2 rounded w-28`}
            >
              <div
                className={`${iconColor} items-center flex gap-2 justify-center`}
                onClick={() =>
                  window.open("https://github.com/sirdashasan", "_blank")
                }
              >
                <GithubIcon color={iconColor} />
                Github
              </div>
            </button>
            <button
              className={`${buttonBgColor} ${buttonBorderColor} ${buttonTextColor} border-2 hover:bg-special-green text-special-blue font-body font-semibold text-sm ml-0 mt-4 mr-4 mb-24 p-2 rounded w-28`}
            >
              <div
                className={`${iconColor} items-center flex gap-2 justify-center`}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sirdashasan/",
                    "_blank"
                  )
                }
              >
                <LinkedinIcon color={iconColor} />
                Linkedin
              </div>
            </button>
          </div>
        </div>
      </section>
      <div
        className={`hidden lg:block h-auto w-1/3 flex-none flex items-center justify-center ${
          themeMode === "dark" ? "bg-darkmodeRight" : "bg-lightmodeRight"
        }`}
      ></div>
      <img
        src /* {data.image} */="https://pbs.twimg.com/profile_images/1814652241808076800/XetFAs8N_400x400.jpg"
        alt="Hasan Sırdaş Profile Picture"
        className="rounded-xl  w-40 h-40 ml-[-220px] mt-36 lg:w-80 lg:h-80 lg:ml-[540px] lg:mt-[190px] absolute"
      />
    </article>
  );
};

export default Hero;
