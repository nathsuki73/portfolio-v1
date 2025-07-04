'use client'
import Link from "next/link";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink/transitionLink";
import Marquee from "@/components/carousel/marquee";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const [isHovered, setHovered] = useState(false)
  const [isHovered2, setHovered2] = useState(false)

  const hoveredDiv = useRef<HTMLDivElement | null>(null)
  const hoveredDiv2 = useRef<HTMLDivElement | null>(null)

  const tl = useRef<gsap.core.Timeline | null>(null);
  const tl2 = useRef<gsap.core.Timeline | null>(null);
  
  


  useGSAP(() => {
    const div1 = hoveredDiv.current?.firstElementChild
    if (!div1) return
    const div2 = hoveredDiv2.current?.firstElementChild
    if (!div2) return

    tl.current = gsap.timeline().to(div1, {
      duration: 1,
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      ease: "power4.inOut"
    })
    tl2.current = gsap.timeline().to(div2, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
    })

    tl.current?.pause()
    tl2.current?.pause()
  }, [hoveredDiv])
  
  useEffect(() => {
    if (isHovered) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }

  
  }, [isHovered, tl])
  
  useEffect(() => {
    if (isHovered2) {
      tl2.current?.play()
    } else {
      tl2.current?.reverse()
    }

  
  }, [isHovered2, tl2])
  return (
    <div className="flex flex-col">
      <div className="fixed left-0 top-0 w-full p-8 flex justify-between items-center">
        <div className="md:mx-16">
          <Link href="/home" className="" >
            <Image src="/svg/icon.svg" alt="NAT logo" width={40} height={40}/>
          </Link>
        </div>
        <div className="flex flex-row h-10 m-4 gap-8  place-items-center md:mx-16">
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-16 font-bold tracking-widest md:tracking-[0.3em]">
            <a href="#">YT</a>
            <a href="#">GH</a>
            <a href="#">TT</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full mt-36 mb-12 gap-16">
        <div className="flex flex-col gap-4">
          <div className="items-center text-center text-6xl font-bold tracking-tighter">
            <h1>
              Crafting <span>Modern</span> Web
            </h1>
            <h1>
              <span>Experiences</span> and Interactive <span>Solutions</span>
            </h1>
          </div>
          <div className="items-center text-center text-2xl font-medium tracking-tighter">
            Crafting elegance and innovation in every line of code.
          </div>
          <div className="flex flex-row gap-1.5 justify-center">  
            <div className="overlay-button1 relative h-9 w-36" 
                ref={hoveredDiv}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
              <TransitionLink path="/about"  className="absolute size-full z-10 top-0 left-0 px-4 hover:cursor-pointer bg-foreground text-background border-foreground border-1" style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}>
                View my Work
              </TransitionLink>
              <TransitionLink path="/about"  className="absolute size-full z-0 top-0 left-0 px-4 hover:cursor-pointer border-1">
                View my Work
              </TransitionLink>
            </div>
            <div className="overlay-button2  relative h-9 w-36"
                ref={hoveredDiv2} 
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}>
              <TransitionLink path="/about"  className="absolute size-full z-10 top-0 left-0 px-4 hover:cursor-pointer bg-foreground text-background border-foreground border-1 " style={{clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}}>
                Get in Touch
              </TransitionLink>
              <TransitionLink path="/about"  className="absolute size-full z-0 top-0 left-0 px-4 hover:cursor-pointer border-1">
                Get in Touch
              </TransitionLink>
            </div>
            
          </div>

        </div>
        
        <div className="h-12 w-full">
          <Marquee />
        </div>
        <div className="self-center">
          <Image src={'/svg/arrow-down.svg'} alt="Scroll to continue" width={50} height={50}/>
        </div>
      </div>
    </div>
  );
}
