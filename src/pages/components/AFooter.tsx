const AFooter = () => {
  return (
    <div className="w-container md:w-full m-auto md:px-[40px] pt-[60px] pb-[50px]">
      <div
        style={{ font: "Inter" }}
        className=" flex  w-full font-semibold text-[32px] leading-8"
      >
        <div className=" text-[#0072C6]">Int</div>
        <div>Layer</div>
      </div>
      <div className="flex items-end justify-between">
        <div
          className="w-[522px] font-medium text-base leading-7 mt-[26px]"
          style={{
            font: "Quicksand",
          }}
        >
          Sophon elevates the blockchain security economics to new heights,
          powered by the interoperability and FHE technologies.
        </div>
        <div className="flex gap-3 ">
          <img src="./x.svg" />
          <img src="./discord.svg" />
          <img src="./tg.svg" />
          <img src="./nu.svg" />
        </div>
      </div>
    </div>
  );
};
export default AFooter;
