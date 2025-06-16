"use client";

import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Loading: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    
    useGSAP(() => { 
        gsap.registerPlugin(SplitText)
        gsap.set(
            ".item", {
            y: "100%",
            opacity: 1
            
        })
        gsap.set(
            ".item-next", {
            y: "100%"
        })
        const timeline = gsap.timeline()

        const splitItem = SplitText.create(".item", {
            type: "chars",
            charsClass: "char++"
        })
        const splitItemNext = SplitText.create(".item-next", {
            type: "chars",
            charsClass: "char++"
        })

        timeline.to(splitItem.chars, {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
                from: "random"
            }
        })
        .to(splitItem.chars, {
            y: "-200%",
            duration: 1,
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
                from: "random"
            },
            delay: 1
        })
        .to(splitItemNext.chars, {
            y: "-200%",
            duration: 1,
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
                from: "random"
            },
            delay: -1
        })
        
        tl.current = timeline;

    })
    
    useEffect(() => {
        tl.current?.play();
    })

    return (
    <div className='fixed top-0 left-0 h-screen w-screen bg-foreground z-20 text-background flex flex-col justify-between items-center tracking-[20px] text-6xl place-content-evenly'>
        <div className="">
            <h1 className="hover:underline underline-offset-6 cursor-pointer text-xl tracking-normal font-welcome hidden">View Project</h1>
        </div>
        <div className="overflow-hidden justify-center items-center h-16 text-center">
            <h1 className="item" style={{opacity: 0}}>NATHANIEL</h1>
            <h1 className="item-next">TAN</h1>
        </div>
        <div className="p-4">
            <h1 className="hover:underline underline-offset-6 cursor-pointer text-xl tracking-normal font-welcome ">click to continue</h1>
        </div>
    </div>
  )
}

export default Loading;