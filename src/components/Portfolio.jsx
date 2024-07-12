import React from "react";
import pizza from "../assets/Project Images/PizzaApp.png";
import debuggers from "../assets/Project Images/debuggers.png";
import email from "../assets/Project Images/maxresdefault.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pizza,
      title: "Pizza Corner",
      demoLink: "https://pizza-app-frontend-tau.vercel.app/",
      codeLink: "https://github.com/BKYashraj/PizzaApp-Backend",
    },
    {
      id: 2,
      src: debuggers,
      title: "DEBUGGERS' CLUB WEBSITE",
      demoLink: "https://debuggersclub.netlify.app/",
      codeLink: "https://github.com/BKYashraj/debuggersclubsite",
    },
    {
      id: 3,
      src: email,
      title: "EMAIL, SMS SPAM CLASSIFIER",
      demoLink: "https://github.com/BKYashraj/Email-SMS-Spam-Classifier",
      codeLink: "https://github.com/BKYashraj/Email-SMS-Spam-Classifier",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <header className="pb-3">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </h2>
          <p className="py-5">Check out some of my work right here</p>
        </header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-1 sm:px-0">
          {portfolios.map(({ id, src, title, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg transition-transform duration-200 transform hover:scale-105"
            >
              <img src={src} alt={title} className="rounded-md" />
              <h3 className="text-lg font-semibold text-center mt-2">
                {title}
              </h3>
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 bg-gray-700 rounded hover:bg-gray-600 text-center"
                >
                  Live Link
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-3 duration-200 bg-gray-700 rounded hover:bg-gray-600 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
