"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HamburgerButton from "./hamburger-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Header: React.FC = () => {
  const MenuLinks = [
    { path: "#about", label: "About" },
    { path: "#skills", label: "Skills" },
    { path: "#Projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = (value: boolean) => {
    setOpen(value);
  };

  useGSAP(
    () => {
      gsap.set(".item-holder", { y: "100%" });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-underoverlay", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power2.inOut",
        })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power2.inOut",
          delay: -0.75,
        })
        .to(".item-holder", {
          y: 0,
          duration: 1.25,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="fixed left-0 top-0 w-full p-8 flex justify-between items-center z-10">
        <div
          className={`menu-logo transition-all ease-in-out md:px-16 ${
            isOpen ? "text-background" : "text-foreground"
          }`}
        >
          <Link href="/" className="" >
            <Image src="/svg/icon.svg" alt="NAT logo" width={40} height={40}/>
          </Link>
        </div>
        <div>
          <HamburgerButton onChange={toggleMenu} />
        </div>
      </div>
      <div 
        className="menu-underoverlay fixed top-0 left-0 w-screen h-screen bg-midground-black"
        style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}}>
      <div
        className="menu-overlay fixed top-0 left-0 w-screen h-screen p-8 bg-foreground "
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div className="flex flex-col w-full h-full justify-between pt-12">
          <div className="flex flex-col h-3/4 justify-end items-end">
            {MenuLinks.map((link, index) => (
              <div className="menu-link-item overflow-hidden h-full" key={index}>
                <div className="item-holder size-full">
                  <Link className="text-7xl text-background size-full" href={link.path}>
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
    </div>
  );
};

export default Header;
