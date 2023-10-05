import Image from "next/future/image";
import React from "react";
const Index = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center font-productSans p-16 pt-[150px] pb-0 flex-col md:flex-row"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div className="flex flex-col space-y-7">
          <p className="text-6xl opacity-70">
            Welcome to VIT Chennai&apos;s <br /> Google Developer Student <br />{" "}
            Club!
          </p>
          <p className="text-gray-600 text-2xl md:text-xl font-light">
            At GDSC VITC we aim to help each other learn and grow. This is where
            coders,designers and managers come together to create and inspire
            many. Join us to be a part of this exciting adventure!
          </p>
        </div>
        <div className="">
          <Image
            height={1000}
            width={1000}
            src="/Icons/sammy-devices.png"
            className="w-full h-full"
            alt="image"
          />
        </div>
      </div>
      <div className="w-10 h-10 m-auto mb-24 animate-bounce">
        <Image
          width={100}
          height={100}
          src="/Icons/down-arrow.png"
          className="w-10 h-10 cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};
export default Index;
