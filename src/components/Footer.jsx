import React from "react";
import FaceBook from "./icons/FaceBook";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <h2 className="text-xl font-bold">Alish Shakya</h2>

        {/* Center - Social Icons */}
        <div className="flex gap-6">
          <FaceBook />
          <Instagram />
          <Github />
          <Linkedin />
        </div>

        {/* Right */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
