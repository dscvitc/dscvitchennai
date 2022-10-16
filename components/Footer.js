const Footer = () => {
  return (
    <div className="m-2 relative">
      <img
        src={`/Icons/cyborg-lines-9.png`}
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
            <img src={"/Icons/email.png"} alt="email" />
          </a>
          <a href="">
            <img src={"/Icons/instagram.png"} alt="instagram" />
          </a>
          <a href="">
            <img src={"/Icons/linkedin.png"} alt="linkedin" />
          </a>
          <a href="">
            <img src={"/Icons/discord.png"} alt="discord" />
          </a>
          <a href="">
            <img src={"/Icons/github.png"} alt="github" />
          </a>
          <a href="">
            <img src={"/Icons/telegram.png"} alt="telegram" />
          </a>
        </div>
        <p className="text-center text-xl text-gray-500">
          Want to stay updated with the latest news and events at GDSC VITC
        </p>
        <br />
        <div className="md:space-x-8 flex justify-center items-center flex-wrap w-1/2">
          <input
            className="border-2 border-gray-400 focus:border-black h-full w-[26rem] p-2 text-center pr-4 rounded-md ml-4 mb-2 mt-2"
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
