'use client'
import Link from "next/link";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink/transitionLink";
import Marquee from "@/components/carousel/marquee";

export default function Home() {
  return (
    <div className="flex flex-col mt-36">
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
            <TransitionLink path="/about" label="Get in Touch" className="h-9 border-1 px-4" />
            <TransitionLink path="/about" label="View my work" className="h-9 border-1 px-4" />
          </div>

        </div>
        
        <div className="h-16 w-full">
          <Marquee />
        </div>
        <div className="self-center">
          <Image src={'/svg/arrow-down.svg'} alt="Scroll to continue" width={50} height={50}/>
        </div>
      </div>
    </div>
  );
}
