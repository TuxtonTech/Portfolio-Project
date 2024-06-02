import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({ }: Props) {
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
            duration: 1
        }}>
            <div className='flex flex-row items-center'>
              <SocialIcon className='hover' url='https://github.com/TuxtonTech' bgColor='transparent' />
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
              duration: 1
          }} onAnimationComplete={onAnimateComplete}>
            <div className='flex flex-row items-center '>
            <SocialIcon className='hover' network='email' url='' bgColor='transparent' />
            <p className='uppercase hidden sm:inline-flex text-sm cursor-pointer hover'>Get In Touch</p>
          </div>
              
        </motion.div>
      </header>
  )
}