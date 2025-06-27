"use client";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "./LoadingContext";
const Loading = () => {
  const { isLoading, setIsLoading, href, router } = useLoading();

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.set(".item", {
      y: "100%",
      opacity: 1,
    });
    gsap.set(".item-next", {
      y: "100%",
    });
    const timeline = gsap.timeline({ paused: true });

    const splitItem = SplitText.create(".item", {
      type: "chars",
      charsClass: "char++",
    });

    timeline
      .to(".menu-underoverlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
      })
      .to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        delay: -0.75,
      })
      .to(splitItem.chars, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
        onComplete: () => {
          setIsLoading(false);
        },
        delay: -1,
      });

    tl.current = timeline;
  });

  useEffect(() => {
    if (isLoading) {
      tl.current?.play();
    } else {
      router.push(href);
      tl.current?.reverse();
    }
  }, [isLoading, router, href]);

  return (
    <>
      <div
        className="menu-underoverlay fixed top-0 left-0 w-screen h-screen bg-midground-black z-40"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div
          className="menu-overlay fixed top-0 left-0 h-screen w-screen bg-foreground z-50 text-background flex flex-col justify-between items-center tracking-[20px] text-6xl place-content-evenly"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        >
          <div className="">
            <h1 className="hover:underline underline-offset-6 cursor-pointer text-xl tracking-normal font-welcome hidden">
              View Project
            </h1>
          </div>
          <div className="overflow-hidden justify-center items-center h-16 text-center">
            <h1 className="item" style={{ opacity: 0 }}>
              NATHANIEL
            </h1>
          </div>
          <div className="p-4">
            <h1 className="hover:underline underline-offset-6 cursor-pointer text-xl tracking-normal font-welcome "></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
