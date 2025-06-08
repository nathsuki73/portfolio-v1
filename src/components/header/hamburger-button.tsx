"use client";

import { useState } from "react";

const HamburgerButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <button className="flex flex-col justify-center items-end gap-2 w-10 h-10 overflow-hidden m-4" onClick={() => {setOpen(!open)}}>
      <span className={`block h-0.5 w-2/4 bg-[#000000] transition-all duration-500 ease-in-out transform ${open ? '-translate-y-0.5': '-translate-y-3'}`}></span>
      <span className={`block h-0.5 w-full bg-[#000000] transition-all duration-500 ease-in-out transform ${open ? 'translate-y-1': '-translate-y-1'}`}></span>
      <span className={`block h-0.5 w-2/4 bg-[#000000] transition-all duration-500 ease-in-out transform ${open ? 'translate-y-3 ': 'translate-y-0.5'}`}></span>
    </button>
  );
};

export default HamburgerButton;
