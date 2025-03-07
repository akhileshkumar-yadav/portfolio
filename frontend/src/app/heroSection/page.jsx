"use client";
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Linkedin, Github, Instagram } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import classes from "./hero.module.css"
const HeroSection = () => {
  useGSAP(() => {
    //    gsap.from("#home",{
    //         duration: 1.5,
    //         y: 30,
    //         opacity:0,

    //    })

    let time = gsap.timeline();
    time.from("#a", { duration: 0.5, y: -50, opacity: 0 })
    time.from("#b", { duration: 0.5, x: 50, opacity: 0 })
    time.from("#c", { duration: 0.5, x: -50, opacity: 0 })
    time.from("#d", { duration: 0.5, y: -20, opacity: 0 })
    time.from("#e", { duration: 0.5, x: -40, opacity: 0 })
    time.from("#f", { duration: 0.5, y: 30, opacity: 0 })

    gsap.from("#img1",{ duration: 1.5, x: 500, opacity: 0})

    let ti = gsap.timeline();
    ti.from("#Linkedin", { duration: 1, x: -50, opacity: 0 })
    ti.from("#Github", { duration: 1, y: 50, opacity: 0 })
    ti.from("#Instagram", { duration: 1, x: 50, opacity: 0 })
    ti.from("#btn", { duration: 1, x: -50, opacity: 0 })


  })
  return (
    <div className=" flex  h-[100vh]  justify-center text-white relative">
      <div className='flex mt-15 h-[100%] justify-around'>
        <div className={classes.hero}>
          <h2 style={{ textShadow: "white 0px 0px 8px" }} className='hero text-2xl font-semibold' id='a'>Hello , It's Me</h2>
          <h1 style={{ textShadow: "white 0px 0px 8px" }} className='hero  text-6xl font-semibold mt-3 ' id='b'>Akhilesh Kumar</h1>
          <h2 style={{ textShadow: "white 0px 0px 8px" }} className='text-2xl font-semibold inline-block mt-3 pr-c' id='c'>And I'm a</h2>
          <h1 style={{ textShadow: "white 0px 0px 8px" }} className='text-3xl font-bold inline-block mt-3 px-3' id='d'>|</h1>
          {/* text animation add */}
          <h1 style={{ textShadow: "white 0px 0px 15px" }} className='font-semibold text-fuchsia-500 text-3xl mt-3 inline-block ' id='e'>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                'MERN FULL STACK DEVELOPER',
                1000,
                'FRONTEND',
                1000,
                'BACKEND',
                1000,
                
              ]}
              speed={50}
              style={{ fontSize: '0.7em' }}
              repeat={Infinity}

            />
            {/* end text animation */}
          </h1>
          <p style={{ textShadow: "white 0px 0px 8px" }} className='mt-3 text-md font-semibold' id='f'>I’m a MERN Full Stack Developer, skilled in React, Node.js, Express, and MongoDB, building scalable and dynamic web applications.  </p>
          <div className=' flex  space-x-9 mt-4'>
            <div className={classes.Linkedin} id='Linkedin'><Linkedin className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px] " /></div>
            <div className={classes.Linkedin} id='Github'><Github className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px]" /></div>
            <div className={classes.Linkedin} id='Instagram'><Instagram className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px]" /></div>

          </div>
          <div id='btn' className='h-[45px] flex justify-center rounded-4xl items-center mt-10 w-[160px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
            <button className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-4'>More About Me</button>
          </div>
        </div>
        <div id='img1'>
        <div className={classes.img}>
          <img className='h-[450px] w-[450px] z-11 rounded-[50%] overflow-hidden ' src="\ay.jpeg" alt="image" />
        </div>
        </div>
      </div>
    </div>



  )
}

export default HeroSection


