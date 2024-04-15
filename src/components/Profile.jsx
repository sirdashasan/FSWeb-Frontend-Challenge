import React from "react";
import useTheme from "../contexts/theme";
import useTranslations from "../hooks/useTranslations";
import useAxios from "../hooks/useAxios";

const Profile = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-darkmodeLeft" : "bg-[#4731D3]";

  const { t } = useTranslations();

  const { response, loading, error } = useAxios(
    "https://run.mocky.io/v3/4490faf1-52b2-4657-81ec-eb168c3c767e"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const profile = response && response.profile;
  console.log(profile);

  return (
    <div>
      <div
        className={`${bgColor} flex flex-col lg:flex-row h-[600px] lg:h-[500px] font-body font-bold`}
      >
        <div className="lg:w-1/2">
          <p className="text-[#CBF281] text-4xl ml-6 mt-12 mb-6 lg:mb-6 lg:ml-36 lg:mt-24">
            {t.profile}
          </p>
          <div className="ml-6 lg:ml-36 mt-4 font-body font-normal">
            <p className="text-white text-xl mb-4">{t.basicInformation}</p>
            <div className="text-white font-light text-sm">
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.birthday}
                </span>{" "}
                <span className="font-body font-normal">
                  {profile?.dateOfBirth}
                </span>
              </p>
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.city}
                </span>{" "}
                <span className="font-body font-normal">{profile?.city}</span>
              </p>
              <div className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.education}
                </span>
                {profile?.education.map((item, index) => (
                  <div key={index} className="font-body font-normal">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mb-4">
                <span className="text-[#CBF281] font-body font-semibold">
                  {t.role}
                </span>{" "}
                <span className="font-body font-normal">{profile?.role}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:mt-20 ml-[-200px] mt-6 ">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-md w-auto h-[220px] mt-20 "
          />
        </div>
        <div className="ml-6 lg:ml-[-350px] mb-8 mt-6 mr-6 lg:mr-24 lg:mt-40 font-body font-normal text-white text-l">
          <p className="mb-3 text-xl">{t.aboutTitle}</p>
          <p className="text-sm">
            2019 yılında teknolojiye olan merakımı <br /> ve müziğe olan ilgimi
            birleştirerek <br /> Meet The Music girişimini kurdum. <br />
            2023 yılında 3.5 milyon dolar değerleme <br /> ile bir yatırım
            turunu tamamladım. <br /> 5 yıldır Business, Finans, Marketing ve{" "}
            <br /> Product gibi alanlarda çalıştım. Şimdi ise <br />
            Workintech ile yazılım öğreniyorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
