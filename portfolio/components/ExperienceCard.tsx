import { motion } from 'framer-motion'
import React from 'react'
type Props = {
    data: {
        positionTitle: string;
        companyName: string;
        companyLogo: string;
        techStack: string[];
        dates: {
            startDate: string;
            endDate: string;
        };
        positionDesc: string[];
    }
}

export default function ExperienceCard({data}: Props) {
    return (
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px]xl:w-[600px] snap-center bg-[#363743] p-10'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.3
                }}
                whileInView={{
                    opacity: 1, y: 0
                }}

                viewport={{
                    once: true
                }}
                className='w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={ data.companyLogo }></motion.img>            
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{data.positionTitle}</h4>
                <p className='font-bold text-xl mt-1'>{ data.companyName }</p>
                <div className='flex space-x-2 my-2'>
                    {data.techStack.map((value, i) => (
                        <img src={value} key={i} className='h-10 w-10 rounded-full' alt="" />

                    ))}
                </div>
                <p className='uppercase py-5 pt-2 text-gray-300'>{data.dates.startDate} -&gt; { data.dates.endDate == "" ? "Present" : data.dates.endDate }</p>
                <ul className='list-disc spacy-y-4 ml-5 text-sm'>
                    {data.positionDesc.map((value, i) => (
                        <li key={i}>{ value }</li>

                    ))}
                </ul>
        </div>
      </article>
    // <div>ExperienceCard</div>
  )
}