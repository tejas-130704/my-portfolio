import React from 'react'
import myImg from '../assets/images/myimage(1).jpg';

const AboutMe = () => {

    return (
        <div className='mt-36 relative md:px-20 mb-16 mx-5 lg:mx-20' id='aboutMe'>
            <div
                data-aos="zoom-in"
                className='w-full text-center mb-10'>
                <div
                    className='text-7xl lg:text-9xl'
                    style={{
                        WebkitTextStroke: "0.5px #3795BD",
                        WebkitTextFillColor: "transparent",
                    }}>
                    About Me</div>
                <div
                    className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                    About Me</div>
            </div>
            <div
            data-aos="fade-right"
             className="flex flex-col md:flex-row items-center justify-center  space-y-8 md:space-y-0 md:space-x-16 mb-0 ">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left rounded-lg  p-10 bg-gradient-to-br to-[#0009CA] from-[#3795bd7a]  shadow-[#0015d39e] shadow-2xl shadow-offset-x-2 shadow-offset-y-4 md:mx-0 mx-4"> 
                    <h2 className="text-4xl font-bold mb-4">So, who am I?</h2>
                    <p className="text-lg text-gray-900 mb-6 font-sans text-justify"> 
                    I am a passionate Computer Science Engineer with a strong foundation in programming, software development, and data analysis. My expertise lies in designing innovative solutions, solving complex problems, and leveraging technology to drive efficiency and innovation.Beyond technology, I love making the best from waste, showcasing my creativity as a sketch artist. I'm always eager to learn, collaborate, and explore new technologies to expand my horizons and make a meaningful difference in the world of computing.
                    </p>
                    <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
                        Contact me
                    </button>
                </div>

                {/* Image Section */}
                <div 
                data-aos="fade-left"
                className="md:w-1/2 lg:block hidden">
                    <img
                        src={myImg} // Replace with your image URL
                        alt="About Me"
                        className='object-cover'
                    />
                </div>
            </div>
            <div className=' w-[80vw] border-[1px] border-gray-300 mx-auto shadow-2xl shadow-stone-700'></div>
        </div>
    );
}

export default AboutMe