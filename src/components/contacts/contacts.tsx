import React from 'react'

const Contacts = () => {
  return (
    <div className='w-full my-24'>
        <h1 className='text-9xl font-bold'>Contact Me.</h1>
        <div className='grid grid-cols-2 gap-4 border-2'>
            <div className='flex flex-col col-start-2'>
              <TextBox></TextBox>

            </div>
        </div>
    </div>
  )
}

const TextBox = () => {
  return (
    <div className="flex flex-col-reverse w-full mx-auto overflow-hidden">
        <input
          placeholder="Email Adress"
          className="relative h-12 px-4 py-1 text-xs border-0 rounded-lg outline-none peer placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 placeholder:text-base-400"
          type="text"
        />
          <span
            className="mb-2 text-xs duration-500 text-base-500 -translate-y-12 peer-focus:translate-y-0"
            >Email Adress</span
          >
      </div>
  )
}


export default Contacts