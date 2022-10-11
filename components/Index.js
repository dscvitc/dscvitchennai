import Image from "next/image";
import styles from "./Index.module.css";
const Index = () => {
  return (
    <>
      {/*root of page*/}
      <div
        className={`lg:grid grid-cols-2 grid-rows-2 ${styles.heroContainer}`}
      >
        <div className="mx-auto w-full p-4 md:h-[85vh] md:flex flex-col justify-center lg:max-w-2xl">
          <h1 className="text-4xl md:text-3xl font-bold md:font-semibold lg:text-5xl lg:font-medium ">
            {"Welcome to VIT Chennai's Google Developer Student Club!"}
          </h1>
          <p className="text-xl my-4 lg:text-2xl">
            At GDSC VITC we aim to help each other learn and grow. This is where
            coders,designers and managers come together to create and inspire
            many. Join us to be a part of this exciting adventure!
          </p>
        </div>
        <div className="flex justify-center md:hidden lg:block lg:w-fit lg:m-auto">
          <Image
            src="/sammy-devices.png"
            alt="Sammy"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="flex justify-center col-span-2 h-fit">
          <Image
            src="/down-arrow.png"
            alt="Down Arrow"
            width={40}
            height={40}
            className="animate-bounce"
          />
        </div>
      </div>
    </>
  );
};
export default Index;
