import React from 'react'
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

import dog from '../assets/images/dog.jpg'
import bappa from '../assets/images/bappa.jpg'
import baby from '../assets/images/baby.jpg'
import jethalal from '../assets/images/jethalal.jpg'
import veer from '../assets/images/veer2.jpg'
import bgwall from '../assets/images/wall2.avif'
import shivaji from '../assets/images/shivaji.jpg'

const photos = [
    { name: 'Dog', src: dog, rotate: 'transform rotate-[5deg] origin-top' },
    { name: 'Bappa', src: bappa, rotate: 'transform rotate-[0deg] origin-top' },
    { name: 'Cute Baby', src: baby, rotate: 'transform rotate-[2deg] origin-top' },
    { name: 'TMKOC Jethalal', src: jethalal, rotate: 'transform rotate-[0deg] origin-top' },
    { name: 'Veer Shawarkar', src: veer, rotate: 'transform -rotate-[4deg] origin-top' },
    // { name: 'Shivaji', src:  shivaji  },
];


const MyArt = () => {
    return (
        <div>
            <Toaster />
            <div
                data-aos="zoom-in"
                className='w-full text-center my-7'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    Heartist</div>
                <div
                    className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                    He<span className='text-red-600'>art</span>ist</div>

            </div>
            <h1
                data-aos="zoom-in"
                className='text-center text-3xl my-5'>My Best Art Work</h1>

            <div
                className="relative w-[80vw] md:w-[60vw] mx-auto flex flex-wrap justify-evenly shrink-0 gap-4 p-8 bg-gray-100"
                style={{ backgroundImage: `url(${bgwall})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <FaHeart size={40}
                         className='absolute top-2 right-2 p-2 bg-transparent hover:bg-white
                        text-red-600  bg-opacity-5 border-2 border-gray-200
                        rounded-full shadow-xl  hover:text-red-600 cursor-pointer' 
                     
                        onClick={()=>{
                            toast('Thank You!', {
                                icon: '👍❤️',
                              });
                        }}/>
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative p-4 bg-gray-100 shadow-xl shadow-gray-500 rounded-lg border border-gray-200 flex flex-col items-center my-4 ${photo.rotate}`}
                    >
                        <div className='absolute w-[15px] h-[15px] rounded-full bg-gray-100 shadow-inner shadow-black'></div>


                        
                        <img
                            src={photo.src}
                            alt={photo.name}
                            className="w-full h-40 object-contain rounded-md"
                        />
                        <p className="mt-2 text-gray-700 text-sm cedarville-cursive-regular">{photo.name}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyArt