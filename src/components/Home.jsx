import React from "react";
import IMG_20240322_144655 from "../assets/IMG_20240328_184250.png";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:pt-36"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row space-y-6 md:space-y-0">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-lg text-lg md:text-xl">
            Final-year Computer Engineering student at KKWIEER, Nashik, mastering Full Stack Development (MERN Stack) and enhancing problem-solving skills in DSA. I practice Rajyoga Meditation to improve work efficiency, self-confidence, and mental focus.
          </p>

          <div className="flex">
            <a
              href={"Yashraj_Desale_Latest.pdf"}
              download={true}
              target="_blank"
              rel="noreferrer"
              className="text-white px-8 py-4 mt-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-cyan-400"
            >
              Download Resume
              <HiDownload size={22} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-0">
          <img
            src={IMG_20240322_144655}
            alt="My Profile"
            className="rounded-2xl mx-auto w-4/5 md:w-3/4 lg:w-2/3 transform hover:scale-105 transition-transform duration-300 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
