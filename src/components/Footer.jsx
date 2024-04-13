import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons/icons";

const Footer = () => {
  return (
    <div>
      <div className="bg-white text-[#4731D3] h-auto font-body font-bold mt-12 mb-12 flex items-center flex-col">
        <p className="text-3xl">Send me a message!</p>
        <p className="text-black font-normal text-center mt-4">
          Got a question or proposal, or just want <br />
          to say hello? Go ahead.
        </p>
        <p className="font-semibold text-center underline mt-4">
          hasan.sirdas@outlook.com
        </p>

        <div className="flex text-center items-center gap-4 mt-4">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
