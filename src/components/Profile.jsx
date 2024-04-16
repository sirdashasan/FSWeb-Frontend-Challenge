import React from "react";
import useTheme from "../contexts/theme";
import useTranslations from "../hooks/useTranslations";

const Profile = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-darkmodeLeft" : "bg-[#4731D3]";

  const { t } = useTranslations();

  return (
    <article>
      <section
        className={`${bgColor} flex flex-col lg:flex-row h-[600px] lg:h-[500px] font-body font-bold`}
      >
        <div className="lg:w-1/2">
          <header>
            <h1 className="text-[#CBF281] text-4xl ml-6 mt-12 mb-6 lg:mb-6 lg:ml-36 lg:mt-24">
              {t.profile}
            </h1>
          </header>
          <div className="ml-6 lg:ml-36 mt-4 font-body font-normal">
            <p className="text-white text-xl mb-4">{t.basicInformation}</p>
            <div className="text-white font-light text-sm">
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.birthday}
                </span>{" "}
                <span className="font-body font-normal">{t.birthdayValue}</span>
              </p>
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.city}
                </span>{" "}
                <span className="font-body font-normal">{t.cityValue}</span>
              </p>
              <div className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.education}
                </span>
                {t.educationValue.map((item, index) => (
                  <div key={index} className="font-body font-normal">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.role}
                </span>{" "}
                <span className="font-body font-normal">{t.roleValue}</span>
              </p>
            </div>
          </div>
        </div>
        <aside className="hidden lg:block lg:w-1/2 lg:mt-20 ml-[-200px] mt-6 ">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile Visual Representation"
            className="rounded-md w-auto h-[220px] mt-20 "
          />
        </aside>
        <section className="ml-6 lg:ml-[-300px] mb-8 mt-6 mr-6 lg:mr-24 lg:mt-40 font-body font-normal text-white text-l">
          <header>
            <h2 className="mb-3 text-xl">{t.aboutTitle}</h2>
          </header>
          <p className="text-sm">
            {t.aboutValuep1} <br /> {t.aboutValuep2} <br /> {t.aboutValuep3}{" "}
            <br />
            {t.aboutValuep4} <br /> {t.aboutValuep5} <br /> {t.aboutValuep6}
            <br /> {t.aboutValuep7} <br />
            {t.aboutValuep8}
          </p>
        </section>
      </section>
    </article>
  );
};

export default Profile;
