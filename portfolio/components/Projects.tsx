import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    data: {
        img: string;
        name: string;
    }[]
}

export default function Projects({data}: Props) {
  return (
      <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto justify-center items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
          
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
              {data.map((value, i) => (
                  <div key={ i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-40 h-screen'>
                      <motion.img
                          initial={{
                              opacity: 0
                          }}
                          whileInView={{
                              opacity: 1
                          }}

                          transition={{
                              duration: 1
                          }}
                          src={value.img} alt="" />
                
                      <motion.div
                        initial={{
                              opacity: 0
                          }}
                          whileInView={{
                              opacity: 1
                          }}

                          transition={{
                              duration: 1
                          }}
                      >
                          <h4 className='text-3xl font-semibold text-center' >
                              <span className='underline decoration-[#363743] break-words'>
                                  Case Study {i+1} of {data.length}:
                              </span>{" "}
                              <span className='break-words'>{value.name}</span>
                          </h4>
                      </motion.div>
                  </div> 
              ))}
            </div>

          <div className='w-full absolute top-[calc(50%-150px)] bg-[#363743] left-0 h-[300px] -skew-y-12'>
              
          </div>
    </div>
  )
}