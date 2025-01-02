import React from 'react'
import { useState } from 'react'
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const logo=["< ","/>"];
    return (
        <>
            <nav className="w-full flex justify-between items-center pt-3 pb-4 bg-white shadow-md z-50 px-20">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#3795BD] font-mono" >
                    {logo[0]}
                    <span className='cedarville-cursive-regular text-4xl items-center justify-center'> tej </span>
                    {logo[1]}
                    </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        className="text-gray-600 hover:text-[#3795BD] focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex lg:space-x-6 lg:items-center text-gray-600 font-medium absolute
                        left-0 lg:static top-16 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"
                        }`}
                >
                    <li className="p-2 lg:p-0">
                        <a href="#home" className="hover:text-[#3795BD] block lg:inline-block">Home</a>
                    </li>
                    <li className="p-2 lg:p-0">
                        <a href="#skills" className="hover:text-[#3795BD] block lg:inline-block">Skills</a>
                    </li>
                    <li className="p-2 lg:p-0">
                        <a href="#projects" className="hover:text-[#3795BD] block lg:inline-block">Projects</a>
                    </li>
                    <li className="p-2 lg:p-0">
                        <a href="#education" className="hover:text-[#3795BD] block lg:inline-block">Eduction</a>
                    </li>
                    <li className="p-2 lg:p-0">
                        <a href="#aboutMe" className="hover:text-[#3795BD] block lg:inline-block">About Me</a>
                    </li>
                </ul>

                {/* CTA Button */}
                <button className="hidden lg:block bg-[#3795BD] text-white py-2 px-4 rounded-lg hover:bg-[#3795BD]">
                    
                    LET'S TALK
                </button>
            </nav>
        </>
    )
}
