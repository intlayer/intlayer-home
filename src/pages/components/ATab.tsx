import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



const ATab = () => {
  const [chooseItem, setChooseItem] = useState<any>({
    id: 1, title: "", content: `
  An example for querying top Dex by volume on L2s from existing sinked tables, which are created by Routine Schemas. 
  
  intquery {
     zkSync {
          Dexes(orderBy: VOLUME_DESC, first: 1) {
              name
              volume
          }
      }
  }`, language: 'graphQL',
  })


  const [style, setStyle] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/material-light')
      .then(mod => setStyle(mod.default));
  })
  const list = [
    {
      id: 1, title: "Routine Schema", language: 'graphQL', content: `
An example for querying top Dex by volume on L2s from existing sinked tables, which are created by Routine Schemas. 

intquery {
   zkSync {
        Dexes(orderBy: VOLUME_DESC, first: 1) {
            name
            volume
        }
    }
}`


    },
    {
      id: 2, title: "Developed Schema", language: 'yaml', content: `
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: sample_schema
    network: mainnet
    source:
      address: 'sample_address'
      abi: sample
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.1
      language: assemblyscript
      entities:
        - sample_schema
      abis:
        - name: sample_schema
          file: ./abis/sample.json
      eventHandlers:
        - event: Create(uint256,address,string,string)
          handler: addrNew
        - event: Update(uint256,address,string,string)
          handler: addrUpdate
      file: ./src/mapping.ts
    ` },
    {
      id: 3, title: "Rust DSL", language: 'rust', content: `
use IntLink::{DataStreamer, RoutineSchema::UniswapV3};
use IntFlink::MapReducer;
use IntSink::DataWriter;

fn map_fn(input: DataStreamer) -> DataStreamer {
   // custom mapper logic
}

fn reduce_fn(input: DataStreamer) -> DataStreamer {
    // custom reducer logic
}

fn main() {
    let start_block_height = 100_000_000;
    let fields_filter = vec![UniswapV3::account, UniswapV3::from_token, UniswapV3::to_token, 
                             UniswapV3::amount, UniswapV3::block_height];
    let data_streamer = IntLink::createDataStreamer(UniswapV3, start_block_height, fields_filter);

    let mapper = Arc::new(map_fn);
    let reducer = Arc::new(reduce_fn);
    let map_reducer = IntFlink::createMapReducer(data_streamer, mapper, reducer);
    let result = map_reducer.run()?;

    let data_writer = IntSink::createDataWriter();
    data_writer.write(result)?;
}
    ` },
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
          style={{ fontFamily: "Tenor Sans" }}
          className="flex  justify-center  text-center font-normal text-5xl md:text-4xl leading-[42px] pt-[90px]"
        >
          Use IntLayer <span className="text-[#0172C6] ml-3"> Schema</span>, Anyway You Want It
        </div>

        <div className=" flex justify-between mt-[50px]">
          {list.map((e, i) => {
            return <button
              key={`list_${i}`}
              onClick={() => {
                setChooseItem(e)
              }}
              className={` ${chooseItem.id === i + 1 ? 'text-white ' : 'text-[#2E2E2E]'} w-[264px] h-[58px] rounded-[10px] flex items-center justify-center font-medium text-xl leading-5`}
              style={{
                background: chooseItem.id === i + 1 ? "linear-gradient(90deg, #7DC8FF 0%, #0072C6 100%)" : '',
                font: "Quicksand",
              }}
            >
              {e.title}
            </button>
          })}
        </div>

        <div className="border-[#0072C6] border  rounded-[10px] py-[30px] px-[30px]  mt-6">
          <div className="flex justify-between">
            <img src="./color.svg" className=" mb-5"></img>
          </div>
          <div
            style={{
              font: "Quicksand",
            }}
            className=" font-medium text-sm leading-[42px]"
          >
            <SyntaxHighlighter language={chooseItem.language} style={{ ...style }} >
              {`${chooseItem.content} `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ATab;
