'use client'
import React, { useEffect, useRef, useState } from 'react'
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

const ELEMENTS = [...ICONS, ...ICONS]

const Marquee = () => {
    const firstDiv = useRef<HTMLDivElement | null>(null)
    const secondDiv = useRef<HTMLDivElement | null>(null)
    const containerDiv = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const widthTotal = () => {
            if (firstDiv.current && secondDiv.current) {
                const style = getComputedStyle(firstDiv.current?.children[0])
                const marginRight = 2 * parseFloat(style.marginRight)
                return firstDiv.current?.scrollWidth + secondDiv.current?.scrollWidth + marginRight
            }
        }
        console.log(widthTotal())
        gsap.set(containerDiv.current, {
            width: widthTotal()
        })
    }, [])

    const [isHovered, setHovered] = useState(false)
    const [isxPercent, setxPrecent] = useState(0)
    
    
    
    useEffect(() => {
        let xPercent = isxPercent
        
        const direction = -1
        const animation = () => {
            if (xPercent <= -100) {
                xPercent = 0
            }
            gsap.set(firstDiv.current, {xPercent: xPercent})
            gsap.set(secondDiv.current, {xPercent: xPercent})
            xPercent += (isHovered ? 0.05:0.1) * direction;
            setxPrecent(xPercent)
            requestAnimationFrame(animation)
        }

        requestAnimationFrame(animation)
    }, [isHovered, isxPercent])

    


  return (
    <div className='w-full overflow-hidden z-0' >
        <div className='flex' ref={containerDiv} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className='flex flex-row w-fit justify-start' ref={firstDiv}>
                {ELEMENTS.map((src: string, index: number) => {
                    return (
                        <Image key={index} src={src} alt='tech-icon' width={50} height={50} className='mr-20'/>
                    )
                })}
            </div>
            <div className='flex flex-row w-fit justify-start' ref={secondDiv} >
                {ELEMENTS.map((src: string, index: number) => {
                    return (
                        <Image key={index} src={src} alt='tech-icon' width={50} height={50}  className='mr-20' />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Marquee