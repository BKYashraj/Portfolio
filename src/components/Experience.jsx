import React from "react";

// import html from "../assets/html.png";
// import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
// import python from "../assets/python.png";
import Cplusplus from "../assets/C++_logo.png";
import go from "../assets/Go.png";
import express from "../assets/new logo images/express.png";
// import linux from "../assets/new logo images/linux.svg.png";
import mongoDB from "../assets/new logo images/mongodb.png";
import mysql from "../assets/new logo images/mysql_919836.png";
import postman from "../assets/new logo images/postman.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Cplusplus,
      title: "C++",
      style: "shadow-blue-600", // Updated to a consistent blue shade
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    // {
    //   id: 3,
    //   src: python,
    //   title: "Python",
    //   style: "shadow-blue-400", // Changed to reflect a softer blue tone
    // },
    {
      id: 3,
      src: go,
      title: "Golang",
      style: "shadow-purple-600", // Slightly darkened for better contrast
    },
    {
      id: 4,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500", // Corrected to green
    },
    {
      id: 5,
      src: express,
      title: "ExpressJS",
      style: "shadow-gray-400", // Reflects Express' usual gray color
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      style: "shadow-green-600", // Darker green for distinction
    },
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-400", // MySQL's common color theme
    },
    // {
    //   id: 10,
    //   src: tailwind,
    //   title: "Tailwind CSS",
    //   style: "shadow-sky-400",
    // },
    // {
    //   id: 11,
    //   src: linux,
    //   title: "Linux",
    //   style: "shadow-yellow-500", // Changed to reflect Linux's logo color
    // },
    {
      id: 9,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500", // Matches Postman's orange theme
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-center py-6 px-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 transition-transform duration-500 py-4 rounded-lg ${style} hover:shadow-lg hover:opacity-90`}
            >
              <img src={src} alt={`${title} logo`} className="w-22 h-20 mx-auto" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
