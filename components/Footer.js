import Image from "next/future/image";
import cyborg_lines from "../public/Icons/cyborg-lines-9.png";
import email from "../public/Icons/email.png";
import instagram from "../public/Icons/instagram.png";
import linkedIn from "../public/Icons/linkedin.png";
import github from "../public/Icons/github.png";
import telegram from "../public/Icons/telegram.png";
import discord from "../public/Icons/discord.png";
const Footer = () => {
  return (
    <div className="m-2 relative">
      <Image
        src={cyborg_lines}
        className="opacity-10 absolute bottom-0 md:bottom-0 translate-y-16 left-[-7rem] md:left-[7rem] md:right-[10rem] h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]"
        alt=""
      />
      <div className="flex flex-col items-center h-[100] font-productSans text-center">
        <p className="text-6xl font-bold text-gray-600 p-5">Contact Us</p>
        <br />
        <p className="text-xl text-gray-500">
          We are very active on the following platforms
        </p>
        <div className="max-w-sm grid grid-cols-3 gap-8 py-8 sm:px-0 w-60">
          <a href="">
            <Image src={email} alt="email" />
          </a>
          <a href="">
            <Image src={instagram} alt="instagram" />
          </a>
          <a href="">
            <Image src={linkedIn} alt="linkedin" />
          </a>
          <a href="">
            <Image src={discord} alt="discord" />
          </a>
          <a href="">
            <Image src={github} alt="github" />
          </a>
          <a href="">
            <Image src={telegram} alt="telegram" />
          </a>
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
