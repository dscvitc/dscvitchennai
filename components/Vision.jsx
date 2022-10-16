/* eslint-disable */
import Link from "next/link";

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
        className="font-productSans h-full relative w-full flex flex-col space-y-10 mt-2"
        id="vision"
      >
        <img
          src={`/Icons/arabica-323.png`}
          className="opacity-10 absolute top-0 right-0 md:right-[10rem] -translate-y-[10rem]  h-[40rem] w-[40rem] md:h-[55rem] md:w-[55rem]"
          alt=""
        />
        <div className="flex flex-col justify-center items-center space-y-10 text-gray-600 -translate-y-20">
          <h1 className="text-center text-6xl  font-bold">Vision</h1>
          <p className="text-2xl text-center">
            GDSC VIT Chennai is inspired by the Google <br /> Developer's Family
          </p>
          <p className="text-2xl text-center">
            Our goal is to learn, explore, innovate and create <br /> And also,
            having fun!
          </p>
        </div>
        <div className="max-w-screen m-auto sm:place-content-start md:space-x-10 lg:gap-0 grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 sm:px-0">
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
          <Link href={`/`}>
            <img
              src={`/Icons/down-arrow.png`}
              className="w-10 h-10 cursor-pointer"
              alt=""
            />
          </Link>
        </div>
        {/* 
        bg-[#adc7f0c3] p-2 font-bold text-[#4285F4] rounded w-[88%] flex justify-center items-center
        bg-[#acecc6] p-2 font-bold text-[#0f9d58d4] rounded w-[88%] flex justify-center items-center
        */}
      </div>
    </>
  );
};

export default Vision;
