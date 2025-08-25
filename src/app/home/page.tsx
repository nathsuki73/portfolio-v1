import React from 'react'
import Landing from "@/components/landing/landing";
import Header from "@/components/header/headers";
import Projects from "@/components/projects/projects"


const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing />
      <Projects />
    </div>
  )
}

export default HomePage