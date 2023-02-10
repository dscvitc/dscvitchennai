import * as React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cyborg_lines from "../public/Icons/cyborg-lines-9.png";

const ReactIcon = (props) => {
  return (
    <>
      <a
        href={props?.link}
        className="text-4xl text-gray-700 hover:-translate-y-0.5"
        target="__blank"
      >
        {props?.Icon}
      </a>
    </>
  );
};

const Footer = () => {
  return (
    <div
      className="m-2 relative bg-fill bg-contain bg-opacity-20 bg-no-repeat bg-[-296px_bottom]"
      style={{
        backgroundImage: `url('${cyborg_lines.src}')`,
      }}
    >
      <div className="flex flex-col items-center h-[100] font-productSans text-center">
        <p className="text-6xl font-bold text-gray-600 p-5">Contact Us</p>
        <br />
        <p className="text-xl text-gray-500">
          We are very active on the following platforms
        </p>
        <div className="max-w-sm grid grid-cols-3 gap-8 py-8 sm:px-0 w-60">
          <ReactIcon Icon={<MdEmail />} link="mailto:gdsc.vitc@gmail.com" />
          <ReactIcon
            Icon={<AiOutlineInstagram />}
            link="https://www.instagram.com/gdscvitchennai"
          />
          <ReactIcon
            Icon={<AiFillLinkedin />}
            link="https://www.linkedin.com/company/68808386/"
          />
          <ReactIcon Icon={<FaDiscord />} link="https://discord.gg/KMG76e7m" />
          <ReactIcon
            Icon={<AiFillGithub />}
            link="https://github.com/dscvitc/"
          />
          <ReactIcon Icon={<FaTelegramPlane />} link="telegram" />
        </div>
        <p className="text-center text-xl text-gray-500">
          Want to stay updated with the latest news and events at GDSC VITC
        </p>
        <br />
        <div className="md:space-x-8 flex justify-center items-center flex-wrap w-1/2">
          <input
            className="border-2 border-gray-400 focus:border-black h-full w-[26rem] p-2 text-center pr-4 rounded-md ml-4 mb-2 mt-2 z-[1]"
            placeholder="Enter your email"
          ></input>
          <button className="h-full bg-gray-700 p-2 pl-4 pr-4 rounded-md text-white">
            Get Updates
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Footer;
