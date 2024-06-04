import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    data: {
        img: string;
        name: string;
        desc: string
    }[]
}

export default function Projects({data}: Props) {



  return (
      <motion.div initial={{
                              opacity: 0
                          }}
          whileInView={{
                              opacity: 1
                          }}

                          transition={{
                              duration: 1
                          }}className='h-screen flex relative flex-col  text-center md:text-left max-w-full   xl:space-y-0 mx-auto justify-center items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-6 z-1'>Projects</h3>
          
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
              {data.map((value, i) => (
                  
                  <div key={ i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-14 h-screen z-20'>
                                  <motion.img
                                      initial={{
                                          y: -300,
                                          opacity: 0
                                      }}
                                      whileInView={{
                                          y: 0,
                                          opacity: 1
                                      }}
            
                                      transition={{
                                          duration: 1
                                      }}
                                      src={value.img} alt="" />
                            
                                    <div>
                                        <h4 className='text-3xl font-semibold text-center' >
                                            <span className='underline decoration-[#363743] break-words'>
                                                Project {i+1} of {data.length}:
                                            </span>{" "}
                                            <span className='break-words'>{value.name}</span>
                                        </h4>
                                      
                                    </div>
                      <p className='max-w-3xl text-lg text-center '>{ value.desc }</p>                      
                  </div> 
              ))}
            </div>

          <div className='w-full absolute top-[calc(50%-150px)] bg-[#363743] left-0 h-[300px] -skew-y-12'>
              
          </div>
    </motion.div>
  )
}