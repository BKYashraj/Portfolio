import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 sm:text-3xl md:text-4xl">
            About Me
          </p>
        </div>

        <p className="text-lg mt-5 leading-relaxed sm:text-base md:text-lg">
          I am a <b>4th-year Computer Engineering student</b> at KKWIEER, Nashik, with strong skills in <b>MERN Stack development</b> and a commitment to improving my <b>problem-solving abilities in Data Structures and Algorithms (DSA)</b>.
        </p>

        <p className="text-lg mt-5 leading-relaxed sm:text-base md:text-lg">
          My latest project, <b>Hackathon Research Hub</b>, is a full-stack platform that allows users to share hackathon experiences and research papers with full <b>CRUD functionality</b>. I developed this project independently, implementing secure <b>JWT authentication</b> along with <b>Google authentication</b> for enhanced security and user access.
          <br />You can view the live project here:{" "}
          <a
            href="https://hackathon-research-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Hackathon Research Hub
          </a>.
        </p>

        <ul className="list-disc ml-8 mt-3 sm:text-base md:text-lg">
          <li>
            <b>Role:</b> Full-Stack Developer (Individual Project)
          </li>
          <li>
            <b>Skills:</b> ReactJS, Redux Thunk, JavaScript, NodeJS with
            ExpressJS, MongoDB with Mongoose, Cloudinary, Postman, Render,
            Vercel
          </li>
        </ul>

        <p className="text-lg mt-5 leading-relaxed sm:text-base md:text-lg">
          Practice <b>Rajyoga Meditation</b> daily to enhance{" "}
          <b>work efficiency</b>, <b>self-confidence</b>, and{" "}
          <b>mind concentration.</b>
        </p>

        <p className="text-lg mt-5 leading-relaxed sm:text-base md:text-lg">
          Additionally, my research paper titled{" "}
          <b>"Ethanol-Powered Vehicles: Advancements in Flex-Fuel Technology and Supply Chain Integration"</b>{" "}
          was accepted by <b>Springer</b> and won <b>1st Prize</b> at the
          National Level Student Conference.
        </p>
      </div>
    </div>
  );
};

export default About;
