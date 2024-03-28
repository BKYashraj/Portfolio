import React from "react";
// import HeroImage from "../assets/HeroImage.png";
import IMG_20240322_144655 from "../assets/IMG_20240328_184250.png";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white pt-20 md:pt-0">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            ◆ I am a third-year Computer engineering student at KKWIEER, Nashik.
            <br />
            ◆ I have Successfully developed an Educational YouTube Channel
            named BK PRAVIN DESALE with the support of my parents, which was
            started in June 2020 and within 3 years it has completed 5 Lacks +
            Subscribers.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                {" "}
                <IoIosArrowForward size={20} className=" mt-1 ml-1" />{" "}
              </span>
            </button>
          </div>

        </div>

        <div>
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
