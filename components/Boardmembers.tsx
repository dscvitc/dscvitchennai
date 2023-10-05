import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BoardMemberCard from "./Boardmembercard";
import Link from "next/link";
import { Navigation } from "swiper";
import data from "../data/BoardMember";
import useWindowDimensions from "../Hooks/useWindowDimension";

const BoardMembers = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className="font-productSans h-full relative w-full flex flex-col space-y-10 mt-10 mb-5"
      id="team"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <div className="flex flex-col justify-center items-center space-y-6 text-gray-700 z-10">
        <h1 className="text-center text-6xl font-bold">The Board</h1>
        <p className="text-center text-xl">2022-23</p>
        <p className="text-xl z-50 text-gray-500 text-center max-w-xl md:max-w-2xl">
          Our Team comprised of g-fuel drinking developers, desginers and
          managers that love nothing but perfection ing but perfection
        </p>
        <div className="bg-urbanFinishing scale-y-[-1] md:h-[40rem] bg-cover h-[26rem] w-full absolute opacity-30 translate-y-[23rem] -z-50">
          {/* <img src={`/Icons/urban-finishing-tape-1.png`} className="opacity-20 absolute rotate-[25deg] translate-y-80 -z-50" alt="" /> */}
        </div>
      </div>
      <div className="md:m-24 md:ml-44 md:mr-44 ml-2 mr-2 z-50">
        {/* Card */}
        <Swiper
          slidesPerView={width! < 1267 ? 1 : 3}
          spaceBetween={2}
          navigation={true}
          mousewheel={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map(
            ({ name, image, description, role, color, linkedIn, github }) => {
              return (
                <SwiperSlide className="" key={name}>
                  <BoardMemberCard
                    givenName={name}
                    img={image}
                    desc={description}
                    role={role}
                    color={color}
                    linkedIn={linkedIn}
                    github={github}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>

        {/* Card */}
      </div>
      <div
        className="flex justify-center items-center w-full animate-bounce bg-transparent z-50"
        style={{ marginTop: "3rem" }}
      >
        <Link href={`/`}>
          <a>
            <Image
              width={50}
              height={50}
              src={`/Icons/down-arrow.png`}
              className="w-10 h-10 cursor-pointer"
              alt=""
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BoardMembers;
