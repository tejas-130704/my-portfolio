import React from "react";
import Marquee from "react-fast-marquee";
import {
    SiPython,
    SiJavascript,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiPhp,
    SiDjango,
    SiFastapi,
    SiFlask,
    SiTensorflow,
    SiPytorch,
    SiStreamlit,
    SiTailwindcss,
    SiHuggingface,
    SiLangchain,
} from "react-icons/si";

function ProgrammingLogo() {
    const technologies = [
        { icon: <SiPython />, color: "text-blue-600", name: "Python" },
        { icon: <SiJavascript />, color: "text-yellow-500", name: "JavaScript" },
        // { icon: <SiJava />, color: "text-red-700", name: "Java" },
        { icon: <SiCplusplus />, color: "text-blue-700", name: "C++" },
        { icon: <SiHtml5 />, color: "text-orange-600", name: "HTML" },
        { icon: <SiCss3 />, color: "text-blue-500", name: "CSS" },
        { icon: <SiMysql />, color: "text-teal-700", name: "SQL" },
        { icon: <SiPhp />, color: "text-purple-700", name: "PHP" },
        { icon: <SiDjango />, color: "text-green-700", name: "Django" },
        { icon: <SiFlask />, color: "text-gray-500", name: "Flask" },
        { icon: <SiFastapi />, color: "text-teal-500", name: "FastAPI" },
        { icon: <SiTensorflow />, color: "text-orange-500", name: "TensorFlow" },
        { icon: <SiPytorch />, color: "text-red-500", name: "PyTorch" },
        { icon: <SiStreamlit />, color: "text-red-700", name: "Streamlit" },
        { icon: <SiHuggingface />, color: "text-yellow-400", name: "Hugging Face" },
        { icon: <SiLangchain />, color: "text-blue-400", name: "LangChain" },
        { icon: <SiTailwindcss />, color: "text-blue-500", name: "Tailwind CSS" },
    ];

    return (
        <div className="mt-20">
            <h1
            data-aos="zoom-in"
             className='text-center text-3xl'>Languages I Worked in</h1>
            <div 
            data-aos="flip-up"
            className="w-[80vw] rounded-lg bg-gradient-to-br from-[#4d31aa1b] to-[#3795bd1d] py-4 mt-10">
                <Marquee gradient={false} speed={50}>
                    <div className="flex items-center space-x-8 px-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className={`flex-shrink-0 text-6xl ${tech.color}`}>
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default ProgrammingLogo;
