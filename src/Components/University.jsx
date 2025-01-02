import React, { useState } from 'react';
import mps from '../assets/images/mps.jpeg';
import diems from '../assets/images/diems.webp';
import nath from '../assets/images/nath1.png';
export const University = () => {
    const [firstCard, setFirstCard] = useState(false);
    const [SecCard, setSecCard] = useState(false)
    const [ThirdCard, setThirdCard] = useState(false)

    return (
        <div>
            {/* <div className="w-full flex gap-10 mt-14 flex-col lg:flex-row justify-evenly items-center duration-1000"> */}

            <h1
                data-aos="flip-right"
                className='text-center text-3xl mt-7 '>My Qualification</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 shrink-0 '>
                {/* First Circular Component */}
                <div
                    data-aos="flip-left"
                    className="relative group cursor-pointer flex  items-center justify-center h-80 ">
                    {/* Circular Image */}
                    <div>
                        <div
                            className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300"
                            onClick={() => {
                                setFirstCard(!firstCard);
                                setSecCard(false);
                                setThirdCard(false);
                            }}
                        >

                            <img
                                src={mps}
                                alt="Image 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className='text-xl text-black text-center'>SSC</p>
                    </div>
                    {/* Information Panel */}
                    <div

                        className={`bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70]  w-80 p-4 text-black flex items-center justify-center rounded-lg ${firstCard ? 'block' : 'hidden'
                            }`}
                    >
                        <div

                            className='font-sans '>
                            <div className="text-sm text-center">
                                <h1 className='text-3xl font-bold'>Maharashtra Public School</h1>
                                <p className='font-thin'>Daulatabad 'T' Point, Nashik Road, Chhatrapati Sambhajinagar</p>
                                <p>Pass-out 2020</p>
                                <p>10th Percentage: 88%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Circular Component */}
                <div
                    data-aos="flip-up"
                    className="relative group cursor-pointer flex  items-center justify-center h-80 ">
                    {/* Circular Image */}
                    <div>
                    <div
                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300"
                        onClick={() => {
                            setSecCard(!SecCard);
                            setFirstCard(false);
                            setThirdCard(false);
                        }}
                    >
                        <img
                            src={nath}
                            alt="Image 1"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <p className='text-xl text-black text-center'>HSC</p>
                    </div>

                    {/* Information Panel */}
                    <div
                        className={`bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70]  w-80 p-4 text-black flex items-center justify-center rounded-lg ${SecCard ? 'block' : 'hidden'
                            }`}
                    >
                        <div className='font-sans '>
                            <div className="text-sm text-center">
                                <h1 className='text-3xl font-bold'>Nath Madhyamik Vidyalaya</h1>
                                <p className='font-thin'>Galelborgaon, Chhatrapati Sambhaji Nagar</p>
                                <p>Pass-out 2022</p>
                                <p>12th Percentage: 82.64%</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* third Circular Component */}
                <div
                    data-aos="flip-right"
                    className="relative group cursor-pointer flex  items-center justify-center h-80 ">
                    {/* Circular Image */}
                    <div>
                    <div
                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300"
                        onClick={() => {
                            setThirdCard(!ThirdCard)
                            setSecCard(false);
                            setFirstCard(false);
                        }}
                    >
                        <img
                            src={diems}
                            alt="Image 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className='text-xl text-black text-center'>B.Tech</p>
                    </div>

                    {/* Information Panel */}
                    <div
                        className={`bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70]  w-80 p-4 text-black flex items-center justify-center rounded-lg ${ThirdCard ? 'block' : 'hidden'
                            }`}
                    >
                        <div className='font-sans '>
                            <div className="text-sm text-center">
                                <h1 className='text-3xl font-bold'>Deogiri Institute of Engineering and Management Studies</h1>
                                <p className='font-thin'>Deogiri Campus, Railway Station Road, Chhatrapati Sambhaji Nagar</p>
                                <p>Currently in 3rd Year</p>
                                <p>CGPA: 7.6+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
