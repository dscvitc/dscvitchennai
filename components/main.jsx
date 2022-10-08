import Image from "next/image";
import HeroLayout from "./layout";
import sammy from "../Assets/Icons/sammy-devices.png";
import down from "../Assets/Icons/down-arrow.png";

const Index = () => {
  return (
    <>
      <HeroLayout>
        <section className="py-12 flex flex-auto justify-between">
          <section>
            <h1 className="text-6xl font-medium py-8 font-sans-gl">
              Welcome to VIT Chennai's Google Developer Student Club!
            </h1>
            <section className="text-2xl py-8 font-sans-gl">
              At GDSC VITC we aim to help each other learn and grow. This is
              where coders,designers and managers come together to create and
              inspire many. Join us to be a part of this exciting adventure!
            </section>
          </section>
          <Image src={sammy} alt="Sammy" height={"1500px"} width={"1500px"} />
        </section>
      </HeroLayout>
      <section className="flex flex-auto justify-center content-center hover:translate-y-4">
        <Image src={down} alt="Down Arrow" height={"50px"} width={"50px"} />
      </section>

      {/* <Image src="/down-arrow.png" alt="down arrow" width={40} height={40} /> */}
    </>
  );
};
export default Index;
