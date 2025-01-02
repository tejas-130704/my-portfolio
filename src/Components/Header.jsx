import React from 'react'
import { useState } from 'react';
import myImg from '../assets/images/TJ1.png';
import { useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookMessenger, FaBriefcase, FaCode, FaGithub } from 'react-icons/fa';
import { BsPersonWorkspace } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";

export const Header = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isPaused, setIsPaused] = useState(false); // Pause state
  const [selText, setselText] = useState(0)
  const fullText = ["I'm a Web Developer", "I'm a Data Scientist", "I'm a Sketch Artist"];



  useEffect(() => {
    if (isPaused) return; // Skip the interval if paused

    const interval = setInterval(() => {
      if (index < fullText[selText].length) {
        setText((prev) => prev + fullText[selText][index]);
        setIndex((prev) => prev + 1);
      } else {
        setIsPaused(true); // Pause when the full text is typed
        if (selText === 0) {
          setselText(1)
        } else if (selText === 1) {
          setselText(2)
        }
        else {
          setselText(0)
        }

        setTimeout(() => {
          setText(""); // Reset the text
          setIndex(0); // Reset the index
          setIsPaused(false); // Resume typing
        }, 2500); // Pause duration (2 seconds)
      }
    }, 200); // Typing speed (ms per character)

    return () => clearInterval(interval); // Cleanup interval
  }, [index, isPaused]); // Dependencies include 'index' and 'isPaused'


  return (
    <>
      <header className="flex flex-col-reverse lg:flex-row items-end justify-between md:px-8  mt-10 md:mt-14 " id="home">
        <div className="text-center md:text-left lg:w-auto flex flex-col md:mx-0 mx-auto ">
          <p className="text-sm uppercase font-semibold text-gray-500 mb-2 animate-in fade-in-0 duration-1000">Hello, my name is</p>
          <h1 className="text-5xl md:text-8xl font-bold text-[#3A1078] mb-2 animate-in slide-in-from-top 
          text-transparent bg-gradient-to-br from-[rgba(78,49,170,1)] to-[rgba(55,149,189,1)] bg-clip-text hover:from-[rgba(55,149,189,1)] hover:to-[rgba(78,49,170,1)] transition-all duration-500
          ">Tejas<br />Jadhav</h1>
          <p
            className="mt-4 text-3xl font-medium text-[#4E31AA] h-10 delay-75"
          >{text}</p>
          <a className="border-2 border-[#3795BD] text-[#3795BD] hover:text-white py-2 rounded-lg hover:bg-[#3795BD] mt-6 animate-in slide-in-from-bottom duration-300 " href='https://drive.google.com/file/d/1frPL3gIf_2hy4_sjZXuW8r0bQBu3c9Kz/view?usp=sharing' target='_blank' rel='noreferrer'>
            <button className='w-full h-full text-center'>See My Resume</button>
          </a>
          <div className="flex justify-evenly mt-10 space-x-4  relative top-6 ">
            <a href="https://github.com/tejas-130704/" target='_blank' className="bg-gray-200 p-3 rounded-full hover:bg-gray-900 hover:text-white  shadow-xl animate-in slide-in-from-left duration-1000">
              <FaGithub size={30} />
            </a>
            <a href="https://x.com/TejasJadha86720" target='_blank' className="bg-gray-200 p-3 rounded-full hover:bg-gray-900 hover:text-white shadow-xl animate-in slide-in-from-left duration-1000">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com/tej13_07/" target='_blank' className="bg-gray-200 p-3 rounded-full hover:bg-gray-900 hover:text-white shadow-xl animate-in slide-in-from-left duration-1000">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/tejas-jadhav-385613256/" target='_blank' className="bg-gray-200 p-3 rounded-full hover:bg-gray-900 hover:text-white shadow-xl animate-in slide-in-from-left duration-1000">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3  lg:h-98 mt-10 z-10 mb-20 lg:mb-0 mx-auto lg:mx-0">
          <div className="w-96 h-96 lg:w-96 lg:h-96 bg-[#3795BD] rounded-t-full">

            <img
              src={myImg} // Replace with the actual image URL
              alt="Tejas Jadhav"
              className="z-10 absolute h-[500px] lg:h-[600px]  top-28 bottom-0 lg:top-12 animate-in fade-in zoom-in duration-1000"
            />
          </div>
        </div>

      </header>

      <div className="z-4 lg:mb-20 w-[80%] border-[1px] border-gray-400"></div>
      <div
        className="w-[80vw] rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(78,49,170)] to-[rgba(55,149,189)] text-white m-10 mt-24 ">
        {/* Transition effect */}
        <div className=" flex justify-evenly items-center w-full lg:flex-row flex-col flex-wrap py-5 ">
          {/* Statistics Section */}
          <div
            data-aos="zoom-in"
            className=" p-8 flex flex-col items-center justify-center space-y-3 ">
            <FaBriefcase size={40} />
            <p className="text-5xl">5+</p>
            <h1 className="font-thin text-gray-200">Projects</h1>
          </div>
          <div
            data-aos="zoom-in"
            className=" p-8 flex flex-col items-center justify-center space-y-3 ">
            <FaCode size={40} />
            <p className="text-5xl">10+</p>
            <h1 className="font-thin text-gray-200">Programming Language</h1>
          </div>
          <div
            data-aos="zoom-in"
            className=" p-8 flex flex-col items-center justify-center space-y-3 ">
            <BsPersonWorkspace size={40} />
            <p className="text-5xl">2+</p>
            <h1 className="font-thin text-gray-200">Experience</h1>
          </div>
          <div
            data-aos="zoom-in"
            className=" p-8 flex flex-col items-center justify-center space-y-3 ">
            <GiRibbonMedal size={40} />
            <p className="text-5xl">3+</p>
            <h1 className="font-thin text-gray-200">Competition Winner</h1>
          </div>
        </div>
      </div>
    </>
  )
}

