'use client'

import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import HamburgerButton from "./hamburger-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header: React.FC = () => {

  const MenuLinks = [
    {path: '#home', label: 'Home'},
    {path: '#about', label: 'About'},
    {path: '#skills', label: 'Skills'},
    {path: '#contact', label: 'Contact'},
  ]
  
  const [isOpen, setOpen] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = (value: boolean) => {
    setOpen(value);
  };

  useGSAP(() => {
    gsap.set(".item-holder", {y: 100})

    tl.current = gsap
    .timeline({paused: true})
    .to(".menu-overlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut"
    })
    .to(".item-holder", {
      y: 0,
      duration: 1.25,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75
    })
  }, {scope: container})

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen])

  return (
    <div className="menu-container" ref={container}>
      <div className="fixed left-0 top-0 w-full p-4 flex justify-between items-center z-10">
        <div className={`menu-logo transition-all ease-in-out ${isOpen ? "text-background":"text-foreground"}`}>
          <Link href="/">TAN</Link>
        </div>
        <div>
          <HamburgerButton onChange={toggleMenu}/>
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-screen h-screen p-8 bg-foreground " style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}}>
        <div className="flex flex-col w-full h-full justify-between">
          <div className="flex flex-col h-3/4 justify-center items-end gap-6">
            {MenuLinks.map((link, index) => (
              <div className="menu-link-item overflow-hidden" key={index}>
                <div className="item-holder">
                  <Link className="text-7xl text-background" href={link.path}>
                  {link.label}
                  </Link>
                </div>
              </div>
              ))}
          </div>
          <div className="flex flex-row justify-between font-welcome ">
            <div className="flex flex-col justify-end text-background text-start">
              <p>naths@gmail.com</p>
              <p>123 567 890</p>
            </div>
            <div className="flex flex-col text-background text-end">
              <a href="#">X</a>
              <a href="#">Tiktok</a>
              <a href="#">Instagram</a>
              <a href="#">Github</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;

