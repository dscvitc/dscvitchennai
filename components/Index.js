import Image from "next/image";
import HeroImage from "../Assets/Icons/sammy-devices.png";

const Index = () => {
  return (
    <div name="home" className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full md:flex-row ">
        <div className="flex flex-col justify-center h-full px-12 md:px-0">
          <h1 className="text-4xl sm:text-6xl">
            {" "}
            Welcome to VIT Chennai's Google Developer Student Club!
          </h1>
          <p className="py-2 text-2xl max-w-xl my-2">
            At GDSC VITC we aim to help each other learn and grow. This is where
            coders,designers and managers come together to create and inspire
            many. Join us to be a part of this exciting adventure!
          </p>
        </div>
        <div className="px-4 py-8">
          <Image src={HeroImage} width={912} height={912} alt="Sammy Devices" />
        </div>
      </div>
    </div>
  );
};
export default Index;
