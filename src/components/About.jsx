import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import about_svg from "../assets/about_svg.svg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-8 md:gap-[80px] mx-[70px] my-[50px] items-start md:items-center md:justify-center md:mx-[170px] md:my-[80px]"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-[50px] md:text-[80px]  text-center font-semibold px-0 md:px-6">
          About Me
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-1 -right-4 -z-10 w-[130px] md:w-auto md:right-0 "
        />
      </div>

      {/* Sections */}
      <div className="flex flex-col md:flex-row md:gap-20">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={about_svg}
            alt="Developer Illustration"
            className="w-[1400px] h-auto rounded-[15px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col md:gap-20">
          {/* Paragraph */}
          <div className="flex flex-col gap-5 text-[18px] md:text-[24px] font-medium leading-relaxed">
            <p>
              I’m a detail-driven Frontend Web Developer passionate about
              building responsive, user-focused websites. Skilled in HTML, CSS,
              JavaScript, and React, I turn designs into seamless digital
              experiences with clean, efficient code.
            </p>
            <p>
              I enjoy solving complex problems with elegant solutions and stay
              updated with the latest frontend trends to craft fast, modern, and
              intuitive interfaces.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5 mt-8 md:mt-0">
            {[
              { name: "HTML & CSS", width: "w-1/2" },
              { name: "JavaScript", width: "w-[70%]" },
              { name: "ReactJS", width: "w-3/5" },
              { name: "Node.JS", width: "w-1/2" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 md:gap-12 transition-transform duration-300 hover:scale-105"
              >
                <p className="min-w-[150px] text-[20px] md:text-[24px] font-medium">
                  {skill.name}
                </p>
                <hr
                  className={`${skill.width} h-[6px] md:h-2 rounded-full border-none outline-none bg-gradient-to-r from-[#bb07ec] to-[#e77810]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex justify-around sm:justify-between w-full mb-20 gap-5">
        {/* First Item */}
        <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105">
          <h1 className="text-[34px] md:text-[60px] font-bold bg-gradient-to-r from-[#bb07ec] via-[#e77810] to-[#e77810] bg-clip-text text-transparent">
            6+
          </h1>
          <p className="text-[16px] md:text-[22px] font-bold text-center">
            MONTHS OF EXPERIENCE
          </p>
        </div>

        {/* Vertical Divider */}
        <div className=" md:block w-px h-auto bg-white mx-4" />

        {/* Second Item */}
        <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105">
          <h1 className="text-[34px] md:text-[60px] font-bold bg-gradient-to-r from-[#bb07ec] via-[#e77810] to-[#e77810] bg-clip-text text-transparent">
            5+
          </h1>
          <p className="text-[16px] md:text-[22px] font-bold text-center">
            PROJECTS COMPLETED
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
