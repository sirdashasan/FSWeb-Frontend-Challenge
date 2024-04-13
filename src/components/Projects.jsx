import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="bg-[#CBF281] h-[900px] font-body font-bold ">
        <p className="text-[#4731D3] text-3xl ml-36 pt-12">Projects</p>

        <div className="bg-[#FFFFFF] mt-8 ml-36 mr-36 h-[340px] rounded">
          <div className="flex ">
            <img
              src="https://cryptocointracker.com/images/coingecko-crypto-sheet-tracker.png"
              alt=""
              className="w-60 h-60 ml-[80px] mt-[40px]"
            />

            <div>
              <div className="font-body font-bold ml-[60px]">
                <p className=" text-[#4731D3]  mt-[40px] mb-4  text-lg">
                  Crypto Project
                </p>
                <p className="font-normal">
                  Sade bir tasarım ile kripto paraların son durumunun takip
                  edilebileceği, arama yapılarak <br /> istenilen coinin
                  ayrıntılı görüntülebileceği bir kripto para projesi. React,
                  JS, Tailwind CSS <br />
                  ve Context API ile oluşturuldu.
                </p>

                <div>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4 p-2 rounded-3xl w-16">
                    react
                  </button>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4 p-2 rounded-3xl w-16">
                    context
                  </button>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4  p-2 rounded-3xl w-16">
                    vercel
                  </button>
                </div>

                <div className="mt-4 ml-[-18px]">
                  <button className="bg-white text-black font-body font-semibold text-sm  rounded-3xl w-24">
                    <p className="underline">View Site</p>
                  </button>
                  <button className="bg-white text-black font-body font-semibold text-sm  rounded-3xl w-24">
                    <p className="underline">Github</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] mt-8 ml-36 mr-36 h-[340px] rounded">
          <div className="flex ">
            <img
              src="https://cryptocointracker.com/images/coingecko-crypto-sheet-tracker.png"
              alt=""
              className="w-60 h-60 ml-[80px] mt-[40px]"
            />

            <div>
              <div className="font-body font-bold ml-[60px]">
                <p className=" text-[#4731D3]  mt-[40px] mb-4  text-lg">
                  Crypto Project
                </p>
                <p className="font-normal">
                  Sade bir tasarım ile kripto paraların son durumunun takip
                  edilebileceği, arama yapılarak <br /> istenilen coinin
                  ayrıntılı görüntülebileceği bir kripto para projesi. React,
                  JS, Tailwind CSS <br />
                  ve Context API ile oluşturuldu.
                </p>

                <div>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4 p-2 rounded-3xl w-16">
                    react
                  </button>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4 p-2 rounded-3xl w-16">
                    context
                  </button>
                  <button className="bg-[#4731D3] text-white hover:bg-[#CBF281] hover:text-[#4731D3] font-body font-normal text-sm ml-0 mt-4 mr-4  p-2 rounded-3xl w-16">
                    vercel
                  </button>
                </div>

                <div className="mt-4 ml-[-18px]">
                  <button className="bg-white text-black font-body font-semibold text-sm  rounded-3xl w-24">
                    <p className="underline">View Site</p>
                  </button>
                  <button className="bg-white text-black font-body font-semibold text-sm  rounded-3xl w-24">
                    <p className="underline">Github</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
