import React from "react";
import IMG_20240322_144655 from "../assets/IMG_20240328_184250.png";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            Third-year Computer Engineering student at KKWIEER, Nashik, mastering Full Stack development (MERN) and enhancing problem-solving skills in DSA. Successful creator of "BK PRAVIN DESALE" YouTube channel with 5 Lacks + Subscribers. Hardworking Person, use Rajyoga Meditation for self-confidence and concentration.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href={"Yashraj_Pravin_Desale.pdf"}
              download={true}
              target="_blank"
              rel="noreferrer"
              className="text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500 transition-transform"
            >
              Resume
              <HiDownload size={20} className="mt-1 ml-2" />
            </a>
          </div>
        </div>

        <div className="pt-2">
          <img
            src={IMG_20240322_144655}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
