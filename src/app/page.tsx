'use client'
import TransitionLink from "@/components/TransitionLink/transitionLink";
export default function Home() {
  return (
    <div className="">
      <TransitionLink path="/home" label="Home" className="border-2 p-5" />
    </div>
  );
}
