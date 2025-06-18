import React from 'react'
import { SiKaggle, SiCodechef, SiHackerrank, SiGithub, SiLeetcode } from "react-icons/si";
import nptel from '../assets/images/nptel.png';
import edunet from '../assets/images/Edunet.png';
import cn from '../assets/images/cn.webp';
import aihack from '../assets/images/AI_Hackathon.jpg'
import chess from '../assets/images/Chess_Compitition.jpg'
import nanded from '../assets/images/Nanded_Hackathon.jpg'
import tech from '../assets/images/Best_Tech.jpg'
import { University } from './University';

const certificateData = [
    {
        image: nptel,
        alt: "NPTEL Logo",
        title: "NPTEL Certification: Introduction to Programming in C",
        link: "https://drive.google.com/file/d/1s5klCNG0PmPRr9WhoKhuhJE0GugmLgeN/view?usp=sharing",
        animation: "fade-right"
    },
    {
        image: aihack,
        alt: "Hakathon",
        title: "Techno Spark {AI Hackathon} - First Runner Up",
        link: "https://drive.google.com/file/d/1nQ-Oa2ivdjl-O31NOIdKOqtz3xZcYeu6/view?usp=drive_link",
        animation: "fade-right"
    },
    {
        image: chess,
        alt: "Chess",
        title: "Techno Spark {Grand Chess Tournament} - First Runner Up",
        link: "https://drive.google.com/file/d/18y5VBEEwFC4KUtnVgSGd3RHZq3JUqnbQ/view?usp=sharing",
        animation: "fade-right"
    },
    {
        image: nanded,
        alt: "Nanded",
        title: "National-level Hackathon Competition - Winners",
        link: "https://drive.google.com/file/d/1hrcO5waD26nxkTEZYOSVR6Lta_O14o58/view?usp=sharing",
        animation: "fade-right"
    },
     {
        image: tech,
        alt: "Technical Lead",
        title: "Awarded with Best Technical Lead",
        link: "https://drive.google.com/file/d/1HFqTtRqa5tLrmrDRv-kpP81babAoby93/view?usp=sharing",
        animation: "fade-right"
    },
    {
        image: edunet,
        alt: "Edunet Logo",
        title: "Edunet Foundation: Data Analyst Internship",
        link: "https://drive.google.com/file/d/1s6uCUkfMsr5awGHR15eb9S97Tbibu24j/view?usp=sharing",
        animation: "fade-up"
    },
    // {
    //     image: cn,
    //     alt: "Coding Ninjas Logo",
    //     title: "Coding Ninjas: Basics of Java",
    //     link: "https://drive.google.com/file/d/1sAOxJyskME8GZ5pLL1ULuj8ifx4go9du/view?usp=sharing",
    //     animation: "fade-left"
    // }
];

const socialLinks = [
    { icon: <SiKaggle size={48} />, color: "text-[#20BEFF]", href: "https://www.kaggle.com/tjdevil07", animation: "flip-left" },
    { icon: <SiCodechef size={48} />, color: "text-[#5B4638]", href: "https://www.codechef.com/users/tejas_1307", animation: "flip-left" },
    { icon: <SiHackerrank size={48} />, color: "text-[#2EC866]", href: "https://www.hackerrank.com/profile/tejasjadhav13071", animation: "flip-up" },
    { icon: <SiLeetcode size={48} />, color: "text-[#FFA116]", href: "https://leetcode.com/u/Tejas_J_1307/", animation: "flip-right" },
    { icon: <SiGithub size={48} />, color: "text-black", href: "https://github.com/tejas-130704", animation: "flip-right" },
];

const Education = () => {
    return (
        <div className='mt-36 relative md:px-20 mb-16' id='education'>
            <div data-aos="zoom-in" className='w-full text-center'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    Education
                </div>
                <div className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                    Education
                </div>
            </div>

            <div className='w-full mt-10'>
                <h1 data-aos="fade-right" className='text-center text-3xl'>
                    Basic Achievement and Certificates
                </h1>
                <div className="flex space-x-6 md:flex-row flex-col justify-center items-center py-6 space-y-5">
                    {socialLinks.map(({ icon, color, href, animation }, idx) => (
                        <a
                            key={idx}
                            data-aos={animation}
                            href={href}
                            className={`${color} hover:shadow-xl p-3 rounded-full`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14 mb-20">
                {certificateData.map((cert, idx) => (
                    <div
                        key={idx}
                        data-aos={cert.animation}
                        className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full md:mx-0 mx-5"
                    >
                        <div className='py-4 px-6 h-48 flex items-center justify-center'>
                            <img className="w-full h-auto object-fill" src={cert.image} alt={cert.alt} />
                        </div>
                        <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                            <div className="font-bold text-xl mb-2 font-sans">
                                {cert.title}
                            </div>
                            <a href={cert.link} target='_blank' rel='noreferrer'>
                                <button className="bg-[#3795BD] text-white py-2 px-4 rounded-lg hover:bg-[#256682] mt-4 mb-2">
                                    Show Certificate
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <University />
        </div>
    )
}

export default Education;
