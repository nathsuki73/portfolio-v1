import React from 'react'
import Landing from "@/components/landing/landing";
import Header from "@/components/header/headers";



const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
        <Landing />
    </div>
  )
}

export default HomePage