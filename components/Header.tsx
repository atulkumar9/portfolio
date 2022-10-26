import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='sticky top-0 flex items-start justify-between mx-auto max-w-7xl'>
      <motion.div 
        initial={{x: -400, opacity: 0, scale: 0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}} 
        className='flex flex-row items-center'
        transition={{
          duration: 1,
          type: 'spring'
        }}>
        <SocialIcon 
          url='https://www.linkedin.com/in/atul-kumar9/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://twitter.com/Rockofall'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://github.com/atulkumar9'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div 
        initial={{x: 400, opacity: 0, scale: 0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}} 
        className='flex flex-row items-center justify-center'
        transition={{
          duration: 1,
          type: 'spring'
        }}>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-gray-50'>Get In Touch</p>
      </motion.div>
    </div>
  )
}