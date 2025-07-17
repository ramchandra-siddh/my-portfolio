import React from "react";
import footer_logo from "../assets/footer_logo.svg";
import user_icon from "../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="mx-[70px] my-[50px] flex flex-col gap-8 md:mx-[170px] md:my-[50px]">
      <div className="flex flex-col md:flex-row gap-12 md:justify-between md:gap-8">
        <div className="max-w-[400px] text-lg text-white">
          <p>
            I'm a frontend developer from Rajasthan, India with 6 months of
            experience in multiple companies like TCS, PCS, HCLTech.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-9">
          <div className="flex gap-7  pr-20 py-5 px-8 rounded-full bg-[#32323b] border-2 border-transparent hover:border-white transition-transform duration-300">
            <img src={user_icon} alt="user" className="w-8 h-8" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-[#a0a0a0] text-xl placeholder:text-[#a0a0a0] font-[Outfit]"
            />
          </div>
          <div className="text-xl px-12 py-5 rounded-full bg-gradient-to-r from-[#bb07ec] to-[#e77810] cursor-pointer transition-transform duration-300 hover:scale-110">
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="flex flex-col-reverse items-center text-base  mb-12 md:flex-row md:items-center md:justify-between md:text-xl gap-8">
        <p className="whitespace-nowrap">
          © 2025 Ramchandra All rights reserved
        </p>
        <div className="flex gap-8">
          <p className="cursor-pointer">Term of Services</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
