"use client";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a1a] border-t border-gray-800 py-8 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
  {/* Github */}
  <Link 
    href="https://github.com/akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#333] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaGithub />
  </Link>

  {/* Facebook */}
  <Link 
    href="https://facebook.com/akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#4267B2] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaFacebookF />
  </Link>

  {/* Linkedin */}
  <Link 
    href="https://linkedin.com/in/akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#0077b5] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaLinkedinIn />
  </Link>

  {/* Instagram */}
  <Link 
    href="https://instagram.com/akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#C13584] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaInstagram />
  </Link>

  {/* Twitter */}
  <Link 
    href="https://twitter.com/akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#1DA1F2] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaTwitter />
  </Link>

  {/* Whatsapp */}
  <Link 
    href="https://wa.me/8801627205530" 
    target="_blank" 
    className="p-2 bg-[#25D366] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaWhatsapp />
  </Link>

  {/* Youtube */}
  <Link 
    href="https://youtube.com/@akbiplobx" 
    target="_blank" 
    className="p-2 bg-[#FF0000] text-white rounded-md hover:scale-110 transition-transform"
  >
    <FaYoutube />
  </Link>
</div>

        {/* Copyright Text */}
        <div className="text-gray-400 text-sm font-medium tracking-wide">
          Copyright © {new Date().getFullYear()} | 
          <span className="text-[#FFA600] font-bold ml-1">A K Biplob</span> 
          <span className="ml-1">(Google Map)</span>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="bg-[#FFA600] text-white p-3 rounded-md hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
        >
          <FaChevronUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;