"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ডার্ক ব্যাকগ্রাউন্ড (ইমেজের মতো)
    <div className="bg-[#0a0a1a] px-5 sticky top-0 z-50 border-b border-gray-800">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo - Public ফোল্ডার থেকে image নিবে */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" // আপনার লোগোটি public/logo.png নামে সেভ করুন
            alt="Logo" 
            width={45} 
            height={45} 
            className="rounded-full shadow-lg shadow-green-500/20"
          />
        </Link>

        {/* Desktop Links - ইমেজের মতো ফন্ট এবং স্টাইল */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-black uppercase tracking-wider text-white">
          <li>
            <Link href="/" className="text-green-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/portfolioall" className="hover:text-green-500 transition-colors">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-green-500 transition-colors">Resume</Link>
          </li>
          <li>
            <Link href="/ContactPage" className="hover:text-green-500 transition-colors">Contact</Link>
          </li>
          <li>
            <Link href="https://akbiplob.com/wp-content/uploads/2025/11/A-K-Biplob-CV.pdf" target="_blank" className="hover:text-green-500 transition-colors">CV</Link>
          </li>
        </ul>

        
        <div className="hidden md:flex items-center">
          <Link 
            href="https://wa.me/8801627205530" 
            target="_blank"
            className="px-6 py-2 text-sm font-bold text-white bg-green-700 rounded rounded-r-sm hover:bg-green-600 transition-all flex items-center gap-2"
          >
            Whatsapp
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-[65px] p-6 bg-[#0a0a1a] border-b border-gray-800 transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}>
        <ul className="flex flex-col gap-5 text-sm font-bold uppercase text-white">
          <li><Link onClick={() => setIsOpen(false)} href="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="#about">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="#portfolio">Portfolio</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="#contact">Contact</Link></li>
          <Link 
            href="https://wa.me/8801627205530" 
            target="_blank"
            className="w-fit px-6 py-2 bg-green-700 text-white rounded-full text-center"
          >
            Whatsapp
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;