import Link from "next/link";
import events from "../data/events.json";
import Eventcard from "./Eventcard";
import "swiper/css";
import "swiper/css/navigation";
import useWindowDimensions from "../Hooks/useWindowDimension";
import Image from "next/future/image";

const Events = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div
        className="font-productSans h-full relative w-full flex flex-col space-y-10 mt-10 mb-5"
        id="events"
      >
        <Image
          width={100}
          height={100}
          src={`/Icons/kingdom-72.png`}
          className="opacity-20 absolute top-[8rem] right-[3rem] md:right-[-2rem] h-[30rem] w-[30rem] md:-translate-y-[10rem] -translate-y-[23rem] rotate-[-40deg] md:rotate-0 md:h-[30rem] md:w-[23rem]"
          alt=""
        />
        <div className="flex flex-col justify-center items-center ml-7 mr-0 space-y-6 text-gray-600">
          <h1 className="text-center text-6xl font-bold">Events</h1>
        </div>
        <p className="font-semibold text-2xl text-left ml-5 md:ml-44 text-gray-500">
          New Event
        </p>
        <div
          className={`md:m-24 md:ml-44 md:mr-44 ml-5 mr-5 grid grid-cols-2 md:grid-cols-3 gap-6`}
        >
          {/* Card */}
          {events.map(({ name, date, link, type, img }) => {
            return type == "new" ? (
              <div className="" key={name}>
                <Eventcard
                  eventname={name}
                  date={date}
                  link={link}
                  type={type}
                  img={img}
                />
              </div>
            ) : null;
          })}
          {/* Card */}
        </div>
        <p className="w-screen font-semibold text-2xl ml-5 md:ml-44 text-left text-gray-500">
          Past Event
        </p>
        <div
          className={`md:m-24 md:ml-44 md:mr-44 ml-5 mr-5 grid grid-cols-2 md:grid-cols-${
            width < 1000 ? 2 : 3
          } gap-6`}
        >
          {/* Card */}
          {events.map(({ name, date, link, type, img }) => {
            return type == "past" ? (
              <div className="" key={name}>
                <Eventcard
                  eventname={name}
                  date={date}
                  link={link}
                  type={type}
                  img={img}
                />
              </div>
            ) : null;
          })}

          {/* Card */}
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

export default Events;
