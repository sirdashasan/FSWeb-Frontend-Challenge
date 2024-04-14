import React from "react";
import useTheme from "../contexts/theme";

const Profile = () => {
  const { themeMode } = useTheme();
  const bgColor = themeMode === "dark" ? "bg-darkmodeLeft" : "bg-[#4731D3]";

  return (
    <div>
      <div
        className={`${bgColor} flex flex-col lg:flex-row h-300 lg:h-96 font-body font-bold`}
      >
        <div className="lg:w-1/2">
          <p className="text-[#CBF281] text-3xl ml-6 mt-6 mb-6 lg:mb-6 lg:ml-36 lg:mt-12">
            Profile
          </p>
          <div className="ml-6 lg:ml-36 mt-4 font-body font-normal">
            <p className="text-white text-xl mb-4">Basic Information</p>
            <div className="text-white font-light text-sm">
              <p className="mb-4">
                <span className="text-[#CBF281] font-semibold">
                  Doğum Tarihi:
                </span>{" "}
                21.01.1996
              </p>
              <p className="mb-4">
                <span className="text-[#CBF281] font-semibold">
                  İkamet Şehri:
                </span>{" "}
                İzmir
              </p>
              <p className="mb-4">
                <span className="text-[#CBF281] font-semibold">
                  Eğitim Durumu:
                </span>{" "}
                Celal Bayar Üni. Mekatronik Müh. Lisans, <br /> Enerji
                Sistemleri Müh. Yüksek Lisans
              </p>
              <p className="mb-4">
                <span className="text-[#CBF281] font-semibold">
                  Tercih Ettiği Rol:
                </span>{" "}
                Business Development
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 ml-24 mt-6 ">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-md w-auto h-[220px] mt-20 "
          />
        </div>
        <div className="ml-6 lg:ml-[-60px] mb-8 mt-6 mr-6 lg:mr-24 lg:mt-24 font-body font-normal text-white text-l">
          <p className="mb-3 text-xl">About me</p>
          <p className="text-sm">
            2019 yılında teknolojiye olan merakımı <br /> ve müziğe olan ilgimi
            birleştirerek <br /> Meet The Music girişimini kurdum. <br />
            2023 yılında 3.5 milyon dolar değerleme <br /> ile bir yatırım
            turunu tamamladım. 5 yıldır Business, Finans, Marketing ve <br />{" "}
            Product gibi alanlarda çalıştım. Şimdi ise <br />
            Workintech ile yazılım öğreniyorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
