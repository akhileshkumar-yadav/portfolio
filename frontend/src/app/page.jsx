'use client'
import React from 'react'
import HeroSection from "./heroSection/page" 
import About from './about/page'
import MyServices from './myservices/page'
import Skill from './skill/page'
import LatestProject from "./latestProject/page"
import Contact  from './contact/page'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const page = () => {
  useGSAP(() => {
       
  })
  return (
      <>
      <HeroSection />
      <hr className='text-white' />
      <About />
      <hr className='text-white' />
      <MyServices />
      <hr className='text-white' />
      <Skill />
      <hr  className='text-white'/>
      <LatestProject />
      <hr  className='text-white'/>
      <Contact />
      </>
  )
}

export default page