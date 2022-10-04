import Link from "next/link";
import ContributorList from "../../data/contributors.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {};

const CardItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-100 flex flex-col justify-evenly items-center h-80 rounded-lg shadow-lg"
    >
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
    </motion.div>
  );
};

export default function CardList() {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="my-10 text-center text-2xl font-semibold">
        Contributors List
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {ContributorList.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
