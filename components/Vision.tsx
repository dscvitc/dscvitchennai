import Image from "next/image";
import Link from "next/link";
import React from "react";

const Vision = () => {
  const visions = [
    {
      id: 1,
      title: "Seminar",
      description: "Get updated with the latest news and announcements.",
      classes: "bg-[#f9eeb1] text-[#d8a209]",
    },
    {
      id: 2,
      title: "Projects",
      description: "Projects with a social impact that help a lot of people.",
      classes: "bg-[#efcabb] text-[#db4437]",
    },
    {
      id: 3,
      title: "Workshop",
      description: "Hands-on experience with the community",
      classes: "bg-[#d5e0ef] text-[#3975d8]",
    },
    {
      id: 4,
      title: "Hackthons",
      description: "Dreams, Explore. Wonder. Build it Together.",
      classes: "bg-[#c4e9d3] text-[#0f9d58]",
    },
  ];

  return (
    <>
      <div
        className="mt-20 items-center font-productSans h-full relative w-full flex flex-col space-y-6"
        id="vision"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <Image
          src="/Icons/arabica-323.png"
          className="opacity-10 absolute top-0 right-0 md:right-[10rem] -translate-y-[10rem] h-[25rem] w-[25rem] md:h-[40rem] md:w-[40rem] -z-10"
          alt=""
          width={400}
          height={400}
        />
        <div className="flex flex-col justify-center items-center ml-7 mr-0 space-y-6 text-gray-600 -translate-y-20">
          <h1 className="text-center text-6xl font-bold">Vision</h1>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            GDSC VIT Chennai is inspired by the Google Developer&apos;Family
          </p>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            Our goal is to learn, explore, innovate and create <br /> And also,
            having fun!
          </p>
        </div>
        <div className="max-w-screen md:m-auto sm:place-content-start md:space-x-10 lg:gap-0 grid grid-cols-2 sm:grid-cols-4 gap-8 ml-10">
          {visions.map(({ id, title, description, classes }) => (
            <div key={id} className="flex flex-col w-[10rem] text-[1.2rem]">
              <div className="my-4">
                <span className={`font-bold rounded-lg p-2 px-3 ${classes}`}>
                  {title}
                </span>
              </div>
              <p className="text-left text-gray-500">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full animate-bounce">
          <Link href="#team">
            <Image
              width={50}
              height={50}
              src="/Icons/down-arrow.png"
              className="w-10 h-10 cursor-pointer"
              alt="Down arrow"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Vision;
