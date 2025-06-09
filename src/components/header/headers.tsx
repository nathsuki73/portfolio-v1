'use client'

import Link from "next/link";
import HamburgerButton from "./hamburger-button";
import { useCallback, useState } from "react";


const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const handleChange = useCallback((value: boolean) => {
      setOpen(value);
    }, []);

  return (
    <header className={`flex flex-col transition-colors ${isOpen ? 'text-background':'text-foreground'} gap-20`}>
      <div className={`absolute w-full  ${isOpen ? 'animate-dropdown-in':'animate-dropdown-exit'} bg-midground z-0 overflow-hidden`}>
        <div className={`absolute w-full  ${isOpen ? 'animate-dropdown-in-late':'animate-dropdown-exit-late'} bg-foreground transition-all duration-500 ease-in-out`}></div>
      </div>
      <div className="flex flex-row justify-between z-10">
        <h1 className="p-2 text-3xl">Tan.</h1>
        <HamburgerButton onChange={handleChange}/>
      </div>
      <nav className="z-10 h-full">
        <ul className="flex flex-col text-4xl items-center  gap-6">
          <Link className={`w-full text-center transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-1000': '-translate-y-100 duration-300'}`} href={'/'}>About</Link>
          <Link className={`w-full text-center  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-700': '-translate-y-100 duration-500'}`} href={'/'}>Projects</Link>
          <Link className={`w-full text-center  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-500': '-translate-y-100 duration-700'}`} href={'/'}>Skills</Link>
          <Link className={`w-full text-center  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-300': '-translate-y-100 duration-1000'}`} href={'/'}>Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
