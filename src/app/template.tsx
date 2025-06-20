'use client'

import { animatePageIn } from '@/components/loading/animation'
import React, { useEffect } from 'react'

const Template = ({children}: {children: React.ReactNode}) => {

    useEffect(() => {
        animatePageIn()
    }, [])

  return (
    <div>
        <div
        className="menu-underoverlay fixed top-0 left-0 w-screen h-screen bg-midground-black"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <div
          className="menu-overlay fixed top-0 left-0 h-screen w-screen bg-foreground z-20 text-background flex flex-col justify-between items-center tracking-[20px] text-6xl place-content-evenly"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <div className="">
            
          </div>
          <div className="overflow-hidden justify-center items-center h-16 text-center">
            <h1 className="item" style={{opacity: 0}}>
              NATHANIEL
            </h1>
          </div>
          <div className="p-4">
            
          </div>
        </div>
      </div>
        {children}
    </div>
  )
}

export default Template