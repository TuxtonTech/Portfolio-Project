import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
      <motion.div  initial={{
            opacity: 0
        }} animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [.1,.2,.3,.4,.8,.1,1]
            }} transition={{
                duration: 1.3
        }} className='relative flex justify-center items-center'>
          <div className='absolute border border-[#363743] rounded-full h-[300px] w-[300px] mt-23 animate-pulse opacity-20' />
          <div className='absolute border border-[white] rounded-full h-[500px] w-[500px] mt-23 opacity-20' />
          <div className='absolute border border-[#363743] rounded-full h-[650px] w-[650px] mt-23 animate-pulse opacity-20' />
    </motion.div>
  )
}