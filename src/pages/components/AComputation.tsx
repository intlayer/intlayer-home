const AComputation = () => {
  const data = [
    {
      name: "IntLink",
      content1: "Data Source ",
      content2: "Management & Relay",
    },
    { name: "IntFlink", content1: "Data Stream ", content2: "Parallel Engine" },
    { name: "IntSink", content1: "DI Results ", content2: "Sink Automation" },
  ];
  return (
    <div
      style={{ font: "Tenor Sans" }}
      className=" mt-[222px] font-normal text-5xl leading-[48px] w-container m-auto justify-center md:w-full md:px-10"
    >
      <div className=" justify-center flex">Data Streaming Computation.</div>
      <div className="justify-center flex mt-[30px] text-[#2E2E2E] opacity-[50%]">
        Zero-trust, Real-time at Internet-scale
      </div>
      <div className="  justify-between gap-[30px] flex  mt-[88px]">
        <div className="w-40 ">
          <div className=" flex flex-col ">
            <div className="flex  m-auto border h-[199px] w-[1px] border-[#2E2E2E]"></div>
            <div
              style={{
                font: "Quicksand",
                background: "linear-gradient(180deg, #E6E6E6 0%, #FDFDFD 100%)",
              }}
              className="  font-semibold text-2xl leading-7 border-[2px] flex justify-center text-center items-center border-[#2E2E2E] rounded-[10px] w-40 h-40"
            >
              Smart Contracts
            </div>
            <div className="flex  m-auto border h-[199px] w-[1px] border-[#2E2E2E] "></div>
            <div className="arrowToB"></div>
            <div className=" font-semibold text-2xl leading-6 w-[166px] mt-[30px]">
              EVM execution
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            style={{
              font: "Quicksand",
            }}
            className="flex flex-col font-medium  text-xl leading-6 text-[#2E2E2E]"
          >
            <div className=" flex flex-col text-center mb-6 ">
              <span>Auto Deploy</span>
              <span>Tasks</span>
            </div>
            <div className="flex flex-col gap-[94px]">
              <img src="./lineToR.svg" />
              <img src="./lineToL.svg" />
            </div>
            <div
              style={{
                font: "Quicksand",
              }}
              className=" text-center mt-4"
            >
              Sink Results
            </div>
          </div>
        </div>
        {/* border: 2px solid #0172C6 */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(30, 128, 202, 0.156) 0%, rgba(1, 114, 198, 0) 100%)",
            font: "Quicksand",
          }}
          className=" border-[2px] border-[#0172C6] h-[558px] w-[500px] py-[30px] pl-[53px]"
        >
          {data.map((item, i) => {
            return (
              <div key={`box_${i}`} className="w-full ">
                <div className="">
                  <div className=" flex items-center gap-[30px]">
                    <div className="w-40 border-[2px] border-[#0172C6]  h-[104px] flex justify-center items-center text-2xl leading-6 font-semibold text-[#0172C6] ">
                      <div className="flex flex-col gap-1">
                        {i === 1 && (
                          <div className="flex gap-[50px]">
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                          </div>
                        )}
                        <div className=" text-center">{item.name}</div>
                        {i === 1 && (
                          <div className="flex gap-[50px]">
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                            <div className="flex  m-auto border h-[10px] w-[1px] border-[#2E2E2E]"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        font: "Quicksand",
                      }}
                      className=" font-medium text-xl leading-8 "
                    >
                      <div>{item.content1}</div>
                      <div>{item.content2}</div>
                    </div>
                  </div>
                  {i === 2 ? null : (
                    <div className=" w-40">
                      <img
                        src="./lineToB.svg"
                        className="flex justify-center m-auto my-5 line"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div
            style={{
              font: "Quicksand",
            }}
            className=" font-semibold text-2xl leading-6 mt-[50px]"
          >
            Services secured as
            <span className="text-[#0172C6]"> EigenLayer AVS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AComputation;
