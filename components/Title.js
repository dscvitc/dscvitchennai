import Image from "next/image";
import DownArrow from "../Assets/Icons/down-arrow.png";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        src={DownArrow}
        width={30}
        height={30}
        className="pb-5"
        alt={title}
      />
      <h1 className="font-semibold text-[22px]">{title}</h1>
    </div>
  );
};
export default Title;
