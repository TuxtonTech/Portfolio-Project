import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    data: {
        languageIcon: string;
        proficiency: string;
    },
    left: boolean
}

export default function Skill({data, left}: Props) {
    return (
      <motion.div initial={{
                  x: left ? -100 : 100,
                  opacity: 0
                }}
                transition={{ duration: .5 }}
                whileInView={{ 
                  x: 0,
                  opacity: 1.3
                }} className='group relative flex cursor-pointer'>
            
          <img
              
                src={data.languageIcon}
                className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            ></img>
            <div
                className='absolute opacity-0 hidden group-hover:block group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full xl:h-32 xl:w-32'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black'>{ data.proficiency }</p>
                </div>
            </div>
      </motion.div>
  )
}