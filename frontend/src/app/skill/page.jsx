'use client'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs, faEnvira,faNodeJs,faReact } from "@fortawesome/free-brands-svg-icons";
import classes from "./skill.module.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skill = () => {
  useGSAP(() => {
    //    gsap.from("#home",{
    //         duration: 1.5,
    //         y: 30,
    //         opacity:0,

    //    })

    let time = gsap.timeline();
    time.from("#skill", { duration: 0.5, duration:0.8, y: 100, opacity: 0 })

    gsap.from("#tech",{ duration: 0.3,duration:0.8, y: 500, opacity: 0})
    gsap.from("#pro",{ duration: 0.3,duration:0.8, y: 500, opacity: 0})


  })
  return (
    <div className='text-white h-[100vh]' style={{ textShadow: "#e8da13 2px 4px 13px" }}>
      <div id='skill' className='flex justify-center w-full text-4xl underline mt-10 font-semibold'><h1 className='   inline-block'style={{ textShadow: "#e8da13 2px 4px 13px" }}>My </h1> &nbsp; <h2 className='inline-block' style={{ textShadow: "#e813af 2px 4px 13px" }}> Skills</h2>
      </div>
      <div className='flex justify-between items-start space-x-5 mx-10 '>
        <div id='tech' className='min-w-[40%] ml-20'>

          <h1 className='text-3xl underline font-semibold mt-10 mb-6 ml-5'>Technical Skills</h1>
          <div className={classes.technicalbars}>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start w-[100%]'>
                <FontAwesomeIcon className='h-[30px]' icon={faHtml5} size="2x" style={{ color: "#E34F26" }} />
                <div className={classes.info}>
                  <span>HTML</span>
                </div>
              
              <div className={`${classes.progresslinehtml} ${classes.html}`}>
                <span></span>
              </div>
              </div>
            </div>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start mt-3 w-[100%]'>
                <FontAwesomeIcon className='h-[30px]' icon={faCss3} size="2x" style={{ color: "blue" }} />
                <div className={classes.info}>
                  <span>CSS</span>
                </div>
              
              <div className={`${classes.progresslinehtml} ${classes.css}`}>
                <span></span>
              </div>
              </div>
            </div>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start mt-3 w-[100%]'>
                <FontAwesomeIcon className='h-[30px]' icon={faJs} size="2x" style={{ color: "yellow", backgroundColor: "black", textAlign: "center" }} />
                <div className={classes.info}>
                  <span>JS</span>
                </div>
              
              <div className={`${classes.progresslinehtml} ${classes.js}`}>
                <span></span>
              </div>
              </div>
            </div>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start mt-4 w-[100%]'>
              <FontAwesomeIcon className='h-[30px]' icon={faReact} size='2x' color="#61DAFB" />

                <div className={classes.info}>
                  <span>React.js</span>
                </div>
              
              <div className={`${classes.progresslinehtml} ${classes.nextjs}`}>
                <span></span>
              </div>
              </div>
            </div>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start mt-4 w-[100%]'>
              <FontAwesomeIcon className='h-[30px]' icon={faNodeJs} size='2x' color="#83CD29" />

                <div className={classes.info}>
                  <span>Node.js</span>
                </div>
             
              <div className={`${classes.progresslinehtml} ${classes.expressjs}`}>
                <span></span>
              </div>
              </div>
            </div>
            <div className={classes.bar}>
              <div className='flex flex-col justify-start items-start mt-4 w-[100%]'>
                <FontAwesomeIcon className='h-[30px]' icon={faEnvira} size='2x' color="green" />
                <div className={classes.info}>
                  <span>MongoDB</span>
                </div>
              
              <div className={`${classes.progresslinehtml} ${classes.mongoDB}`}>
                <span></span>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div id='pro' className='w-[60%] ml-[10%]'>
          <h1  className='text-3xl font-semibold underline mt-10 ml-10 mb-6'>Professional Skill</h1>
          <div className={classes.radialbars}>
            <div className={classes.radialbar}>
             <svg x="0px" y="0px" viewBox='0 0 200 200'>
              <circle className={classes.progressbar} cx="100" cy="100" r="80"></circle>
              <circle className={`${classes.path} ${classes.path1} `}cx="100" cy="100" r="80"></circle>
             </svg>
            <div className={classes.persentage}>
              90%
            </div>
            <div className={classes.text}>creativity</div>
          </div>
          <div className={classes.radialbar}>
             <svg x="0px" y="0px" viewBox='0 0 200 200'>
              <circle className={classes.progressbar} cx="100" cy="100" r="80"></circle>
              <circle className={`${classes.path} ${classes.path2} `}cx="100" cy="100" r="80"></circle>
             </svg>
            <div className={classes.persentage}>
              80%
            </div>
            <div className={classes.text}>Communication</div>
          </div>
          <div className={classes.radialbar}>
             <svg x="0px" y="0px" viewBox='0 0 200 200'>
              <circle className={classes.progressbar} cx="100" cy="100" r="80"></circle>
              <circle className={`${classes.path} ${classes.path3} `}cx="100" cy="100" r="80"></circle>
             </svg>
            <div className={classes.persentage}>
              75%
            </div>
            <div className={classes.text}>Problam Solving</div>
          </div>
          <div className={classes.radialbar}>
             <svg x="0px" y="0px" viewBox='0 0 200 200'>
              <circle className={classes.progressbar} cx="100" cy="100" r="80"></circle>
              <circle className={`${classes.path} ${classes.path4} `}cx="100" cy="100" r="80"></circle>
             </svg>
            <div className={classes.persentage}>
              85%
            </div>
            <div className={classes.text}>Team Work</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill