import React from 'react'
import Image
 from 'next/image';

interface ProjectsProps {
   image: string
   title: string
   date: string 
}


const Projects = () => {
  return (
    <section className='flex flex-col items-center my-24'>
        <div className='flex p-5 w-full'>
            <h1 className='font-bold text-3xl '>Featured Projects</h1>
        </div>
        <Card 
        image='https://i.pinimg.com/1200x/b0/54/5d/b0545d16d764012ca5b4763740ef0fda.jpg'
        title='Long AI-Powered Web Project Study: Exploring Deep Learning Applications in Modern Web Development'
        date='June 2024'></Card>
        <Card 
        image='https://i.pinimg.com/1200x/b0/54/5d/b0545d16d764012ca5b4763740ef0fda.jpg'
        title='Long AI-Powered Web Project Study: Exploring Deep Learning Applications in Modern Web Development'
        date='June 2024'></Card>
        <Card 
        image='https://i.pinimg.com/1200x/b0/54/5d/b0545d16d764012ca5b4763740ef0fda.jpg'
        title='Long AI-Powered Web Project Study: Exploring Deep Learning Applications in Modern Web Development'
        date='June 2024'></Card>
    </section>
  )
}

const Card = ({image, title, date}: ProjectsProps) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 border-t-2 p-4 gap-4 '>
            <Image 
                alt='image-1' 
                src={image}
                width={400}
                height={300}
             ></Image>
             <div className='col-span-2'>
                <h1 className='text-3xl'>{title}</h1>
                <h6>{date}</h6>
             </div>
        </div>
    )
}

export default Projects;