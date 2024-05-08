import { WheelEventHandler, useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ADesign = () => {
  let sliderRef = useRef<any>(null)
  const [current, setCurrent] = useState(0)
  const settings = {
    className: "",
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    cssEase: "linear",
    speed: 1000,
    infinite: true,
  };
  const data = [
    {
    img:'./gpt.svg',
    title:'How AI',
    content:<div className="text-4xl font-bold leading-[42px]">Based on <span className="font-medium text-[#0172C6]">LLM PoT (Program of Thoughts)</span> prompt engineering, IntLayer translates human instructions into precise and auditable data streaming tasks.</div>,
    },
    {
    img:'./live.svg',
    title:'How Data Streaming',
    content:<div className="text-4xl font-bold leading-[42px]">IntLayer compiles data streaming tasks into <span className=" font-medium text-[#0172C6]">parallel computation “pure functions”</span> with no side-effect, for real-time processing at massive scale.</div>,
    },
    {
    img:'./pi.svg',
    title:'How Zero-Trust',
    content:<div className="text-4xl font-bold leading-[42px]">IntLayer executes tasks in <span className=" font-medium text-[#0172C6]">ZeroKnowledge-VMs</span> , generates verifiable on-chain proofs, yet preserves source privacy. The functions can be directly accessed by smart contracts.</div>
    }
  ]

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    const deltaY = event.deltaY;

    if (deltaY > 0) {
      if (current + 1 === data.length) {
        event.preventDefault();
        document.body.style.overflow = "auto";

        return;
      }
      (sliderRef as any).slickNext();
    } else if (deltaY < 0) {
      if (current === 0) {
        event.preventDefault();
        document.body.style.overflow = "auto";

        return;
      }
      (sliderRef as any).slickPrev();
    }

    event.stopPropagation();
  };

  const handleAfterChange = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className=" mt-[120px]">
      <div
        id="myBar"
        onWheel={handleWheel}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`mt-10 scrollable-content`}
      >
        <Slider
          {...settings}
          ref={(slider: any) => {
            sliderRef = slider;
          }}
          afterChange={handleAfterChange}>
          {data.map((item, index) => {
            return (
              <div key={`slider${index}`} className='!flex h-[900px] bg-[#D9D9D9]'>
                <div className="flex justify-center items-center w-[50%]">
                  <img src={item.img}/>
                  
                </div>
                <div  style={{fontFamily:'Tenor Sans'}} className='bg-[#D9D9D9] border-l-[5px] border-black w-[50%] flex items-center  flex-col'>
                  <div className=" mt-[253px] font-normal text-5xl leading-[48px]">{item.title}</div>
                 <div className=" mt-[146px] px-[50px]"> {item.content}</div>

                 
                </div>
              </div>
            )
          })}
        </Slider>
    </div>
    </div>

  );
};

export default ADesign;
