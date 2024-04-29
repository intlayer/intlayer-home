const ADesign = () => {
  const list = [
    {
      title: "Extended Layer for EVM.",
      content:
        "IntLayer outsources only resource-intensive executions (Data Intelligence) from EVM， making it much more flexible and better fit into existing ethereum L1/L2s ecosystem.",
    },
    {
      title: "Data Stream Parallel Run.",
      content:
        "IntLayer scales Data Intelligence tasks with IntFlink, a stream process framework and engine for parallel computation over bounded and unbounded data streams. ",
    },
    {
      title: "Data Source Beyond EVM.",
      content:
        "IntLayer pushed EVM to new boundries by not only addressing computation resource limitation but also enabling EVM to access non-execution data from blobs, consensus layers and oracles.",
    },
  ];
  return (
    <div className=" w-container m-auto justify-center md:w-full md:px-10 mt-[120px]">
      <div
        style={{ font: "Tenor Sans" }}
        className=" font-normal flex justify-center text-5xl  mb-[80px]"
      >
        Design Philosophy.
      </div>
      <div
        style={{
          font: "Quicksand",
        }}
        className="w-full flex justify-between gap-[31px]"
      >
        {list.map((item, index) => {
          return (
            <div
              key={`list_${index}`}
              style={{ boxShadow: "0px 10px 34px 0px #8BBEE433" }}
              className=" py-[30px] px-[30px] h-[626px]"
            >
              <div>
                <img src="./circle.svg" />
                <div className=" mt-5 font-bold text-2xl leading-6">
                  {item.title}
                </div>
                <div className=" mt-5 font-medium text-base leading-8">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{ boxShadow: "0px 10px 34px 0px #8BBEE433" }}
        className=" mt-[50px] w-full"
      >
        <div className="ml-[50px] pb-5">
          <img src="./circle.svg" className=" pt-[50px] " />
          <div
            style={{
              font: "Quicksand",
            }}
            className=" font-bold text-2xl leading-[30px] my-5"
          >
            Don’t Trust, Just zkVerify
          </div>
          <div className="w-[346px] font-medium text-base leading-7">
            Data Intelligence tasks are defined and executed in full EVM
            primitives. Stream Processing is done perfectly zero-trust, ZK
            verifiable on-chain.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADesign;
