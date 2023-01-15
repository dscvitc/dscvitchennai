import Image from "next/future/image";
import Link from "next/link";

const Eventcard = ({ eventname, date, img, link, type }) => {
  return (
    <div
      className="w-full md:w-full h-full flex rounded-2xl p-4 items-center justify-center space-x-4 border-2 border-gray-200"
      style={{ boxShadow: "0px 4px 2px gray" }} data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <Image width={100} height={200} src={`/Icons/${img}`} alt="" />
      <div className="flex flex-col space-y-2 justify-start items-start">
        <h1 className="font-bold text-gray-700">
          {eventname.length > 15 ? eventname.slice(0, 17) + "..." : eventname}
        </h1>
        <p className="text-gray-500 text-sm">{date}</p>
        {/* <Link href={link}> */}
        {type == "past" ? (
          <Link href={link}>
            <button className="rounded-3xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full text-sm">
              Conducted
            </button>
          </Link>
        ) : (
          <Link href={link}>
            <button className="rounded-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full text-sm">
              Learn More
            </button>
          </Link>
        )}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Eventcard;
