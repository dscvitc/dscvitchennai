import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <section>
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <nav className="w-full shadow">
        <section className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <section className="flex flex-auto justify-start gap-4 items-center">
            <Image src="/gdsc.png" alt="gdsc logo" width="50vh" height="50vh" />
            <Link href={"#"} className="">
              <>
                <section>
                  <section className="text-lg text-black font-sembold font-sans-gl">
                    Developer Student Clubs
                  </section>
                  <section className="text-md font-regular font-sans-gl">
                    Vellore institute of Technology, Chennai
                  </section>
                </section>
              </>
            </Link>
          </section>
          <section>
            <section className="flex items-center justify-between py-3 md:py-5 md:block">
              <section className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </section>
            </section>
          </section>
          <section>
            <section
              className={
                'flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}'
              }
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-sans-gl">
                <li className="text-black">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/">
                    <a>Vision</a>
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/">
                    <a>Team</a>
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/">
                    <a>Events</a>
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/contributors">
                    <a>Contributors</a>
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </nav>
    </section>
  );
};

export default Navbar;
