/* eslint-disable */
const Index = () => {
  return (
    <div>
      {/* <Image
        className="float-right"
        src="/sammy-devices.png"
        alt="Sammy"
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-0 ml-96"
        src="/down-arrow.png"
        alt="Down Arrow"
        width={40}
        height={40}
      />
      <div className="box-content h-28 w-3/5 p-4  m4">
        <h1 className="text-6xl">
         
        </h1>
        <div className="text-3xl">
          At GDSC VITC we aim to help each other learn and grow. This is where
          coders,designers and managers come together to create and inspire
          many. Join us to be a part of this exciting adventure!
        </div>
      </div> */}

      {/* <Image
        className="absolute mr-4"
        src="/sammy-devices.png"
        alt="Sammy"
        width={500}
        height={500}
      /> */}
      {/* <Image src="/down-arrow.png" alt="down arrow" width={40} height={40} /> */}

      <div className="flex items-center justify-center font-productSans p-16 pb-0 flex-col md:flex-row">
        <div className="flex flex-col space-y-7">
          <p className="text-6xl opacity-70">
            Welcome to VIT Chennai&apos;s <br /> Google Developer Student <br />{" "}
            Club!
          </p>
          <p className="text-gray-600 text-2xl md:text-xl font-light">
            At GDSC VITC we aim to help each other learn and grow. This is where
            coders,designers and managers come together to create and inspire
            many. Join us to be a part of this exciting adventure!
          </p>
        </div>
        <div className="">
          <img
            src={`/Icons/sammy-devices.png `}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-10 h-10 m-auto mb-16 animate-bounce">
        <img src={`/Icons/down-arrow.png`} alt="" />
      </div>
    </div>
  );
};
export default Index;
