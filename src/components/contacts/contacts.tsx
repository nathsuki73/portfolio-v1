import React from 'react'
import Link from 'next/link'

interface TextBoxProps {
  name: string,
  type?: string
}

const Contacts = () => {
  return (
    <section className='w-full my-24 flex flex-col md:flex-row gap-4'>
            <div className='flex-col md:w-1/2 text-7xl lg:text-9xl md:flex font-welcome'>
              <h1 className=''>
                LET&apos;S
              </h1>
              <h1 className='text-center md:text-right lg:self-center'>
                GET IN
              </h1>
              <h1 className='text-right lg:text-left'>
                TOUCH
              </h1>
            </div>
            <form className='flex flex-col w-full md:w-1/2'>
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
    </section>
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