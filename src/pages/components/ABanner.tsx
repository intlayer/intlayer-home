const ABanner = () => {
  return (
    <div className=" bg-[url('/banner.svg')] bg-cover bg-no-repeat ">
    <div className=" mt-40 w-container m-auto md:w-full md:px-[40px]">
      <div className=" flex flex-col text-7xl  font-normal leading-[72px]">
        <div
          style={{ font: "Tenor Sans" }}
          className=" flex justify-center  w-full"
        >
          <div className=" text-[#0072C6]">Int</div>
          <div>Layer</div>
        </div>
        <div
          style={{ font: "Quicksand" }}
          className=" font-medium text-[42px] mt-[50px] leading-[42px] md:text-[38px] flex justify-center"
        >
          The Data Intelligence Layer of World Computer
        </div>
        <div className=" flex justify-center">
          <div
            style={{ font: "Quicksand" }}
            className="border-[#D2ECFF] w-[411px] border h-[54px] rounded-[10px] flex mt-[70px] text-xl font-medium leading-[20px]  items-center  justify-between "
          >
            <span className=" ml-[24px]">Task Dashboard!</span>
            <div
              style={{
                background: "linear-gradient(90deg, #7DC8FF 0%, #0072C6 100%)",
              }}
              className=" mr-[3px] py-[3px] h-12 flex items-center text-white rounded-[10px] px-[50px]"
            >
              Try it now!
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ABanner;
