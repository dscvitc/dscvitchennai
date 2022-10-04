import Link from "next/link";
import ContributorList from "../../data/contributors.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CardItem = ({ item }) => {
  return (
    <div className="bg-slate-100 flex flex-col justify-evenly items-center h-80 rounded-lg shadow-lg">
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <img
          src={item.image !== null ? item.image : "/assets/avatar.jpg"}
          alt="Placeholder"
        />
      </div>
      <h1 className="text-xl font-bold">
        {item.name ? item.name : "Placeholder"}
      </h1>
      <p>{item.description ? item.description : "Sample description"}</p>
      <div className="flex w-2/5 justify-evenly items-center">
        <Link href={item.github ? item.github : "#"}>
          <FaGithub className="cursor-pointer" size={24} />
        </Link>
        <br />
        <Link href={item.linkedIn ? item.linkedIn : "#"}>
          <FaLinkedin className="cursor-pointer" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default function CardList() {
  return (
    <div className="grid grid-cols-3 gap-5 mx-5 my-5">
      {ContributorList.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
}
