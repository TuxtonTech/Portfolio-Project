import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    data: {
        img: string;
        text: string;
    }
}

export default function About({data}: Props) {
  return (
      <div className='h-screen flex flex-col relative text-center md:text-left max-w-3xl px-10 justify-evenly mx-auto items-center absolute'>
          <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pl-6'>About</h3>
          <motion.img src={data.img} initial={{
              x:-200
          }}
              transition={{
                duration: 1.3
            }}
              whileInView={{
              x:0
          }} className='md:md-0 flex-shrink-0 w-64 h-64 md:pt-0  rounded-2xl mobile:rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[400px]'>   
          </motion.img>
          
          <div className=' px-0 md:px-10 text-center'>
              <h4 className='pb-5 mobile:pb-0 mobile:text-1xl text-2xl font-semibold'>
                  Here is a <span className='text-gray-400'>
                      brief</span> background
              </h4>
              <p className='mobile:pt-6 mobile:text-sm '>{ data.text }</p>
          </div>
    </div>
  )
}