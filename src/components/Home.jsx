import React from "react";
import FaceBook from "./icons/FaceBook";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Home = () => {
  return (
    <div className="px-6 py-12 md:px-20 min-h-screen  bg-primaryBackground dark:bg-secondaryBackground">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Right Side - Text */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-4xl md:text-4xl font-bold text-textPrimary dark:text-textSecondary">
            Hello,
          </h1>
          <span className="block font-semibold text-2xl md:text-2xl text-red-500 mt-2 md:mt-4">
            I'm Alish Shakya
          </span>

          <p className="mt-4 md:mt-5 text-sm md:text-base text-textPrimary dark:text-textSecondary font-sans">
            I create clean, efficient, and user-friendly web applications using
            modern technologies like React and Node.js. Passionate about turning
            ideas into seamless digital experiences. Let’s build something great
            together!
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-8  mt-6 md:mt-8">
            <FaceBook className="" />
            <Instagram />
            <Github />
            <Linkedin />
          </div>

          {/* Button */}
          <div className="mt-8 md:gap-20 gap-8 flex md:mt-10 ">
            <button
              className="border-2 rounded-lg p-2 px-5 md:px-8 border-red-500 
            hover:bg-red-500 hover:text-white  hover:font-bold
            hover:scale-105
            transition-all duration-200
            cursor-pointer
            text-textPrimary dark:text-textSecondary
          "
            >
              Hire Me
            </button>

            <button
              className="border-2 border-red-500 rounded-lg p-2 px-8
                   hover:bg-red-500 hover:text-white
                   hover:scale-105
                   hover:font-bold
                   transition-all duration-300
                   cursor-pointer
                   text-textPrimary dark:text-textSecondary"
            >
              View CV
            </button>
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="w-full md:w-[25%] flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src="/1.jpg"
            alt="image"
            className="w-64 md:w-full rounded-2xl border-red-500 border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
