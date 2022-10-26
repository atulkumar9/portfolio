import React from 'react';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter';
import {HeroTexts} from '../constants';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import ProfilePicture from '../asstes/atool.jpg';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: HeroTexts,
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={ProfilePicture}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
          Software Engineer
        </h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span>
            {text}
          </span>
          <Cursor cursorColor='yellow'/>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='nav-button'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='nav-button'>Experience</button>
          </Link>
          <Link href='skills'>
            <button className='nav-button'>Skills</button>
          </Link>
          <Link href='projects'>
            <button className='nav-button'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}