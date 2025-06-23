'use client'
import Link from "next/link";
import TransitionLink from "@/components/TransitionLink/transitionLink";
export default function Home() {
  return (
    <div className="flex flex-col mt-14">
      <div className="fixed left-0 top-0 w-full p-4 flex justify-between items-center">
        <div>
          <Link href="/" className="font-bodoni-moda">TAN</Link>
        </div>
        <div className="flex flex-row h-10 m-4 gap-2">
          <div className="flex flex-row gap-2">
            <a href="#">YT</a>
            <a href="#">GH</a>
            <a href="#">TT</a>
            <a href="#">IG</a>
          </div>
          <TransitionLink path="/about" label="About Me" className="h-9 border-1 px-4 text-center" />
        </div>
      </div>
    </div>
  );
}
