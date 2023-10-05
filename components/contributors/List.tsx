import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CardItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-100 flex flex-col justify-evenly items-center h-64 w-56 rounded-lg shadow-lg mx-4"
    >
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <Image
          src={
            item.avatar_url !== null ? item.avatar_url : "/assets/avatar.jpg"
          }
          alt="Placeholder"
          className="relative"
          width={200}
          height={200}
        />
      </div>
      <Link legacyBehavior className="text-xl font-bold" href={item.html_url}>
        <a target="_blank">{item.login ? item.login : "Placeholder"}</a>
      </Link>
      <p>Contributions {item.contributions ? item.contributions : "0"}</p>
      <div className="flex w-2/5 justify-evenly items-center">
        <Link legacyBehavior href={item.html_url ? item.html_url : "#"}>
          <a target="_blank">
            <FaGithub className="cursor-pointer" size={24} />
          </a>
        </Link>
        <br />
      </div>
    </motion.div>
  );
};

export default function CardList() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [actualList, setActualList] = useState([]);
  const [list, setList] = useState([]);

  const handleSubmit = (e?) => {
    if (e) {
      e.preventDefault();
    }
    console.log(actualList[0]);
    if (input) {
      setList(
        actualList.filter((item: any) =>
          item.login.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setList(actualList);
    }
  };

  // Get list of contributors from /api/contributors
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/contributors");
      const data = await res.json();
      setActualList(data);
      setList(data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) {
    return (
      <div className="h-96 flex justify-center items-center w-full mx-auto text-center ">
        <div className="h-16 w-16 rounded-full border-8 border-t-gray-500 animate-spin" />
      </div>
    );
  }
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex w-full justify-center md:justify-between items-center flex-wrap">
        <h1 className="my-10 text-center text-2xl font-semibold">
          Contributors List
        </h1>
        <form
          className="flex items-center shadow-lg bg-slate-100 px-4 py-2 rounded-lg my-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <motion.div
            onChange={() => handleSubmit()}
            whileHover={{ scale: 1.1 }}
            className="hover:cursor-pointer"
          >
            <FaSearch color="grey" size={20} />
          </motion.div>
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              handleSubmit(event);
            }}
            className="mx-5 bg-transparent focus:outline-none text-slate-800"
            placeholder="Enter your name"
          />
        </form>
      </div>
      <div className="flex justify-center flex-wrap gap-y-6 mx-auto lg:justify-start">
        {list.map((item, index) => {
          return <CardItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
}
