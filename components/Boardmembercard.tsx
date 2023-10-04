import React from "react";
import Image from "next/future/image";

export interface BoardMemberCardProps {
  givenName: string;
  img: any;
  desc?: string;
  role: string;
  color: string;
}

/* eslint-disable */
const BoardMemberCard = ({
  givenName,
  img,
  role,
  color,
}: BoardMemberCardProps) => {
  return (
    <div
      className="bg-white opacity-100 z-50 h-[20rem] w-[15rem] rounded-3xl shadow-lg m-4 flex flex-col justify-center items-center"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <Image
        src={img}
        className="p-6 rounded-full"
        alt=""
        width={400}
        height={400}
      />
      <div className="flex flex-col items-center justify-center p-4 pt-0 mb-5 space-x-2">
        <p className="font-bold text-lg">{givenName}</p>
        <p style={{ color: color }} className={`text-xl text-center`}>
          {role}
        </p>
      </div>
    </div>
  );
};

export default BoardMemberCard;
