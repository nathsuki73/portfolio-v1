import React from 'react'
import Link from 'next/link'

interface TextBoxProps {
  name: string,
  type?: string
}

const Contacts = () => {
  return (
    <div className='w-full my-24'>
        <h1 className='text-3xl font-bold p-5'>Contact Me.</h1>
        <div className='grid grid-cols-1 gap-4'>
            <form className='flex flex-col w-full'>
              <TextBox name='Full Name' ></TextBox>
              <TextBox name='Email Address' type='email'></TextBox>
              <TextBox name='Phone' type='tel'></TextBox>
              <TextBox name='Message'></TextBox>
              <Link
                className="w-1/3 border-1 px-4 py-2 border-background bg-foreground text-background mt-2 text-center self-end"
                href={"/"}
              >
                Submit
              </Link>
            </form>
        </div>
    </div>
  )
}

const TextBox = ({name, type = 'text'}: TextBoxProps) => {
  return (
    <div className="flex flex-col-reverse w-full mx-auto overflow-hidden">
        <input
          placeholder={name}
          className="relative h-12 px-4 py-1 text-md border-b-1 focus:border-b-2 outline-none peer placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 placeholder:text-base-400"
          type={type}
          id={name}
        />
          <span
            className="text-md duration-500 text-base-500 -translate-y-12 peer-focus:translate-y-3 font-bold"
            >{name}</span
          >
      </div>
  )
}


export default Contacts