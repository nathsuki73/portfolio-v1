import React from 'react'

const Highlights = () => {
  return (
    <section className=' h-screen'>
        <h1 className='font-bold text-3xl '>Featured Projects</h1>
        <div className='grid grid-cols-4 grid-rows-12 gap-4 bg-amber-800 w-1/2 h-1/2 '>
            <div className='col-span-1 row-span-6 bg-amber-300'></div>
            <div className='col-span-1 row-span-3 bg-amber-300'></div>
            <div className='col-span-1 row-span-3 bg-amber-300'></div>
            <div className='col-span-1 row-span-5 bg-amber-300'></div>
            <div className='col-span-2 row-span-6 bg-amber-300'></div>
            <div className='col-span-1 row-span-4 bg-amber-300'></div>
            <div className='col-span-1 row-span-6 bg-amber-300'></div>
            <div className='col-span-1 row-span-3 bg-amber-300'></div>
            <div className='col-span-2 row-span-3 bg-amber-300'></div>
        </div>

    </section>
  )
}

export default Highlights