import { useEffect, } from "react";
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const ADesign = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    let allowScroll = true
    let scrollTimeout = gsap.delayedCall(1, () => (allowScroll = true)).pause()
    let currentIndex = 0
    let swipePanels = gsap.utils.toArray('.swipe-section .panel')
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i })
    let intentObserver = ScrollTrigger.observe({
      type: 'wheel,touch',
      onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
      onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
      tolerance: 10,
      preventDefault: true,

      onEnable(self: any) {
        allowScroll = false
        scrollTimeout.restart(true)
        let savedScroll = self.scrollY()
        self._restoreScroll = () => self.scrollY(savedScroll)
        document.addEventListener('scroll', self._restoreScroll, { passive: false })
      },
      onDisable: (self: any) => document.removeEventListener('scroll', self._restoreScroll),
    })

    intentObserver.disable()

    function gotoPanel(index: number, isScrollingDown: boolean) {
      if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
        intentObserver.disable() // resume native scroll
        return
      }
      allowScroll = false
      scrollTimeout.restart(true)

      let target: any = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index]

      gsap.to(target, {
        yPercent: isScrollingDown ? -100 : 0,
        duration: 0.75,
      })

      currentIndex = index
    }

    ScrollTrigger.create({
      trigger: '.swipe-section',
      pin: false,
      start: 'top top',
      end: '+=10',
      onEnter: (self) => {
        if (intentObserver.isEnabled) {
          return
        }
        self.scroll(self.start + 1)
        intentObserver.enable()
      },
      onEnterBack: (self) => {
        if (intentObserver.isEnabled) {
          return
        }
        self.scroll(self.end - 1)
        intentObserver.enable()
      },
    })

    let horizontalSections = gsap.utils.toArray('.horizontal .panel')
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal',
        pin: true,
        scrub: 1,
        end: '+=3500',
        markers: true,
      },
    })
  }, [])


  const data = [
    {
      img: './gpt.svg',
      title: 'How AI',
      content: <div className="text-4xl md:text-2xl font-bold leading-[42px]">Based on <span className="font-medium text-[#0172C6]">LLM PoT (Program of Thoughts)</span> prompt engineering, IntLayer translates human instructions into precise and auditable data streaming tasks.</div>,
    },
    {
      img: './live.svg',
      title: 'How Data Streaming',
      content: <div className="text-4xl  md:text-2xl font-bold leading-[42px]">IntLayer compiles data streaming tasks into <span className=" font-medium text-[#0172C6]">parallel computation “pure functions”</span> with no side-effect, for real-time processing at massive scale.</div>,
    },
    {
      img: './pi.svg',
      title: 'How Zero-Trust',
      content: <div className="text-4xl md:text-2xl font-bold leading-[42px]">IntLayer executes tasks in <span className=" font-medium text-[#0172C6]">ZeroKnowledge-VMs</span> , generates verifiable on-chain proofs, yet preserves source privacy. The functions can be directly accessed by smart contracts.</div>
    }
  ]


  return (
    <div className='swipe-section '>
      <section id={`panels`}>
        {data.map((item, index) => {
          return (
            <article key={`slider${index}`} id={`panel-${index}`} className={`panel w-full tab${index}`}>
              <div className='flex h-[900px] bg-[#D9D9D9]'>
                <div className="flex justify-center items-center w-[50%]">
                  <img src={item.img} />

                </div>
                <div style={{ fontFamily: 'Tenor Sans' }} className='bg-[#D9D9D9] border-l-[5px] border-black w-[50%] flex items-center  flex-col'>
                  <div className=" mt-[253px] font-normal text-5xl md:text-4xl leading-[48px]">{item.title}</div>
                  <div className=" mt-[146px] px-[50px]"> {item.content}</div>


                </div>
              </div>
            </article>
          )
        })}
      </section>
    </div>

  );
};

export default ADesign;
