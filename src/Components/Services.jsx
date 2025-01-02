import React, { useEffect } from 'react'
import ProgrammingLogo from './ProgrammingLogo'


const Services = () => {

    return (
        <>
            <div className='mt-36 relative px-20' id='skills'>
                <div
                    data-aos="zoom-in"
                    className='w-full text-center'>
                    <div
                        className='text-7xl lg:text-9xl'
                        style={{
                            WebkitTextStroke: "0.5px #3795BD",
                            WebkitTextFillColor: "transparent",
                        }}>
                        Skills</div>
                    <div
                        className='absolute text-5xl lg:text-7xl top-4 lg:top-10 left-1/2 transform -translate-x-1/2 '>
                        Skills</div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14'>
                    <div
                        data-aos="fade-right"
                        className=' p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                        <h1 className='text-3xl text-center'>Website Development</h1>
                        <p className='text-sm text-gray-700 text-center font-thin'>Developing a website is a complex process that involves a lot of planning and execution. We have a team of experts who can help you with your website development needs.</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className=' p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                        <h1 className='text-3xl text-center'>Model Training</h1>
                        <p className='text-sm text-gray-700 text-center font-thin'> Leverage machine learning to train predictive models tailored to your business requirements. Our models deliver high accuracy and actionable insights for decision-making.
                        </p>
                    </div>
                    <div
                        data-aos="fade-left"
                        className=' p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                        <h1 className='text-3xl text-center'>Data Analysis</h1>
                        <p className='text-sm text-gray-700 text-center font-thin'>Extract meaningful insights from your data using advanced analytics. Our solutions help identify trends, optimize strategies, and drive business growth.
                        </p>
                    </div>
                    <div
                        data-aos="fade-right"
                        className=' p-6 rounded-lg hover:shadow-xl flex flex-col hover:bg-gradient-to-br from-[#4d31aa5b] to-[#3795bd70] items-center space-y-4 mx-auto'>
                        <h1 className='text-3xl text-center'>Software Devlopment</h1>
                        <p className='text-sm text-gray-700 text-center font-thin'> Develop custom software solutions that streamline operations and enhance productivity. From design to deployment, we deliver robust and scalable applications.
                        </p>
                    </div>

                </div>

            </div>
            <ProgrammingLogo />
        </>
    )
}

export default Services