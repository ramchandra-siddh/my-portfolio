import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mx-[30px]  my-5 md:my-3 md:mx-[170px]  text-white font-medium">
      {/* Social Icons */}
      <div className="flex gap-5 text-xl">
        <a
          href="https://www.linkedin.com/in/ramchandranathsiddh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ramchandra-siddh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={() => setIsMenuOpen(true)}
          alt=""
          className="md:hidden fixed right-6 top-6 z-50 w-6 h-6 cursor-pointer"
        />
      )}

      {/* Nav Links */}
      <ul
        className={`fixed md:static top-0 ${
          isMenuOpen ? "right-[-40vw]" : "right-[-100vw]"
        } md:right-0 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[64px] list-none text-xl md:text-[22px] bg-[#1f0016] md:bg-transparent h-full md:h-auto w-[75vw] md:w-auto p-6 transition-all duration-500 z-40`}
      >
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt=""
          className="block md:hidden w-6 h-6 mb-8 self-end cursor-pointer"
        />

        {["home", "about", "work", "contact"].map((item) => (
          <li key={item} className="flex flex-col cursor-pointer text-white">
            <AnchorLink className="no-underline" href={`#${item}`} offset={50}>
              <p
                onClick={() => {
                  setMenu(item);
                  setIsMenuOpen(false);
                }}
              >
                {item === "about"
                  ? "About Me"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item && (
              <hr className="border-none h-[2.5px] w-[80%] mx-auto  md:w-[60%] bg-gradient-to-r from-[#bb07ec] to-[#e77810] mt-0.25" />
            )}
          </li>
        ))}
      </ul>

      {/* Connect With Me */}
      <div className="hidden md:block px-11 py-4 rounded-full bg-gradient-to-r from-[#bb07ec] to-[#e77810] text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105">
        <AnchorLink
          href="#contact"
          offset={50}
          // className="text-white no-underline"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
