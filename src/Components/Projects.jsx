import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

const projects = [
    {
        title: "BotBuddies: Hackathon Website",
        description: "BotBuddies is a community-driven platform where you can stay updated on the latest hackathons organized by the BotBuddies community.",
        aos: "flip-up",
        link: "https://hackethon-liard.vercel.app/",
        icon: <FaLink size={30} />,
    },
    {
        title: "PrepMate: AI Interviewer",
        description: "An AI-driven platform offering virtual interviews in a video meeting interface. It provides instant feedback, highlights areas for improvement, and boosts candidate confidence.",
        aos: "flip-right",
    },
    {
        title: "TravelMate: Tourist Safety",
        description: "A web-based platform ensuring tourist safety with crime analysis, safety reports, and interactive maps. Key features include SOS calls, incident reporting, and financial fraud evaluation.",
        aos: "flip-up",
    },
    {
        title: "ChatMate: Chatting App",
        description: "A real-time chatting app designed for seamless communication with user-friendly interfaces, secure messaging, and integrated multimedia sharing.",
        aos: "flip-left",
    },
    {
        title: "WhatsApp ChatAnalyser",
        description: "A tool for analyzing WhatsApp chat data, providing insights into conversation trends, most active participants, and sentiment analysis.",
        aos: "flip-left",
        link: "https://github.com/tejas-130704/whatsapp-analyser",
        icon: <SiGithub size={38} />,
    },
    {
        title: "ReClaim-Fitness",
        description: "Reclaim Fitness is a dynamic platform designed to help users reclaim their fitness journey. It offers personalized workout plans, nutrition guides, and tools for tracking fitness progress.",
        aos: "flip-up",
        link: "https://github.com/tejas-130704/Fitness",
        icon: <SiGithub size={38} />,
    },
];

const Projects = () => {
    return (
        <div className='mt-36 relative px-20' id='projects'>
            <div data-aos="zoom-in" className='w-full text-center'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    Projects
                </div>
                <div className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2'>
                    Projects
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-aos={project.aos}
                        className='relative p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                        
                        {project.link && (
                            <a
                                href={project.link}
                                className="absolute text-black hover:shadow-xl p-3 rounded-full -top-2 right-0"
                                target='_blank' rel="noreferrer">
                                {project.icon}
                            </a>
                        )}

                        <h1 className='text-3xl text-center'>{project.title}</h1>
                        <p className='text-sm text-gray-700 text-center font-thin'>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
