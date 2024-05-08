import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const AEditCode = () => {
  const [style, setStyle] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism')
      .then(mod => setStyle(mod.default));
  })




  return <div>
    <div style={{ fontFamily: "Tenor Sans" }} className=' w-container m-auto gap-10 mt-[97px] md:px-[40px] md:w-full mb-10'>
      <div className='flex justify-between gap-3 w-full items-center'>
        <div className='w-[40%]'>
          <div className='  h-[80px]  font-medium text-2xl md:text-xl'>
            Describe in plain words to create your data tasks in IntLayer:
          </div>
          <div className=" h-[320px] w-full bg-[#F5F2F0] mt-2 pt-6 pl-6 "  >
            Get me the No.1 DEX by recent volume on ZKSync L2,
          </div>
          <div className="flex justify-center">
            <button className=" rounded-lg text-white bg-black px-10 h-10 mt-10">Go</button>
          </div>
        </div>
        <div>
          <img src='./play.svg' />
        </div>

        <div className='w-[60%]'>
          <div className='  h-[80px] font-medium text-2xl md:text-xl'>

            Run AI-generated IntQuery on existing Schemas, or custom your own schema.

          </div>

          <div className=" overflow-y-auto h-[320px] w-full bg-[#F5F2F0] mt-2  pl-2 "  >
            <SyntaxHighlighter language={'ymal'} style={style}>
              {`An example for querying top Dex by volume
on L2s from existing sinked tables, which 
are created by Routine Schemas. 
   intquery {
    zkSync {
     Dexes(orderBy: VOLUME_DESC, first: 1) {
                name
                volume
               }
             }
          }`}
            </SyntaxHighlighter>

          </div>
          <div className="flex mt-3">
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