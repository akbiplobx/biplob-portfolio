"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // মেইন র‍্যাপার যা পুরো স্ক্রিন জুড়ে বর্ডার এবং ব্যাকগ্রাউন্ড রাখবে
    <div className="bg-[#0a0a1a] sticky top-0 z-[100] border-b border-gray-900 w-full">
      
      {/* গুরুত্বপূর্ণ: max-w-7xl এবং px ভ্যালুগুলো আপনার Hero সেকশন বা layout.js এর সাথে হুবহু মিলতে হবে।
      */}
      <nav className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex justify-between items-center py-4">
        
        {/* Logo - হিরো সেকশনের বাম পাশের টেক্সট বরাবর থাকবে */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo2.png" 
            alt="Logo" 
            width={95} 
            height={95} 
           
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-black  tracking-wider text-white">
          <li><Link href="/" className="text-[#FFA600] transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#FFA600] transition-colors">About</Link></li>
          <li><Link href="/portfolioall" className="hover:text-[#FFA600] transition-colors">Portfolio</Link></li>
          <li><Link href="/resume" className="hover:text-[#FFA600] transition-colors">Resume</Link></li>
          <li><Link href="/ContactPage" className="hover:text-[#FFA600] transition-colors">Contact</Link></li>
        </ul>

        {/* Action Button - হিরো সেকশনের ডান পাশের সোশ্যাল আইকন বরাবর থাকবে */}
        <div className="hidden md:flex items-center">
          <Link 
            href="https://wa.me/8801627205530" 
            target="_blank"
            className="px-8 py-2.5 text-sm font-black text-black bg-[#FFA600] rounded-sm hover:bg-[#e69500] transition-all uppercase tracking-tighter"
          >
            Whatsapp
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#FFA600] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-4xl leading-none">&times;</span>
          ) : (
            <div className="space-y-1.5">
              <span className="block w-7 h-0.5 bg-[#FFA600]"></span>
              <span className="block w-7 h-0.5 bg-[#FFA600]"></span>
              <span className="block w-7 h-0.5 bg-[#FFA600]"></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-[70px] p-8 bg-[#0a0a1a] border-b border-gray-900 transition-all duration-300 md:hidden z-[110]
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
      `}>
        <ul className="flex flex-col gap-6 text-sm font-black uppercase text-white px-5">
          <li><Link onClick={() => setIsOpen(false)} href="/" className="hover:text-[#FFA600]">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/about" className="hover:text-[#FFA600]">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/portfolioall" className="hover:text-[#FFA600]">Portfolio</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/ContactPage" className="hover:text-[#FFA600]">Contact</Link></li>
          <li>
             <Link 
              href="https://wa.me/8801627205530" 
              target="_blank"
              className="inline-block w-full py-3 bg-[#FFA600] text-black font-black text-center rounded-sm uppercase mt-4"
            >
              Whatsapp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;