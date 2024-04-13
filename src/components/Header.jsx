import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-center font-body font-bold text-2xl">
      <div className="bg-[#4731D3] text-[#CBF281] h-auto flex-grow">
        <p className="ml-36 mt-12 mb-12">Hasan Sırdaş</p>
      </div>
      <div className="bg-[#CBF281] text-white h-auto w-1/3 flex-none "></div>
    </div>
  );
};

export default Header;
