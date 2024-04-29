const AHeader = () => {
  return (
    <div className="border border-[#0000001A] h-[80px] flex items-center ">
      <div className=" w-container m-auto md:w-full  md:px-[40px] ">
        <div className="flex justify-between ">
          <img src="./IntLayer.svg" />

          <button
            style={{
              font: "Montserrat",
              background: " linear-gradient(90deg, #7DC8FF 0%, #0072C6 100%)",
            }}
            className=" px-[22px] h-9 rounded-md"
          >
            Task Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AHeader;
