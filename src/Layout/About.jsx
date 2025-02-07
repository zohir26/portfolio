import React from "react";
import code from "../assets/carbon.png";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6 lg:mt-0 sm:mt-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Section - Code Snippet Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={code}
            alt="Code Snippet"
            className="w-[300px] sm:w-[450px] rounded-lg border-4 border-pink-500 shadow-lg transform transition-transform hover:scale-105"
          />
        </div>

        {/* Right Section - About Me Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4 sm:mb-6">Who Am I?</h2>

          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-xl font-semibold text-gray-300">About Me</p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed border-l-4 border-pink-500 pl-4">
              Experienced <strong>MERN Stack Developer</strong> proficient in <strong>JavaScript, React, Node.js, MongoDB, and Next.js</strong>. 
              Passionate about building <strong>scalable</strong> and <strong>user-centric</strong> web applications with a <strong>strong focus on clean code</strong> and <strong>innovative solutions</strong>. 
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed border-l-4 border-pink-500 pl-4">
              Known for <strong>punctuality, discipline</strong>, and a <strong>relentless drive</strong> to deliver <strong>high-quality work</strong>.  
              Enthusiastic about <strong>problem-solving, AI, and research</strong>, always seeking to push boundaries.
            </p>

            {/* Call to Action */}
            <button className="px-4 sm:px-6 py-2 sm:py-3 mt-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-500">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
