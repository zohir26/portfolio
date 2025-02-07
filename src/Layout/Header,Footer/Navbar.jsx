import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-center top-0 left-0  z-50 bg-gradient-to-r from-[#0f172a] to-[#1e293b] bg-opacity-90 shadow-md backdrop-blur-lg ">
      <div className="navbar container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="navbar-start">
          <a className="text-2xl font-bold text-white tracking-wide">
            <Link to='/'>Zohir</Link>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex navbar-center">
          <ul className="flex space-x-6 text-white text-lg font-medium">
            <li className="hover:text-pink-400 transition"><a href="#about">About</a></li>
            <li className="hover:text-pink-400 transition"><a href="#experience">Experience</a></li>
            <li className="hover:text-pink-400 transition"><a href="#education">Education</a></li>
            <li className="hover:text-pink-400 transition"><a href="#skills">Skills</a></li>
            <li className="hover:text-pink-400 transition"><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown relative">
            <button className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul className="dropdown-content absolute right-0 mt-3 w-48 bg-[#1e293b] text-white rounded-md shadow-lg overflow-hidden">
              <li className="hover:bg-pink-500 px-4 py-2 transition">
                <Link to="#about">About</Link>
              </li>
              <li className="hover:bg-pink-500 px-4 py-2 transition">
                <Link to="#experience">Experience</Link>
              </li>
              <li className="hover:bg-pink-500 px-4 py-2 transition">
                <Link to="#education">Education</Link>
              </li>
              <li className="hover:bg-pink-500 px-4 py-2 transition">
                <Link to="#skills">Skills</Link>
              </li>
              <li className="hover:bg-pink-500 px-4 py-2 transition">
                <Link to="#projects">Projects</Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Resume Button */}
        <div className="navbar-end">
          <Link target='_blank' to="https://drive.google.com/file/d/1V9MVAYHZ0iBY8g5kf-2H1LKRmZQ3c1Qb/view?usp=sharing" target="_blank" className="btn bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition">
            Resume
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
