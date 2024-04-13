import React from "react";

const Skills = () => {
  return (
    <div className="flex h-96 mb-12">
      <div className="font-body font-bold text-3xl text-[#4731D3] h-auto">
        <p className="ml-36 mt-12 mb-24">Skills</p>
      </div>
      <div className="w-52 h-52 ml-32 font-body font-semibold text-l text-gray-400">
        <div className="flex items-center mb-[-90px]">
          <img src="../logos/js-logo.png" alt="" />
          <p className="mt-[-20px] ml-[-40px]">JAVASCRIPT</p>
        </div>
        <div className="flex items-center mb-[-90px]">
          <img src="../logos/react-logo.png" alt="" />
          <p className="mt-[-20px] ml-[-40px]">REACT</p>
        </div>
        <div className="flex items-center mb-[-90px]">
          <img src="../logos/redux-logo.png" alt="" />
          <p className="mt-[-20px] ml-[-40px]">REDUX</p>
        </div>
      </div>
      <div className="w-52 h-52 ml-32 font-body font-semibold text-l text-gray-400">
        <div className="w-52 h-52 ml-36">
          <div className="flex items-center mb-[-90px]">
            <img src="../logos/node-logo.png" alt="" />
            <p className="mt-[-20px] ml-[-40px]">NODE</p>
          </div>
          <div className="flex items-center mb-[-90px]">
            <img src="../logos/vs-logo.png" alt="" />
            <p className="mt-[-20px] ml-[-40px]">VSC</p>
          </div>
          <div className="flex items-center mb-[-90px]">
            <img src="../logos/figma-logo.png" alt="" />
            <p className="mt-[-20px] ml-[-40px]">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
