import React from 'react'
import { SiKaggle, SiCodechef, SiHackerrank, SiGithub, SiLeetcode } from "react-icons/si";
import nptel from '../assets/images/nptel.png';
import edunet from '../assets/images/Edunet.png';
import cn from '../assets/images/cn.webp';
import { University } from './University';
const Education = () => {
    return (
        <div className='mt-36 relative md:px-20 mb-16' id='education'>
            <div
            data-aos="zoom-in"
             className='w-full text-center'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    Education</div>
                <div
                    className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                    Education</div>
            </div>
            <div className='w-full mt-10'>
                <h1 
                data-aos="fade-right"
                className='text-center text-3xl'>Basic Achievement and Certificates</h1>
                <div className="flex space-x-6 md:flex-row flex-col justify-center items-center py-6 space-y-5">
                    {/* Kaggle */}
                    <a 
                    data-aos="flip-left"
                    href="https://www.kaggle.com/tjdevil07" className="text-[#20BEFF] hover:shadow-xl p-3 rounded-full">
                        <SiKaggle size={48} />
                    </a>

                    {/* CodeChef */}
                    <a 
                    data-aos="flip-left"
                    href="https://www.codechef.com/users/tejas_1307" className="text-[#5B4638]  hover:shadow-xl p-3 rounded-full">
                        <SiCodechef size={48} />
                    </a>

                    {/* HackerRank */}
                    <a
                    data-aos="flip-up"
                    href="https://www.hackerrank.com/profile/tejasjadhav13071" className="text-[#2EC866]  hover:shadow-xl p-3 rounded-full">
                        <SiHackerrank size={48} />
                    </a>

                    {/* LeetCode */}
                    <a 
                    data-aos="flip-right"
                    href="https://leetcode.com/u/Tejas_J_1307/" className="text-[#FFA116]  hover:shadow-xl p-3 rounded-full">
                        <SiLeetcode size={48} />
                    </a>

                    {/* GitHub */}
                    <a 
                    data-aos="flip-right"
                    href="https://github.com/tejas-130704" className="text-black  hover:shadow-xl p-3 rounded-full">
                        <SiGithub size={48} />
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14 mb-20">
                {/* NPTEL Certification Card */}
                <div 
                data-aos="fade-right"
                className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full  md:mx-0 mx-5">
                    {/* NPTEL Certification Image with x-padding */}
                    <div className='py-4 px-6 h-48 items-center justify-center'>
                        <img
                            className="w-full h-auto object-fill"
                            src={nptel}
                            alt="NPTEL Logo"
                        />
                    </div>
                    <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                        {/* Certification Title */}
                        <div className="font-bold text-xl mb-2 font-sans">
                            NPTEL Certification: Introduction to Programming in C
                        </div>
                        {/* Certification Details */}
                        <p className="text-sm text-gray-700 text-center font-thin font-sans">
                            Successfully completed the course "Introduction to Programming in C" conducted by IIT Kanpur with an <strong>Elite</strong> certification.
                        </p>
                        <a href="https://drive.google.com/file/d/1s5klCNG0PmPRr9WhoKhuhJE0GugmLgeN/view?usp=sharing" target='_blank' rel='noreferrer'>
                            <button className="bg-[#3795BD] text-white py-2 px-4 rounded-lg hover:bg-[#256682] mt-4 mb-2">Show Certificate</button>
                        </a>
                    </div>
                </div>

                {/* Edunet Foundation Certificate Card */}
                <div 
                data-aos="fade-up"
                className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full md:mx-0 mx-5">
                    {/* Edunet Foundation Certificate Image with x-padding */}
                    <div className='py-4 px-6 h-48'>
                        <img
                            className="w-full object-fill"
                            src={edunet}
                            alt="Edunet Logo"
                        />
                    </div>
                    <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                        {/* Certification Title */}
                        <div className="font-bold text-xl mb-2 font-sans">
                            Edunet Foundation: Data Analyst Internship
                        </div>
                        {/* Certification Details */}
                        <p className="text-sm text-gray-700 text-center font-thin font-sans">
                            Successfully completed a <strong>4-week internship</strong> in Data Analysis with the Edunet Foundation.
                        </p>
                        <a href="https://drive.google.com/file/d/1s6uCUkfMsr5awGHR15eb9S97Tbibu24j/view?usp=sharing" target='_blank' rel='noreferrer'>
                            <button className="bg-[#3795BD] text-white py-2 px-4 rounded-lg hover:bg-[#256682] mt-4 mb-2">Show Certificate</button>
                        </a>
                    </div>
                </div>

                {/* Coding Ninjas Java Certificate Card */}
                <div 
                data-aos="fade-left"
                className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full md:mx-0 mx-5">
                    {/* Coding Ninjas Certificate Image with x-padding */}
                    <div className='py-4 px-6 h-48'>
                        <img
                            className="w-full object-fill"
                            src={cn} // Replace with actual Coding Ninjas logo
                            alt="Coding Ninjas Logo"
                        />
                    </div>
                    <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                        {/* Certification Title */}
                        <div className="font-bold text-xl mb-2 font-sans">
                            Coding Ninjas: Basics of Java
                        </div>
                        {/* Certification Details */}
                        <p className="text-sm text-gray-700 text-center font-thin font-sans">
                            Successfully completed the <strong>Basics of Java</strong> certification course by Coding Ninjas.
                        </p>
                        <a href="https://drive.google.com/file/d/1sAOxJyskME8GZ5pLL1ULuj8ifx4go9du/view?usp=sharing" target='_blank' rel='noreferrer'>
                            <button className="bg-[#3795BD] text-white py-2 px-4 rounded-lg hover:bg-[#256682] mt-4 mb-2">Show Certificate</button>
                        </a>
                    </div>
                </div>
            </div>
            <University />
        </div>

    )
    //
}

export default Education