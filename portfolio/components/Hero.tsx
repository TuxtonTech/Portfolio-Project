import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
    data: {
        img: string;
        positionTitle: string;
        typeWriterText: string[];
    }
}

export default function Hero({ data }: Props) {
    
    const [text, count] = useTypewriter({
        words: data.typeWriterText,
        loop: true,
        delaySpeed: 2000
    })

  return (
      <div className=' relative h-screen flex flex-col space-y-8 items-center justify-center task-center overflow-hidden overflow-x-hidden'>
        <BackgroundCircles/>
          <motion.div initial={{
              opacity: 0,
              scale: .5
          }} animate={{
              opacity: 1,
              scale: 1
              }} transition={{
                duration: 1.3
          }} className='absolute text-center'>
            <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={data.img} alt="" />
        <motion.h2
          initial={{
            letterSpacing: '0px'
          }}
          animate={{
            letterSpacing: '15px'
          }}
          transition={{
            duration: 1.3
          }}
          
          className='text-sm text-center uppercase text-gray-500 pt-2 pb-2 pl-4 tracking-[15px] mobile: tracking-[10px]'>{data.positionTitle}</motion.h2>
              <div className='flex flex-row justify-around text-center text-gray-400 text-sm mx-auto p-4 sm:p-0 pt-0'>
                  <Link href="#about" className='hover cursor-pointer'>About</Link>
                  <Link href="#experience" className='hover cursor-pointer'>Experience</Link>
                  <Link href="#skills" className='hover cursor-pointer'>Skills</Link>
                  <Link href="#projects" className='hover cursor-pointer'>Projects</Link>
              </div>
            <div className="relative ">
              <h2 className="w-screen absolute left-1/2 transform -translate-x-1/2 text-center flex justify-center items-center text-3xl lg:text-3xl font-semibold">
                <span className="">{text}<Cursor cursorColor="white" /></span>
                
              </h2>
            </div>
          </motion.div>
      </div>
  )
}