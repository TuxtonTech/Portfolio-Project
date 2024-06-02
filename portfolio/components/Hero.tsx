import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'

type Props = {}

export default function Hero({ }: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Grant Pierce", 
            "Guy-who-loves-coffe.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000

    })
  return (
      <div className=' relative h-screen flex flex-col space-y-8 items-center justify-center task-center overflow-hidden'>
        <BackgroundCircles />
          <motion.div initial={{
              opacity: 0,
              scale: .5
          }} animate={{
              opacity: 1,
              scale: 1
              }} transition={{
                duration: 1.3
          }} className='absolute text-center'>
            <img className="rounded-full h-32 w-32 mx-auto object-cover" src="https://tuxtontech.com/imgs/egeus.png" alt="" />
            <h2 className='text-sm text-center uppercase text-gray-500 pt-2 pb-2 tracking-[13px]'>Software Engineer</h2>
            <h2 className='text-center'>
               <span>{text}</span>   
               <Cursor cursorColor='white'></Cursor>
            </h2>
          </motion.div>
      </div>
  )
}