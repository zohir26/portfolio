import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-300">© 2025 <span className="text-pink-500">Md Zohir Hossain</span>. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="https://www.facebook.com/profile.php?id=100004992679161" target="_blank">
            <FaFacebook className="text-2xl text-blue-500 hover:scale-110 transition-transform" />
          </Link>
          <Link to="https://x.com/500JahirRaihan" target="_blank">
            <FaXTwitter className="text-2xl text-gray-400 hover:scale-110 transition-transform" />
          </Link>
          <Link to="https://github.com/zohir26" target="_blank">
            <FaGithub className="text-2xl text-gray-300 hover:scale-110 transition-transform" />
          </Link>
          <Link to="https://www.linkedin.com/in/md-zohir-hossain-018b641b2/" target="_blank">
            <FaLinkedin className="text-2xl text-blue-400 hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
