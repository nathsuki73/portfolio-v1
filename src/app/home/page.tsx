import React from 'react'
import Landing from "@/components/landing/landing";
import Header from "@/components/header/headers";



const page = () => {
  return (
    <div className="flex flex-col mt-18">
      <Header />
      <Landing />
    </div>
  )
}

export default page