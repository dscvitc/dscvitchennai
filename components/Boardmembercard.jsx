/* eslint-disable */
const Boardmembercard = ({ givenName, img, role, color }) => {
  return (
    <div className="bg-white opacity-100 z-50 h-[20rem] w-[15rem] rounded-3xl shadow-lg m-4 flex flex-col justify-center items-center">
      <img
        src={img}
        className="p-8 pb-3"
        alt=""
        style={{ borderRadius: "50%" }}
      />
      <div className="flex flex-col items-center justify-center p-4 pt-0 mb-5 space-x-2">
        <p className="font-bold text-lg">{givenName}</p>
        <p style={{ color: color }} className={`text-xl`}>
          {role}
        </p>
      </div>
    </div>
  );
};

export default Boardmembercard;
