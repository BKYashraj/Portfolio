import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          ◆ I am a third-year Computer engineering student at KKWIEER, Nashik. <br />
          ◆ I am learning MERN Stack web development as well as improving my
          problem-solving skills in DSA. <br />
          ◆ I have Successfully developed an Educational YouTube Channel named <b>BK
          PRAVIN DESALE</b> with the support of my parents, which was started in
          June 2020 and within 3 years it has completed <b>5 Lacks + Subscribers.</b> <br />
          ◆ Regular student of Prajapita Brahmakumari Ishwariya Vishwavidyalaya. <br />
          ◆ Website/ERP Coordinator of Debugger's Club KKWIEER. <br />
          ◆ Member of Rotaract Club Of Nashik Nine Hills.
        </p>
      </div>
    </div>
  );
};

export default About;
