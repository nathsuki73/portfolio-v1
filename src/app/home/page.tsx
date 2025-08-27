import React from 'react'
import Landing from "@/components/landing/landing";
import Header from "@/components/header/headers";
import Projects from "@/components/projects/projects"
import Highlights from '@/components/highlights/highlights';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing />
      <Projects />
      <Highlights />
    </div>
  )
}

export default HomePage