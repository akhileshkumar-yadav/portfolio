'use client'
import React from 'react'
import HeroSection from "./heroSection/page" 
import About from './about/page'
import MyServices from './myservices/page'
import Skill from './skill/page'

const page = () => {
  return (
      <>
      <hr className='text-white' />
      <HeroSection />
      <hr className='text-white' />
      <About />
      <hr className='text-white' />
      <MyServices />
      <hr className='text-white' />
      <Skill />
      <hr  className='text-white'/>
      </>
  )
}

export default page