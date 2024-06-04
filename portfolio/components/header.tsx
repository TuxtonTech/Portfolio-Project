import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    data: {
        otherLinks: string[];
    }
}

export default function Header({ data }: Props) {
    const onAnimateComplete = () => {
      document.body.style.overflow = "auto"
  }

  return (
      <header className='sticky top-0 flex items-start justify-between max-w-2xl mx-auto z-20 p-5 xl:items-center'>
          <motion.div initial={{
              x: -500,
              opacity: 0,
                scale: 0.5
          }} animate={{
              x: 0,
              opacity: 1,
              scale: 1
              }} transition={{
            duration: 1.5
        }}>
              <div className='flex flex-row items-center'>
                  {data.otherLinks.map((link, i) => (
                      <SocialIcon  className='hover' key={i} url={link} bgColor='transparent' />
                  ) )}
            </div>
          </motion.div>
          <motion.div initial={{
              x: 500,
              opacity: 0,
              scale:.5
          }} animate={{
              x: 0,
              opacity: 1,
              scale:1
              }} transition={{
              duration: 1.5
          }} onAnimationComplete={onAnimateComplete}>
              <div className='flex flex-row items-center h-[50px] '>
                  <div className='hidden mobile:inline'>
            <SocialIcon className='sm:hidden ' network='email' url='' href='#contact' bgColor='transparent' />
                  </div>
            <a  href='#contact' className='uppercase  mobile:hidden text-sm cursor-pointer hover'>Get In Touch</a>
          </div>
              
        </motion.div>
      </header>
  )
}