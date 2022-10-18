/* eslint-disable */
const Index = () => {
  return (
    <div>
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
      <div className="w-10 h-10 m-auto mb-24 animate-bounce">
        <img src={`/Icons/down-arrow.png`} alt="" />
      </div>
    </div>
  );
};
export default Index;
