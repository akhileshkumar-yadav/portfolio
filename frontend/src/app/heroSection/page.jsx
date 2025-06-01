'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Linkedin, Github, Instagram } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import classes from "./hero.module.css";

const HeroSection = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const time = gsap.timeline();
      time.from("#a", { duration: 0.5, y: -50, opacity: 0 })
          .from("#b", { duration: 0.5, x: 50, opacity: 0 })
          .from("#c", { duration: 0.5, x: -50, opacity: 0 })
          .from("#d", { duration: 0.5, y: -20, opacity: 0 })
          .from("#e", { duration: 0.5, x: -40, opacity: 0 })
          .from("#f", { duration: 0.5, y: 30, opacity: 0 });

      gsap.from("#img1", { duration: 1.5, x: 500, opacity: 0 });

      const ti = gsap.timeline();
      ti.from("#Linkedin", { duration: 1, x: -50, opacity: 0 })
        .from("#Github", { duration: 1, y: 50, opacity: 0 })
        .from("#Instagram", { duration: 1, x: 50, opacity: 0 })
        .from("#btn", { duration: 1, x: -50, opacity: 0 });
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div ref={heroRef} className="lg:flex items-start justify-start md:h-screen text-white p-6 md:p-12">
      <div className="md:text-left md:max-w-2xl md:ml-20">
        <div className='lg:w-[70%] w-full pt-5 pb-10'>
          <h2 className="md:text-2xl text-lg font-semibold" id="a">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-6xl font-semibold mt-3" id="b">Akhilesh Kumar</h1>
          <h2 className="md:text-2xl text-lg font-semibold inline-block mt-3" id="c">And I'm a</h2>
          <h1 className="md:text-3xl text-xl font-bold inline-block mt-3 px-3" id="d">|</h1>
          <h1 className="font-semibold text-fuchsia-500 text-xl md:text-3xl mt-3 inline-block" id="e">
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
              repeat={Infinity}
            />
          </h1>
          <p className="mt-3 text-md font-semibold" id="f">
            I’m a MERN Full Stack Developer, skilled in React, Node.js, Express, and MongoDB, building scalable and dynamic web applications.
          </p>
          <div className="flex space-x-5 mt-4 justify-start">
            <div id="Linkedin" className={classes.Linkedin}>
              <Linkedin className="hover:text-blue-500 z-10 transition-all duration-300 w-6 md:w-8 h-6 md:h-8" />
            </div>
            <div id="Github" className={classes.Linkedin}>
              <Github className="hover:text-blue-500 z-10 transition-all duration-300 w-6 md:w-8 h-6 md:h-8" />
            </div>
            <div id="Instagram" className={classes.Linkedin}>
              <Instagram className="hover:text-blue-500 transition-all duration-300 w-6 md:w-8 h-6 md:h-8 z-10" />
            </div>
          </div>
          <div id="btn" className="h-[45px] flex justify-center rounded-4xl items-center mt-10 w-[160px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]">
            <button className="text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-2xl py-1 px-4">More About Me</button>
          </div>
        </div>
      </div>
      <div id="img1" className="mb-8 md:mb-0 md:ml-12 flex justify-center">
        <div className={classes.img}>
          <img className="h-[230px] z-11 w-[230px] md:h-[450px] md:w-[450px] rounded-full overflow-hidden" src="/ay.jpeg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
