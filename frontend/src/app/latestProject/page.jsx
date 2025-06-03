"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const LatestProject = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="latest-project"
      className="container mt-10 text-white px-4"
    >
      <h1
        style={{ textShadow: "white 0px 0px 8px" }}
        className="text-4xl font-semibold text-center mt-5 underline mb-10"
      >
        Latest Project
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:p-6 pt-4">
        {/* FIRST CARD */}
        <div
          className="project-card w-full md:w-[330px] lg:w-[430px] h-[270px] lg:h-[320px] rounded-lg flex flex-col justify-center items-center relative overflow-hidden shadow-lg"
          style={{ boxShadow: "0px 4px 23px rgba(17, 50, 237, 0.3)" }}
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/mini.png"
            alt="Mini Project"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{ textShadow: "blue 1px 2px 6px" }}
          >
            <h1 className="text-2xl md:text-3xl font-semibold">Mini Project</h1>
            <h2 className="text-xl md:text-2xl italic font-semibold text-center px-2">
              Developer RoadMap Builder
            </h2>
            <div
              className="h-[40px] flex justify-center rounded-4xl items-center mt-3 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]"
            >
              <Link
                href="/"
                className="text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* SECOND CARD */}
        <div
          className="project-card w-full md:w-[330px] lg:w-[430px] h-[270px] lg:h-[320px] rounded-lg flex md:mb-1 mb-4 flex-col justify-center items-center relative overflow-hidden shadow-lg"
          style={{ boxShadow: "0px 4px 23px rgba(17, 50, 237, 0.3)" }}
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/majorProject.png"
            alt="Major Project"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{ textShadow: "blue 1px 2px 6px" }}
          >
            <h1 className="text-2xl md:text-3xl font-semibold">Major Project</h1>
            <h2 className="text-xl md:text-2xl italic font-semibold text-center px-2">
              Top-Five-EduGuru
            </h2>
            <div
              className="h-[40px] flex justify-center rounded-4xl items-center mt-3 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]"
            >
              <Link
                href="/"
                className="text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2 "
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
