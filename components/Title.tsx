import React from "react";
const Title = ({ title }) => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <h1 className="font-bold text-5xl tracking-widest">{title}</h1>
    </div>
  );
};
export default Title;
