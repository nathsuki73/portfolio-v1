import React from 'react'
import Link from 'next/link';
import Image
 from 'next/image';

interface ProjectsProps {
   image: string
   title: string
   date: string 
}


const Projects = () => {
  return (
    <section className='flex flex-col bg-amber-700'>
        <div className='flex justify-between p-4'>
            <h1 className='text-4xl'>Featured Projects</h1>
            <Link href={"/"}>View all</Link>
        </div>
        <Card 
        image='https://i.pinimg.com/1200x/b0/54/5d/b0545d16d764012ca5b4763740ef0fda.jpg'
        title='Title'
        date='date'></Card>
    </section>
  )
}

const Card = ({image, title, date}: ProjectsProps) => {

    return (
        <div className='grid border-t-2 p-4 gap-4'>
            <Image 
                alt='image-1' 
                src={image}
                width={300}
                height={200}
             ></Image>
             <h1 className='text-4xl'>{title}</h1>
             <h6>{date}</h6>
        </div>
    )
}

export default Projects;