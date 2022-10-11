import Link from "next/link";
import Image from "next/image";
import ContributorList from "../../data/contributors.json";
import { FaLinkedin, FaGithub, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const CardItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-100 flex flex-col justify-evenly items-center h-80 rounded-lg shadow-lg"
    >
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <Image
          src={item.image !== null ? item.image : "/assets/avatar.jpg"}
          alt="Placeholder"
          className="relative"
          width={200}
          height={200}
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
  const [input, setInput] = useState("");
  const [actualList] = useState(ContributorList);
  const [list, setList] = useState(ContributorList);

  const handleSubmit = () => {
    setList(actualList.filter((item) => item.name.includes(input)));
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex w-full justify-between items-center">
        <h1 className="my-10 text-center text-2xl font-semibold">
          Contributors List
        </h1>
        <div className="flex items-center shadow-lg bg-slate-100 px-4 py-2 rounded-lg">
          <motion.div
            onClick={() => handleSubmit()}
            whileHover={{ scale: 1.1 }}
            className="hover:cursor-pointer"
          >
            <FaSearch color="grey" size={20} />
          </motion.div>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="mx-5 bg-transparent focus:outline-none text-slate-800"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {list.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
