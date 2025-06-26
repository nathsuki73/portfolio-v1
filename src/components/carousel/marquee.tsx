'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const gsapIcon = '/svg/tech-stack-icon/gsap.svg'
const laravelIcon = '/svg/tech-stack-icon/laravel.svg'
const mysqlIcon = '/svg/tech-stack-icon/mysql.svg'
const nextJsIcon = '/svg/tech-stack-icon/nextjs.svg'
const reactIcon = '/svg/tech-stack-icon/react.svg'
const tailwindIcon = '/svg/tech-stack-icon/tailwind.svg'
const typescriptIcon = '/svg/tech-stack-icon/typescript.svg'

const ICONS: string[] = [gsapIcon, laravelIcon, mysqlIcon, nextJsIcon, reactIcon, tailwindIcon, typescriptIcon]

const ELEMENTS = [...ICONS, ...ICONS, ...ICONS]

const Marquee = () => {
    const firstDiv = useRef(null)
    const secondDiv = useRef(null)

    let xPercent = 0
    const direction = -1
    

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0
        }
        gsap.set(firstDiv.current, {xPercent: xPercent})
        gsap.set(secondDiv.current, {xPercent: xPercent})
        xPercent += 0.1 * direction;
        requestAnimationFrame(animation)
    }
     
    useEffect(() => {
        requestAnimationFrame(animation)
    }, [])
  return (
    <div className='w-full overflow-hidden'>
        <div className='flex w-full relative'>
            <div className='flex flex-row w-full justify-between m-0' ref={firstDiv}>
                {ELEMENTS.map((src: string, index: number) => {
                    return (
                        <Image key={index} src={src} alt='icon' width={50} height={50} />
                    )
                })}
            </div>
            <div className='flex flex-row w-full absolute left-full justify-between m-0' ref={secondDiv}>
                {ELEMENTS.map((src: string, index: number) => {
                    return (
                        <Image key={index} src={src} alt='icon' width={50} height={50} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Marquee