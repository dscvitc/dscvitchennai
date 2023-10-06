/* eslint-disable */
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface BoardMemberCardProps {
  givenName: string;
  img: any;
  desc?: string;
  role: string;
  color: string;
}

const ReactIcon = (props) => {
  return (
    <>
      <a
        href={props?.link}
        className="text-4xl text-gray-700 hover:-translate-y-0.5 cursor-pointer"
        target="__blank"
      >
        {props?.Icon}
      </a>
    </>
  );
};

const BoardMemberCard = ({
  givenName,
  img,
  role,
  color,
  desc,
  github,
  linkedIn,
}) => {
  return (
    <div
      className="bg-white opacity-100 z-50 h-[25rem] w-[20rem] rounded-3xl shadow-lg flex flex-col justify-center items-center space-x-2 relative"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <Image
        src={img}
        className="p-5 mt-0 rounded-full absolute top-0"
        alt="profile picture"
        width={250}
        height={250}
      />

      <div className="absolute top-1/2 mt-8 flex flex-col items-center">
        <p className="font-bold text-2xl">{givenName}</p>
        <p style={{ color: color }} className={`text-lg text-center`}>
          {role}
        </p>
        <p className={`text-mb text-center italic mt-2`}>"{desc}"</p>
      </div>

      <div className="flex gap-5 absolute bottom-0 mb-2">
        <ReactIcon Icon={<FaGithub />} link={github} />
        <ReactIcon Icon={<FaLinkedin />} link={linkedIn} />
      </div>
    </div>
  );
};

export default BoardMemberCard;
