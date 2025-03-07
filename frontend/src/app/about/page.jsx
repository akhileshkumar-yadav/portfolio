'use client'
import React from 'react'
import classes from "./about.module.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
const About = () => {
    useGSAP(() => {
        //    gsap.from("#home",{
        //         duration: 1.5,
        //         y: 30,
        //         opacity:0,
    
        //    })
        gsap.from("#img2",{ duration: 1.5, y: 500, opacity: 0})
        gsap.from("#btn2",{ duration: 1.5, y: 500,opacity:0})
      })

 
  return (
    <div className='flex h-[90vh] justify-between mt-15  md:m-10'>
        
        <div id='img2' className=' ml-15'>
        <div className={classes.img}>
          <img className='h-[450px] w-[450px] z-11 rounded-[50%] overflow-hidden ' src="\ay.jpeg" alt="image" />
        </div>
        </div>
        <div id='btn2' style={{ textShadow: "white 0px 0px 8px" }} className='text-white w-[40%] mr-30 mt-5'>
            <h1 className='text-4xl font-semibold mb-10 '>About Me</h1>
            <h2 className='text-xl font-semibold mt-3'>Full stack Developer</h2>
            <p className='mt-4'>I am a Full-Stack Developer (Fresher) skilled in React, Next.js, Node.js, MongoDB, and UI/UX design, with a strong foundation in HTML, CSS, and JavaScript. I have worked on major projects like TopFive and EduGuru, showcasing my ability to build real-world applications. My expertise includes API development and integrations, and I am continuously improving my backend skills. I focus on writing clean, maintainable, and efficient code while ensuring a great user experience. Always eager to learn, I stay updated with the latest technologies to grow as a professional developer.</p>
            <div  className='h-[45px] flex justify-center rounded-4xl items-center mt-10 w-[160px] bg-gradient-to-r from-[#4fbcd7] to-[#db4bb2d2]'>
            <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-4'>More About Me</Link>
          </div>
        </div>
    </div>
  )
}

export default About