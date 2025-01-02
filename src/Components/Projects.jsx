import React from 'react'
import { SiKaggle, SiCodechef, SiHackerrank, SiGithub, SiLeetcode } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

const Projects = () => {
    return (
        <div 
        className='mt-36 relative px-20 ' id='projects'>
            <div
            data-aos="zoom-in" 
            className='w-full text-center'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    Projects</div>
                <div
                    className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                    Projects</div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14'>

                <div
                data-aos="flip-right" 
                className='p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                    <h1 className='text-3xl text-center'>PrepMate: AI Interviewer</h1>
                    <p className='text-sm text-gray-700 text-center font-thin'>
                        An AI-driven platform offering virtual interviews in a video meeting interface. It provides instant feedback, highlights areas for improvement, and boosts candidate confidence.
                    </p>
                </div>
                <div
                data-aos="flip-up"
                 className='relative p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>

                <a href='https://tejas07.pythonanywhere.com/TravelMate/' className="absolute text-black  hover:shadow-xl p-3 rounded-full -top-2 right-0" target='_blank'>
                <FaLink size={40} /></a>

                    <h1 className='text-3xl text-center'>TravelMate: Tourist Safety</h1>
                    <p className='text-sm text-gray-700 text-center font-thin'>
                        A web-based platform ensuring tourist safety with crime analysis, safety reports, and interactive maps. Key features include SOS calls, incident reporting, and financial fraud evaluation.
                    </p>
                </div>
                <div 
                data-aos="flip-left"
                className='relative p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                    <h1 className='text-3xl text-center'>ChatMate: Chatting App</h1>
                    <p className='text-sm text-gray-700 text-center font-thin'>
                        A real-time chatting app designed for seamless communication with user-friendly interfaces, secure messaging, and integrated multimedia sharing.
                    </p>
                </div>
                <div
                data-aos="flip-left" 
                className='relative p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                <a href='https://github.com/tejas-130704/whatsapp-analyser' className="text-black  hover:shadow-xl p-3 rounded-full absolute top-0 right-0" target='_blank'>
                        <SiGithub size={48} />
                    </a>
                    <h1 className='text-3xl text-center'>WhatsApp ChatAnalyser</h1>
                    <p className='text-sm text-gray-700 text-center font-thin'>
                        A tool for analyzing WhatsApp chat data, providing insights into conversation trends, most active participants, and sentiment analysis.
                    </p>
                </div>



            </div>

        </div>
    )
}

export default Projects