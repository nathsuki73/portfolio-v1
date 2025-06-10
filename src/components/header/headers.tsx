'use client'

import Link from "next/link";
import HamburgerButton from "./hamburger-button";
import { useCallback, useState } from "react";
import React from "react";


const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const handleChange = useCallback((value: boolean) => {
      setOpen(value);
    }, []);



  return (
    <header className={`flex flex-col transition-colors ${isOpen ? 'text-background':'text-foreground'} gap-20`}>
      <div className={`absolute w-full h-full  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-700 opacity-100': '-translate-y-full  duration-1000 opacity-0'} bg-midground z-0 overflow-hidden`}>
        <div className={`absolute w-full h-full sm:left-3/4 lg:left-8/12 ${isOpen ? 'translate-y-0 duration-1000': '-translate-y-full duration-700'}  bg-foreground transition-all  ease-in-out`}></div>
      </div>
      <div className="flex flex-row justify-between z-10 m-4">
        <h1 className="m-4 text-2xl font-welcome">NS</h1>
        <HamburgerButton onChange={handleChange}/>
      </div>
      <nav className="z-10 h-full">
        <ul className={`flex flex-col text-5xl gap-6 m-4 transition-all ease-in-out duration-1000 ${isOpen ? 'opacity-100':'opacity-0'}`}>
          <Link className={`w-full text-end transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-1000': '-translate-y-120 duration-300'}`} href={'/'}>About.</Link>
          <Link className={`w-full text-end  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-700': '-translate-y-120 duration-500'}`} href={'/'}>Projects.</Link>
          <Link className={`w-full text-end  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-500': '-translate-y-120 duration-700'}`} href={'/'}>Skills.</Link>
          <Link className={`w-full text-end  transition-all ease-in-out ${isOpen ? 'translate-y-0 duration-300': '-translate-y-120 duration-1000'}`} href={'/'}>Contact.</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
