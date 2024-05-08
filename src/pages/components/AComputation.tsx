const AComputation = () => {
  const list = [
    {
      firstContent:'LIVE',
      content:
        " data streaming, parallel run at hyperscale",
      img:'./live.svg'
      },
    {
      firstContent:'ZERO-TRUST',
      content:
        ", enabling smart contract use cases",
      img:'./pi.svg'
        
    },
    {
      firstContent:'AI',
      content:
        " “Program-of-Thoughts”, precise and private",
      img:'./gpt.svg'

    },
  ];
  return (
    <div
      style={{ fontFamily: "Tenor Sans" }}
      className=" mt-[222px] font-normal text-5xl leading-[48px] w-container m-auto justify-center md:w-full md:px-10"
    >
      <div className=" justify-center flex text-5xl leading-[48px]">beyond Analytics, We deliver Data <label className="text-[#0172C6] ml-2">Intelligence.</label></div>
      <div
        style={{
          fontFamily: "Quicksand",
        }}
        className="w-full flex justify-between gap-[30px] mt-[140px]"
      >
      {list.map((item, index) => {
          return (
            <div
              key={`list_${index}`}
              style={{ boxShadow: "0px 10px 34px 0px #8BBEE433" }}
              className=" py-[30px] px-5 h-[493px] md:h-[720px] flex justify-center text-center items-center"
            >
              <div className="">
                <div className=" mt-[97px] mb-[72px] font-bold text-2xl leading-6 flex justify-center ">
                <img src={item.img}/>
                </div>
                <div className=" mt-5 font-medium text-base leading-8 mb-[105px]">
                  <span className=" font-bold text-4xl leading-[42px] text-[#0172C6]"> {item.firstContent}</span>
                  <span className=" font-medium text-4xl leading-[42px]"> {item.content}</span>
                </div>
               
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default AComputation;
