import React, { useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center md:gap-20 md:my-10 md:mx-[170px] mx-10 my-5 gap-16"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-[50px] md:text-[80px] text-center font-semibold px-0 md:px-6 whitespace-nowrap">
          My latest Work
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-1 -right-4 -z-10 w-[130px] md:w-auto md:right-0"
        />
      </div>

      {/* Projects Container */}
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 md:gap-10 ">
        {(showAll ? mywork_data : mywork_data.slice(0, 3)).map(
          (work, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={work.w_img}
                alt={`Project ${index + 1}`}
                className="w-[80%] h-[200px] md:h-[250px]  md:max-w-[419px] rounded-lg transition-transform duration-300 hover:scale-110 hover:outline-2 hover:outline-[#ff00ff] box-border"
              />
              <div className="flex flex-col items-center gap-4 mt-4 w-full md:flex-row md:justify-around md:gap-[50px] md:mt-8 ">
                <a
                  href={work.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[80%]"
                >
                  <button className="w-full px-0 py-3 text-base md:px-10 md:py-2.5 md:text-white md:font-semibold rounded-lg bg-gradient-to-r from-[#bb07ec] to-[#e77810] text-white font-semibold  transition-transform duration-200 hover:scale-110 hover:from-[#bb07ec]to-[#e77810]">
                    View Code
                  </button>
                </a>
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[80%] max-md:w-[80%]"
                >
                  <button className="w-full px-0 py-3 text-base md:px-10 md:py-2.5 md:text-white md:font-semibold rounded-lg bg-gradient-to-r from-[#bb07ec] to-[#e77810] text-white font-semibold  transition-transform duration-200 hover:scale-110 hover:from-[#bb07ec]to-[#e77810]">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          )
        )}
      </div>

      {/* Show More / Less */}
      <div
        onClick={() => setShowAll(!showAll)}
        className="flex gap-[15px] items-center justify-center rounded-full font-medium  border-2 border-white md:mb-2 md:text-[22px] transition-all duration-500 hover:gap-[30px] px-10 py-5 text-lg mx-auto my-2"
      >
        <p>{showAll ? "Show Less" : "Show More"}</p>
        <img
          src={arrow_icon}
          alt=""
          className={`transition-transform duration-500 ${
            showAll ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default MyWork;
