import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
type Props = {
    data: {
        languageIcon: string;
        proficiency: string;
    }[]
}

export default function Skills({data}: Props) {
  return (
      <motion.div
          initial={{ opacity:0}}
          whileInView={{ opacity:1}}
          transition={{duration: 1.3}}
          className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto justify-center items-center overflow-hidden'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
          <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
          <div className='grid grid-cols-4 gap-5 p-4'>
              {data.map((value, i) => (
                  <Skill data={ value } key={i} left={i+1 <= Math.round(data.length/2) ? true : false} />
                  
              ))}
          </div>
    </motion.div>
  )
}