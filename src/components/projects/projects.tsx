import React from 'react'
import Link from 'next/link';
import Image
 from 'next/image';
const Projects = () => {
  return (
    <section className='flex flex-col bg-amber-700'>
        <div className='flex justify-between'>
            <h1>Featured Projects</h1>
            <Link href={"/"}>View all</Link>
        </div>
        <Card></Card>
    </section>
  )
}

const Card = () => {

    return (
        <div className='grid border-t-2 p-4'>
            <Image 
                alt='image-1' 
                src={"https://i.pinimg.com/1200x/b0/54/5d/b0545d16d764012ca5b4763740ef0fda.jpg"}
                width={300}
                height={200}
             ></Image>
        </div>
    )
}

export default Projects;