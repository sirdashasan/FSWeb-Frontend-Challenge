import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="bg-[#CBF281] h-auto lg:h-[800px] font-body font-bold">
        <p className="text-[#4731D3] text-3xl ml-6 lg:ml-36 pt-12">Projects</p>

        <div className="bg-[#FFFFFF] mt-8 ml-6 lg:ml-36 mr-6 lg:mr-36 rounded">
          <div className="flex-none lg:flex">
            <img
              src="https://cryptocointracker.com/images/coingecko-crypto-sheet-tracker.png"
              alt=""
              className="w-full h-60 rounded-t p-2"
            />

            <div className="p-6">
              <p className="text-[#4731D3] text-lg font-bold mb-4">
                Crypto Project
              </p>
              <p className="font-normal text-sm mb-4">
                Sade bir tasarım ile kripto paraların son durumunun takip
                edilebileceği, arama yapılarak istenilen coinin ayrıntılı
                görüntülebileceği bir kripto para projesi. React, JS, Tailwind
                CSS ve Context API ile oluşturuldu.
              </p>

              <div className="flex flex-wrap mb-4">
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  react
                </button>
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  context
                </button>
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  vercel
                </button>
              </div>

              <div className="flex mb-4">
                <button className="bg-white text-black font-body font-semibold text-sm rounded-3xl w-1/2 mr-2">
                  <p className="underline">View Site</p>
                </button>
                <button className="bg-white text-black font-body font-semibold text-sm rounded-3xl w-1/2">
                  <p className="underline">Github</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] mt-8 ml-6 lg:ml-36 mr-6 lg:mr-36 rounded">
          <div className="flex-none lg:flex">
            <img
              src="https://cryptocointracker.com/images/coingecko-crypto-sheet-tracker.png"
              alt=""
              className="w-full h-60 rounded-t p-2"
            />

            <div className="p-6">
              <p className="text-[#4731D3] text-lg font-bold mb-4">
                Crypto Project
              </p>
              <p className="font-normal text-sm mb-4">
                Sade bir tasarım ile kripto paraların son durumunun takip
                edilebileceği, arama yapılarak istenilen coinin ayrıntılı
                görüntülebileceği bir kripto para projesi. React, JS, Tailwind
                CSS ve Context API ile oluşturuldu.
              </p>

              <div className="flex flex-wrap mb-4">
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  react
                </button>
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  context
                </button>
                <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-2 mt-2 p-2 rounded-3xl">
                  vercel
                </button>
              </div>

              <div className="flex mb-4">
                <button className="bg-white text-black font-body font-semibold text-sm rounded-3xl w-1/2 mr-2">
                  <p className="underline">View Site</p>
                </button>
                <button className="bg-white text-black font-body font-semibold text-sm rounded-3xl w-1/2">
                  <p className="underline">Github</p>
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
