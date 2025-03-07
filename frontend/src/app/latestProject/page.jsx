'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LatestProject = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div className="container h-[100vh] mt-15 text-white">
      <h1 style={{ textShadow: "white 0px 0px 8px" }} className="text-4xl font-semibold text-center mt-5 underline mb-10 flex-wrap ">Latest Project</h1>
      <div className="flex justify-center items-center  space-x-11 p-6">

        {/* ---- FIRST CARD ---- */}
        <div
          style={{
            boxShadow: hover1
              ? "4px 8px 25px rgba(153, 50, 168, 2.0), 4px 8px 25px rgba(46, 119, 191, 1.50), 3px 4px 20px rgba(212, 28, 232,0.8)"
              : "0px 4px 23px rgba(17, 50, 237, 3.1)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          className="w-[430px] h-[320px] rounded-lg flex flex-col justify-center items-center  relative overflow-hidden"
        >
          <img className="w-[430px] h-[320px] rounded-lg" src="\Mini.png" alt="" />
          {hover1 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: " rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(2px)", textShadow: "blue 1px 2px 6px"
              }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center "
            >
              <h1 className="text-4xl font-semibold text-purple-600">Mini Project</h1>
              <h2 className="text-2xl italic font-semibold text-purple-600">Developer RoadMap Builder</h2>
              <div id='btn' className='h-[40px] flex justify-center rounded-4xl items-center mt-3 ml-5 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
                <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2'>Learn more</Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* ---- SECOND CARD ---- */}
        <div
          style={{
            boxShadow: hover2
              ? "4px 8px 25px rgba(153, 50, 168, 2.0), 4px 8px 25px rgba(46, 119, 191, 1.50), 3px 4px 20px rgba(212, 28, 232,0.8)"
              : "0px 4px 23px rgba(17, 50, 237, 3.1)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          className="w-[430px] h-[320px] rounded-lg flex flex-col justify-center items-center  relative overflow-hidden"
        >   <img className="w-[430px] h-[320px] rounded-lg" src="\majorProject.png" alt="image" />
          {hover2 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center "
              style={{
                background: " rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(1px)", textShadow: "blue 1px 2px 6px"
              }}
            >
              <h1 className="text-4xl font-semibold text-purple-600">Major Project</h1>
              <h2 className="text-2xl italic font-semibold text-purple-600">Top-Five-EduGuru</h2>
              <div id='btn' className='h-[40px] flex justify-center rounded-4xl items-center mt-3 ml-5 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
                <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2'>Learn more</Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div >
  );
};

export default LatestProject;
