import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "02d0fcb9-dc2a-47ee-995a-586d6518296c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      // event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-8 mx-10 my-5  md:gap-20 md:my-20 md:mx-[170px]"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-[50px] md:text-[80px]  font-semibold px-0 md:px-6">
          Get in touch
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-1 -right-4 -z-10 w-[130px] md:w-auto md:right-0 "
        />
      </div>

      {/* Section */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-36">
        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-[54px] md:text-[80px] font-bold bg-gradient-to-r from-[#bb07ec] via-[#e77810] to-[#e77810] bg-clip-text text-transparent text-center">
            Let's talk
          </h1>
          <p className="text-[#d8d8d8] text-[18px]  md:text-[20px] leading-8 md:max-w-[550px]">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex flex-col gap-6 text-[#d8d8d8] text-[22px]">
            <div className="flex items-center">
              <a
                href="mailto:ramchandrasiddh18@gmail.com"
                className="flex items-center gap-2"
              >
                <img src={mail_icon} alt="Email" className="w-6 md:w-auto" />
                <p>ramchandrasiddh18@gmail.com</p>
              </a>
            </div>
            <div className="flex items-center ">
              <a href="" className="flex items-center gap-2">
                <img src={call_icon} alt="Call" className="w-6 md:w-auto" />
                <p>+91 987-654-3210</p>
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.google.com/maps/place/Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img
                  src={location_icon}
                  alt="Location"
                  className="w-6 md:w-auto"
                />
                <p>Jaipur, Rajasthan</p>
              </a>
            </div>
          </div>
        </div>

        {/* Right / Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start gap-6 w-[80%] md:max-w-[700px]"
        >
          <label className="text-[#d8d8d8] text-[18px] md:text-[22px] font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-none w-full h-[60px]  md:w-[700px]  text-[20px] md:h-[78px] rounded bg-[#32323c] text-[#a0a0a0] pl-5 font-[Outfit]"
          />
          <label className="text-[#d8d8d8] text-[20px] font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border-none w-full h-[60px]  md:w-[700px]  text-[20px] md:h-[78px] rounded bg-[#32323c] text-[#a0a0a0] pl-5 font-[Outfit]"
          />
          <label className="text-[#d8d8d8] text-[20px] font-medium">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className=" w-[95%] text-[20px] md:w-[650px] p-[25px] border-none rounded bg-[#32323c] text-[#a0a0a0] font-[Outfit]"
          />
          <button
            type="submit"
            className="text-[20px] px-[40px] py-[15px] text-center mx-auto 
            md:text-[22px] md:px-[60px] md:py-[20px] md:mb-[50px] md:border-none md:text-white bg-gradient-to-r from-[#bb07ec] to-[#e77810] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
