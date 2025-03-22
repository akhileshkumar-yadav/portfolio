'use client'
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaUser, FaRegEdit, FaEnvelopeOpenText } from "react-icons/fa";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";
import classess from "./contact.module.css"
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('📤 Sending Data:', formData);
    
        try {
            const response = await fetch('http://192.168.43.206:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
    
            const result = await response.json();
            console.log('📥 Server Response:', result);
    
            if (response.ok) {
                alert('✅ Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
            } else {
                alert(`❌ Error: ${result.message || 'Failed to send message'}`);
            }
        } catch (error) {
            console.error('❌ Network Error:', error);
            alert('❌ Network error or server issue. Please try again.');
        }
    };
    
    
    return (
        <div style={{ textShadow: "white 0px 0px 8px" }} className='flex w-full h-[90vh] text-white justify-start '>
            <div className='w-[40%] md:ml-[10%] mt-15'>
                <div className='flex text-6xl mb-5 font-semibold '>
                    <h1>Contact</h1>
                    <h1 className='text-cyan-500 ml-3'>Me</h1>
                </div>
                <h1 className='mb-3 text-lg font-semibold'>Let's work Together</h1>
                <p className='mb-6 text-md font-medium italic'>Hey there! I’m a passionate and motivated fresher eager to learn and grow in the field of [Your Skill/Field, e.g., Web Development, UI/UX Design, etc.]. If you have any project ideas, collaboration opportunities, or just want to connect, feel free to reach out. I’d love to hear from you!</p>
                <div className='mb-5 flex items-center'>
                    <FaEnvelope className=" text-blue-500" />
                    <h1 className='ml-2 hover:text-blue-600'>akhileshyadav90863@gmail.com</h1>
                </div>
                <div className='flex items-center'>
                    <FaPhone className=" text-green-500" />
                    <h1 className='ml-2 hover:text-green-600'>
                        +91 8173970887
                    </h1>
                </div>
                <div className='flex space-x-5 mt-15'>
                    <div className={classess.Linkedin} id='Linkedin'><Linkedin className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px] " /></div>
                    <div className={classess.Linkedin} id='Github'><Github className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px]" /></div>
                    <div className={classess.Linkedin} id='Instagram'><Instagram className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px]" /></div>
                    <div className={classess.Linkedin} id='Instagram'><Facebook className="hover:text-blue-500 transition-all duration-300 z-10  p-1  w-[30px] h-[30px]" /></div>
                </div>
            </div>
            <div className='relative w-[30%] mt-20 ml-26'>
                <div className={classess.div1}>
                    <form onSubmit={handleSubmit} className='z-10  absolute top-2 left-5 w-[90%]' action="">
                        <div className='flex justify-center items-center'>
                            <FaEnvelopeOpenText className="text-blue-600 mt-3 " size={40} />
                        </div>
                        <div className='flex items-center border-b w-[90%] ml-5 mt-5 '>
                            <FaUser className="text-red-500 " size={15} />
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter Your Name'
                                className='block ml-2 outline-none'
                                required />
                        </div>
                        <div className='flex items-center border-b w-[90%] ml-5 mt-5  '>
                            <FaEnvelope className=" text-blue-500  " size={15} />
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter Your Email'
                                className=' block ml-2 outline-none'
                                required />
                        </div>
                        <div className='flex items-center border-b w-[90%] ml-5 mt-5 '>
                            <FaPhone className=" text-green-500  mr-1" size={15} />
                            <h1 className='text-gray-500 hover:text-white '>+91</h1>
                            <input
                                type="tel"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Enter Phone No.'
                                pattern="[0-9]{10}"
                                maxLength="10"
                                className='block ml-2 outline-none' />
                        </div>
                        <div className='flex items-center border-b w-[90%] ml-5 mt-5  '>
                            <FaRegEdit className=" text-green-500  " size={15} />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder='Enter Your Subject'
                                className='block ml-2 outline-none' />
                        </div>
                        <div className='flex items-center border-b w-[90%] ml-5 mt-5  '>
                            {/* <FaRegEdit className=" text-green-500  " size={15} /> */}
                            <textarea
                                className='w-[100%] outline-none'
                                maxLength={'5'}
                                rows={3}
                                name="message" id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Enter Your Message'
                                required >

                            </textarea>
                        </div>
                        <button type='submit' className='w-[90%] ml-5 mt-5 p-1 rounded-2xl bg-orange-400'> Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact