import Image from "next/image";
import DownArrow from "../Assets/Icons/down-arrow.png";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-[22px]">{title}</h1>
    </div>
  );
};
export default Title;
