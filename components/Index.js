import Image from "next/image";
const Index = () => {
  return (
    <div>
      <Image
        className="float-right"
        src="/sammy-devices.png"
        alt="Sammy"
        width={500}
        height={500}
      ></Image>
      <Image
        className="absolute bottom-0 ml-96"
        src="/down-arrow.png"
        alt="Down Arrow"
        width={40}
        height={40}
      ></Image>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="box-content h-28 w-3/5 p-4  m4">
        <h1 className="text-6xl">
          Welcome to VIT Chennai's Google Developer Student Club!
        </h1>
        <br></br>
        <br></br>
        <div className="text-3xl">
          At GDSC VITC we aim to help each other learn and grow. This is where
          coders,designers and managers come together to create and inspire
          many. Join us to be a part of this exciting adventure!
        </div>
      </div>

      {/* <Image
        className="absolute mr-4"
        src="/sammy-devices.png"
        alt="Sammy"
        width={500}
        height={500}
      /> */}
      {/* <Image src="/down-arrow.png" alt="down arrow" width={40} height={40} /> */}
    </div>
  );
};
export default Index;
