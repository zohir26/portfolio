// import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// import profile from '../../assets/banner img.png';


// const Hero = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white mt-16  py-10 z-10 relative">
//   <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center px-6">


//         {/* Profile Image */}
//         <img
//           src={profile}
//           alt="Profile"
//           className="w-64 h-64 rounded-full border-4 border-pink-500 shadow-lg transition-transform transform hover:scale-105"
//         />

//         {/* Text Section */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl font-bold leading-snug">
//             Hello 👋 <br /> I'm <span className="text-pink-500">Zohir,</span> <br /> a Professional Web Developer
//           </h1>
//           <p className="py-6 text-lg text-gray-300">
//             Experienced MERN Stack Developer skilled in <br /> JavaScript, React, Node.js, MongoDB, and Next.js.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-6 justify-center lg:justify-start py-4">
//             <Link to="https://www.facebook.com/profile.php?id=100004992679161" target="_blank">
//               <FaFacebook className="text-3xl text-blue-500 hover:scale-110 transition-transform" />
//             </Link>
//             <Link to="https://x.com/500JahirRaihan" target="_blank">
//               <FaXTwitter className="text-3xl text-gray-400 hover:scale-110 transition-transform" />
//             </Link>
//             <Link to="https://github.com/zohir26" target="_blank">
//               <FaGithub className="text-3xl text-gray-300 hover:scale-110 transition-transform" />
//             </Link>
//             <Link to="https://www.linkedin.com/in/md-zohir-hossain-018b641b2/" target="_blank">
//               <FaLinkedin className="text-3xl text-blue-400 hover:scale-110 transition-transform" />
//             </Link>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
//             <Link>
//             <button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-500">
//               Contact Me
//             </button>
//             </Link>
//             <Link to='https://drive.google.com/file/d/1V9MVAYHZ0iBY8g5kf-2H1LKRmZQ3c1Qb/view?usp=sharing'>
//             <button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transition-all hover:scale-105 hover:from-indigo-600 hover:to-blue-500">
//               Download Resume
//             </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import profile from '../../assets/banner img.png';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white  py-10 z-10 relative">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center px-6">

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-pink-500 shadow-lg transition-transform transform hover:scale-105"
        />

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Hello 👋 <br /> I'm <span className="text-pink-500">Zohir,</span> <br /> a Professional Web Developer
          </h1>
          <p className="py-4 sm:py-6 text-lg sm:text-xl text-gray-300">
            Experienced MERN Stack Developer skilled in <br className="hidden sm:block" /> JavaScript, React, Node.js, MongoDB, and Next.js.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start py-4">
            <Link to="https://www.facebook.com/profile.php?id=100004992679161" target="_blank">
              <FaFacebook className="text-2xl sm:text-3xl text-blue-500 hover:scale-110 transition-transform" />
            </Link>
            <Link to="https://x.com/500JahirRaihan" target="_blank">
              <FaXTwitter className="text-2xl sm:text-3xl text-gray-400 hover:scale-110 transition-transform" />
            </Link>
            <Link to="https://github.com/zohir26" target="_blank">
              <FaGithub className="text-2xl sm:text-3xl text-gray-300 hover:scale-110 transition-transform" />
            </Link>
            <Link to="https://www.linkedin.com/in/md-zohir-hossain-018b641b2/" target="_blank">
              <FaLinkedin className="text-2xl sm:text-3xl text-blue-400 hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <Link to='/contact'>
              <button className="px-4 sm:px-8 py-3 sm:py-6 md:px-10 md:py-4 text-sm sm:text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-500">
                Contact Me
              </button>
            </Link>
            <Link target='_blank' to='https://drive.google.com/file/d/1V9MVAYHZ0iBY8g5kf-2H1LKRmZQ3c1Qb/view?usp=sharing'>
              <button className="px-4 sm:px-8 py-3 sm:py-6 md:px-10 md:py-4 text-sm sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transition-all hover:scale-105 hover:from-indigo-600 hover:to-blue-500 ">
                Download Resume
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
