const ABanner = () => {
  return (
    
    <div className="  bg-[url(/frame1.png)] bg-cover bg-repeat object-cover h-[400px] bg-center  ">
    <div className=" mt-[164px] w-container m-auto md:w-full md:px-[40px]  ">
      <div className=" flex flex-col text-7xl  font-normal leading-[72px]" >
        <div
          style={{ fontFamily: "Tenor Sans" }}
          className=" flex justify-center  w-full"
        >
          <div className=" text-[#0072C6]">Int</div>
          <div>Layer</div>
        </div>
        <div
          style={{ fontFamily: "Quicksand" }}
          className=" font-medium text-[42px] mt-[50px] leading-[42px] md:text-[38px] flex justify-center"
        >
          The Data Intelligence Layer of World Computer
        </div>
        <div className=" flex justify-center text-xl font-medium leading-[20px] mt-[101px] gap-[65px]">
          <div
            style={{ fontFamily: "Quicksand" }}
            className="border-[#D2ECFF] w-auto border px-[52px] h-[48px] rounded-[10px] flex bg-white   items-center  justify-between "
          >
            <span style={{
              borderImageSource: 'linear-gradient(90deg, #D2ECFF 0%, #0072C6 100%)'
            }} className=" ml-[24px] ">Solution Deck</span>
         
          </div>
          <div
              style={{
                background: "linear-gradient(90deg, #7DC8FF 0%, #0072C6 100%)",
              }}
              className="  h-12 flex items-center text-white rounded-[10px] px-[43px]"
            >
              Try Dashboard
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ABanner;
