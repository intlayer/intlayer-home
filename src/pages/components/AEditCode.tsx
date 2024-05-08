const AEditCode = () =>{
  return <div   style={{ fontFamily: "Tenor Sans" }} className="  w-container m-auto gap-10 mt-[97px] md:px-[40px] md:w-full">
    <div className=" text-center text-5xl leading-[48px] font-normal">Define your data tasks, <span className="text-[#0172C6]">AI-driven</span> & <span  className="text-[#0172C6]">No-code</span></div>
    <div className="flex mt-[120px] justify-between items-center gap-5 mb-10 " >
    <div>
     <div className=" font-medium text-2xl md:text-lg  mt-3"> Describe in plain words to create your data tasks in IntLayer:</div>
      <div className=" h-[200px] bg-[#F3F3F3] w-full pt-2 mt-2 md:mt-2  pl-5 rounded"  >Get me the No.1 DEX by recent volume on ZKSync L2, </div>
      <div className="flex justify-center">
      <button className=" rounded-lg text-white bg-black px-10 h-10 mt-10">Go</button>
      </div>
    </div>
    <div>
      <img src="./play.svg"/>
    </div>
    <div>
     <div>
    <div className=" font-medium text-2xl md:text-lg pt-4"> Run AI-generated IntQuery on existing Schemas, or custom your own schema.</div>

     <div className=" h-[200px] bg-[#F3F3F3] w-full mt-4 md:mt-2 pt-3 flex gap-1 rounded" >
    <span className=" pl-5"> 💡 Routine Schema found：</span><div className="bg-[#E1E1DD] text-blue-900 px-1 flex items-center rounded h-7">zkSync</div><div className="bg-[#E1E1DD] rounded flex items-center h-7 text-blue-950 px-1">Dexes</div>
    
     </div> 
     <div className="flex mt-5">
     <div className=" font-medium">{`I'm feeling good！`}</div> <div className="bg-[#F3F3F3] text-green-600 px-1 rounded-md">Run Query</div>

     </div>
     <div className="flex  mt-5">

     <div className=" font-medium   text-[red] md:text-sm">Not satisfied?</div><span className="px-2 md:text-sm">Try</span><div className="bg-[#F3F3F3] text-yellow-700 px-1 rounded-md md:text-sm"> Edit Query</div><span className="px-2 md:text-sm"> or </span><div className="bg-[#F3F3F3] text-[red] md:text-sm px-1 rounded-md">Derive Custom Schema</div>
     </div>
     </div>

    </div>
  </div>
  </div>
}

export default AEditCode