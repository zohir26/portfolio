import React from "react";
import Slider from "react-slick"; // Importing react-slick for the slider
import "slick-carousel/slick/slick.css"; // Importing slick-carousel styles
import "slick-carousel/slick/slick-theme.css";

// Import Skill Icons
import html from "../assets/icons8-html-96.png";
import css from "../assets/icons8-css-40.png";
import tailwindcss from "../assets/icons8-tailwind-css-96.png";
import JavaScript from "../assets/icons8-javascript-96.png";
import react from "../assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import firebase from "../assets/icons8-firebase-96.png";
import node from "../assets/icons8-node-js-96.png";
import express from "../assets/icons8-express-js-96.png";
import mongodb from "../assets/icons8-mongo-db-96.png";

const Skills = () => {
  // Slider settings
  const settings = {
    infinite: true,        // Infinite loop scrolling
    speed: 1000,          // Slide transition speed
    slidesToShow: 5,      // Number of slides visible at a time
    slidesToScroll: 1,    // Number of slides scrolled per transition
    autoplay: true,       // Enable auto-scrolling
    autoplaySpeed: 2000,  // Speed of autoplay (2 seconds)
    pauseOnHover: false,  // Keep scrolling even when hovered
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
     <h2 className="text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-pink-500 to-purple-600 
               text-center mb-10 drop-shadow-lg 
               animate-fadeIn">
  🚀 My <span className="text-white">Skills</span> 🚀
</h2>

      {/* Skill Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Mapping through skill icons */}
          {[html, css, tailwindcss, JavaScript, react, firebase, node, express, mongodb].map(
            (skill, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={skill}
                  alt="Skill"
                  className="w-20 h-20 object-contain transition-transform transform hover:scale-110"
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
