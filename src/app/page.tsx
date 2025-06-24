'use client'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
          {/* <TransitionLink path="/about" label="About Me" className="h-9 border-1 px-4" /> */}
        </div>
      </div>
    </div>
  );
}
