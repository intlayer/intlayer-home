const ATab = () => {
  const list = [
    { title: "Pre-sink DI Results" },
    { title: "Precompile DI Schema" },
    { title: "Rust DSL" },
    { title: "ZKML Integration" },
  ];
  return (
    <div
      className=" pt-[90px] pb-[100px]"
      style={{
        background:
          "linear-gradient(103.62deg, #F7F7F7 0%, #F9FCFF 45.72%, #FBFBFB 98.31%)",
      }}
    >
      <div className="w-container m-auto justify-center md:w-full md:px-[40px] ">
        <div
          style={{ font: "Tenor Sans" }}
          className="flex justify-center font-normal text-5xl leading-[42px] pt-[90px]"
        >
          Use IntLayer.
        </div>
        <div className=" flex justify-between mt-[50px]">
          <div
            className=" w-[264px] h-[58px] rounded-[10px] text-white flex items-center justify-center font-medium text-xl leading-5"
            style={{
              background: "linear-gradient(90deg, #7DC8FF 0%, #0072C6 100%)",
              font: "Quicksand",
            }}
          >
            Pre-sink DI Results
          </div>
          <div
            className="text-[#2E2E2E] w-[264px] h-[58px] rounded-[10px] flex items-center justify-center font-medium text-xl leading-5"
            style={{
              font: "Quicksand",
            }}
          >
           Precompile DI Schema
          </div>
          <div
            className="text-[#2E2E2E] w-[264px] h-[58px] rounded-[10px] flex items-center justify-center font-medium text-xl leading-5"
            style={{
              font: "Quicksand",
            }}
          >
           Rust DSL
          </div>
          <div
            className="text-[#2E2E2E] w-[264px] h-[58px] rounded-[10px] flex items-center justify-center font-medium text-xl leading-5"
            style={{
              font: "Quicksand",
            }}
          >
           ZKML Integration
          </div>
        </div>
        <div className="border-[#0072C6] border  rounded-[10px] py-[30px] px-[30px]  mt-6">
          <div className="flex justify-between">
            <img src="./color.svg" className=" mb-5"></img>
            <img src="./arrowtoB.svg" />
          </div>
          <div
            style={{
              font: "Quicksand",
            }}
            className=" font-medium text-sm leading-[42px]"
          >
            {`<div class="w-full max-w-[1024px] px-6"><div class="mb-8 flex justify-between"><div class="flex cursor-pointer items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.00002 12H21" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 6L3 12L9 18" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="ml-4 text-sm">Back to SkillHub</span></div><div class="flex items-center"><button class="btn hover:opacity-90 transition-all min-h-min disabled:shadow-none contained font-normal btn-primary mr-2 h-8 lg:hidden">Apply</button><div class="inline-flex items-center bg-[#EFEFEF] py-2 px-4 text-sm rounded cursor-pointer hover:opacity-80 transition-opacity"><svg class="mr-[6px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 14.333C2 8.66634 3.66667 4.99967 8.66667 4.99967V1.33301Z" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</div></div></div><div><h5 class="mt-4 mb-6 text-[42px] leading-[48px]">
="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 14.333C2 8.66634 3.66667 4.99967 8.66667 4.99967V1.33301Z" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</div></div></div><div><h5 class="mt-4 mb-6 text-[42px] leading-[48px]">="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 1 [48px]">="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 1[48px]">="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 9.33301 2 14.333 2 1[48px]">="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 9.33301 2 14.333 2 1[48px]">="M8.66667 1.33301L14.6667 7.33301L8.66667 12.9997V9.33301C4 9.33301 2 14.333 2 `}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ATab;
