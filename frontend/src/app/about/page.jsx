'use client';
import React, { useRef } from 'react';
import classes from "./about.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from("#img2", { duration: 1.5, y: 500, opacity: 0 });
      gsap.from("#btn2", { duration: 1.5, y: 500, opacity: 0 });

      gsap.from("#about", {
        duration: 1,
        y: 500,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      id='about'
      className='about flex flex-col lg:flex-row md:h-[90vh] justify-between items-center mt-5 md:mt-15 md:p-6 p-4 md:m-10 text-white'
    >
      <div
        id='img2'
        className='mb-6 lg:mb-0 flex justify-center lg:justify-start w-full lg:w-auto'
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <div className={classes.img}>
          <img
            className='h-[230px] w-[230px] md:h-[450px] md:w-[450px] rounded-full object-cover z-10'
            src="/ay.jpeg"
            alt="image"
          />
        </div>
      </div>

      <div
        id='btn2'
        style={{ textShadow: "white 0px 0px 8px" }}
        className='lg:w-[40%] w-full px-4 lg:px-0'
      >
        <h1 className='text-4xl font-semibold mb-8 text-center lg:text-left'>About Me</h1>
        <h2 className='text-xl font-semibold mt-3 text-center lg:text-left'>Full Stack Developer</h2>
        <p className='mt-4 text-justify'>
          I am a Full-Stack Developer (Fresher) skilled in React, Next.js, Node.js, MongoDB, and UI/UX design, with a strong foundation in HTML, CSS, and JavaScript. I have worked on major projects like TopFive and EduGuru, showcasing my ability to build real-world applications. My expertise includes API development and integrations, and I am continuously improving my backend skills. I focus on writing clean, maintainable, and efficient code while ensuring a great user experience. Always eager to learn, I stay updated with the latest technologies to grow as a professional developer.
        </p>

        <div className='h-[45px] flex justify-center lg:justify-start rounded-4xl items-center mt-10 w-[160px] bg-gradient-to-r from-[#4fbcd7] to-[#db4bb2d2] mx-auto lg:mx-0'>
          <Link
            href={"/"}
            className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl ml-1 py-1 px-4'
          >
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
