import { Typewriter } from "react-simple-typewriter";
import my_svg from "../assets/my_svg.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-[35px] text-white px-4"
    >
      <img
        src={my_svg}
        alt=""
        className="mt-[120px] w-[260px] md:mt-[50px] md:w-[400px]"
      />
      <h1 className="text-center w-[90%] text-[50px] font-medium md:font-semibold md:w-[70%] md:text-[90px] mt-12">
        <span className="block bg-gradient-to-r from-[#bb07ec] to-[#e77810] bg-clip-text text-transparent">
          {`I'm Ramchandra, `}
        </span>
        <span className=" block bg-gradient-to-r from-[#bb07ec] to-[#e77810] bg-clip-text text-transparent text-[30px] md:font-semibold md:text-[60px] ">
          <Typewriter
            words={[
              "Frontend Developer",
              "MERN Stack Developer",
              "Backend Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
      <p className="w-[60%] text-[18px] leading-[32px] my-[10px] md:w-1/2 text-center md:text-center md:text-[24px] md:leading-[40px]">
        MERN Stack Developer (Fresher) with hands-on experience in building 5+
        real-world projects. Skilled in MongoDB, Express, React, and Node.js,
        and eager to contribute to impactful development teams.
      </p>

      <div className="flex items-center  flex-col md:flex-row gap-4 text-[18px] font-medium mb-[50px] md:gap-[55px] md:text-[24px]">
        <div className="px-[30px] py-[20px] rounded-[40px] md:px-[45px] md:py-[23px] md:rounded-full bg-gradient-to-r from-[#bb07ec] to-[#e77810] border-2 border-transparent hover:border-white transition-all duration-300 cursor-pointer text-[20px]">
          {/* <AnchorLink offset={50} href="#contact">
            Connect with me
          </AnchorLink> */}
          <a href="#contact"> Connect with us</a>
        </div>

        <div className="px-[40px] py-[20px] rounded-[40px]  md:px-[45px] md:py-[23px] md:rounded-full border-2 border-white hover:border-[#b415ff] transition-all duration-300 cursor-pointer">
          <a
            href="/Ramchandra CV Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-transparent text-white text-[20px] border-none rounded-[10px]  font-medium hover:scale-105 transition-transform duration-300">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
