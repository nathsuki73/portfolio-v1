"use client";

import React, { useEffect, useState } from "react";

interface HamburgerButtonProps {
  onChange: (isOpen: boolean) => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({onChange}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    onChange(open)
  }, [open, onChange])

  return (
    <button className="flex flex-col justify-center items-end gap-2 w-10 h-10 overflow-hidden m-4 cursor-pointer" onClick={() => {setOpen(!open)}}>
      <span className={`block h-[1.5px] w-3/4 ${open ? 'bg-background':'bg-foreground'} transition-all duration-500 ease-in-out ${open ? 'translate-y-0': '-translate-y-4'}`}></span>
      <span className={`block h-[2px] w-full ${open ? 'bg-background':'bg-foreground'} transition-all duration-500 ease-in-out ${open ? 'translate-y-1': '-translate-y-1'}`}></span>
      <span className={`block h-[1.5px] w-3/4 ${open ? 'bg-background':'bg-foreground'} transition-all duration-500 ease-in-out ${open ? 'translate-y-4 ': 'translate-y-0'}`}></span>
    </button>
  );
};

export default HamburgerButton;
