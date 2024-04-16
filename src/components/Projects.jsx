import React from "react";
import useTheme from "../contexts/theme";
import useTranslations from "../hooks/useTranslations";

const Projects = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-[#1A210B]" : "bg-[#CBF281]";
  const boxColor = themeMode === "dark" ? "bg-[#2B2727]" : "bg-[#FFFFFF]";
  const mainProjectTitle =
    themeMode === "dark" ? "text-[#CBF281]" : "text-[#4731D3]";
  const projectTitleText =
    themeMode === "dark" ? "text-[#C1BAED]" : "text-[#4731D3]";
  const contentText = themeMode === "dark" ? "text-[#FFFFFF]" : "text-black";
  const labelButtons = themeMode === "dark" ? "bg-[#C1BAED]" : "bg-[#4731D3]";
  const bottomButton =
    themeMode === "dark"
      ? "bg-[#2B2727] text-[#CBF281]"
      : "bg-white text-black";
  const bottomText = themeMode === "dark" ? "text-[#CBF281]" : "text-black";

  const { t } = useTranslations();

  return (
    <div>
      <div className={`${bgColor} h-[1500px] lg:h-[800px] font-body font-bold`}>
        <p className={`${mainProjectTitle} text-4xl ml-6 lg:ml-36 pt-12`}>
          {t.projects}
        </p>

        <div
          className={`${boxColor} mt-8 ml-6 lg:ml-36 mr-6 lg:mr-36 lg:h-[300px] rounded`}
        >
          <div className="flex-none lg:flex">
            <img
              src="/images/crypto.png"
              alt=""
              className="lg:w-800 h-auto lg:h-[320px] rounded-t pt-6 pl-6 pr-6 lg:pt-4 lg:pl-4 lg:pr-4 lg:pb-10"
            />

            <div className="p-6">
              <p className={`${projectTitleText} text-2xl font-bold mb-4`}>
                {t.project1Title}
              </p>
              <p className={`${contentText} font-normal text-md mb-4`}>
                {t.project1p1} <br /> {t.project1p2} <br /> {t.project1p3}{" "}
                <br /> {t.project1p4}
              </p>

              <div className="flex flex-wrap mb-4">
                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-0 mt-2 p-2 rounded-3xl`}
                >
                  react
                </button>
                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-2 mt-2 p-2 rounded-3xl`}
                >
                  context
                </button>
                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-2 mt-2 p-2 rounded-3xl`}
                >
                  vercel
                </button>
              </div>

              <div className="flex mb-4">
                <button
                  className={`${bottomButton} font-body font-semibold text-md rounded-3xl w-24 ml-[-10px]`}
                  onClick={() =>
                    window.open("https://crypto-lyart-pi.vercel.app/", "_blank")
                  }
                >
                  <p className={`underline ${bottomText}`}>{t.project1view}</p>
                </button>
                <button
                  className={`${bottomButton} font-body font-semibold text-md rounded-3xl w-24 mr-2`}
                  onClick={() =>
                    window.open(
                      "https://github.com/sirdashasan/crypto",
                      "_blank"
                    )
                  }
                >
                  <p className={`underline ${bottomText}`}>Github</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${boxColor} mt-8 ml-6 lg:ml-36 mr-6 lg:mr-36 lg:h-[300px] rounded`}
        >
          <div className="flex-none lg:flex">
            <img
              src="/images/pizza.png"
              alt=""
              className="lg:w-800 h-auto lg:h-[320px] rounded-t pt-6 pl-6 pr-6 lg:pt-4 lg:pl-4 lg:pr-4 lg:pb-10"
            />

            <div className="p-6">
              <p className={`${projectTitleText} text-2xl font-bold mb-4`}>
                {t.project2Title}
              </p>
              <p className={`${contentText} font-normal text-md mb-4`}>
                {t.project2p1} <br /> {t.project2p2} <br /> {t.project2p3}{" "}
                <br /> {t.project2p4}
              </p>

              <div className="flex flex-wrap mb-4">
                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-0 mt-2 p-2 rounded-3xl`}
                >
                  react
                </button>
                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-2 mt-2 p-2 rounded-3xl`}
                >
                  cypress
                </button>

                <button
                  className={`${labelButtons} text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-md ml-2 mt-2 p-2 rounded-3xl`}
                >
                  vercel
                </button>
              </div>

              <div className="flex mb-4">
                <button
                  className={`${bottomButton} font-body font-semibold text-md rounded-3xl w-24 ml-[-10px]`}
                  onClick={() =>
                    window.open(
                      "https://pizza-nine-theta.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <p className={`underline ${bottomText}`}>{t.project2view}</p>
                </button>
                <button
                  className={`${bottomButton} font-body font-semibold text-md rounded-3xl w-24 mr-2`}
                  onClick={() =>
                    window.open(
                      "https://github.com/sirdashasan/fsweb-s7-challenge-pizza-main",
                      "_blank"
                    )
                  }
                >
                  <p className={`underline ${bottomText}`}>Github</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
