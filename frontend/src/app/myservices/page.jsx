'use client'
import { useState } from "react";
import { Layout, Server, Layers } from "lucide-react";
import Link from "next/link";

const MyServices = () => {
    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    return (
        <div style={{ textShadow: "white 0px 0px 8px" }} className='text-white flex h-[100vh] flex-col items-center'>
            <h1 className='text-center mt-15 text-4xl font-semibold'>My Services</h1>
            <div className='flex flex-row justify-around items-center space-x-8 mt-25'>
                <div style={{
                    boxShadow: hover
                        ? "4px 8px 25px rgba(153, 50, 168, 2.0),4px 8px 25px rgba(46, 119, 191, 1.50), 3px 4px 20px rgba(212, 28, 232,0.8)"
                        : "0px 4px 23px rgba(17, 50, 237, 3.1)"
                }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-[370px] h-[270px]  rounded-lg flex flex-col justify-center items-start '>
                    <Layout size={30} className="text-white ml-[45%]" />
                    <h1 className="text-2xl text-center font-semibold mx-5 mt-3">Responsive Web Design</h1>
                    <p className="text-lg mx-5 mt-3">Responsive Web Design makes websites adapt smoothly to all screen sizes for a seamless user experience. </p>

                    <div id='btn' className='h-[40px] flex justify-center rounded-4xl items-center mt-3 ml-5 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
                        <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2'>Learn More</Link>
                    </div>
                </div>

                <div style={{
                    boxShadow: hover1
                        ? "4px 8px 25px rgba(153, 50, 168, 2.0),4px 8px 25px rgba(46, 119, 191, 1.50), 3px 4px 20px rgba(212, 28, 232,0.8)"
                        : "0px 4px 23px rgba(17, 50, 237, 3.1)"
                }} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className='w-[370px] h-[270px]  rounded-lg flex flex-col justify-center items-start  '>
                    <Server size={30} className="text-white ml-[45%]" />
                    <h1 className="text-2xl text-center font-semibold mx-5 mt-3"> Scalable Backend Solutions</h1>
                    <p className="text-lg mx-5 mt-3">Backend Development focuses on building secure and efficient server-side logic, databases </p>
                    <div id='btn' className='h-[40px] flex justify-center rounded-4xl items-center mt-3 ml-5 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
                        <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2'>Learn More</Link>
                    </div>
                </div>

                <div style={{
                    boxShadow: hover2
                        ? "4px 8px 25px rgba(153, 50, 168, 2.0),4px 8px 25px rgba(46, 119, 191, 1.50), 3px 4px 20px rgba(212, 28, 232,0.8)"
                        : "0px 4px 23px rgba(17, 50, 237, 3.1)"
                }} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='w-[370px] h-[270px]  rounded-lg flex flex-col justify-center items-start  '>
                    <Layers size={30} className="text-white ml-[45%]" />
                    <h1 className="text-2xl text-center font-semibold mx-5 mt-3"> Complete Web Development</h1>
                    <p className="text-lg mx-5 mt-3"> I build complete web applications from frontend to backend using React, Next.js, Node.js, and MongoDB </p>
                    <div id='btn' className='h-[40px] flex justify-center rounded-4xl items-center mt-3 ml-5 w-[110px] bg-gradient-to-r from-[#72d4ec] to-[#f25fc8d2]'>
                        <Link href={"/"} className='text-md font-semibold bg-[#242d5c] hover:text-blue-500 rounded-4xl py-1 px-2'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices