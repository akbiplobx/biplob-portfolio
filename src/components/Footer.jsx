"use client";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a1a] border-t border-gray-900 py-10">
      {/* গুরুত্বপূর্ণ: max-w-7xl এবং প্যাডিং হুবহু Navbar ও Hero-এর মতো রাখা হয়েছে 
         যাতে আইকন এবং টেক্সটগুলো দুই পাশের গ্যাপের সাথে মিলে থাকে।
      */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Social Icons - এটি বাম পাশের লোগোর লাইনে এলাইন হবে */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          {/* Github */}
          <Link href="https://github.com/akbiplobx" target="_blank" className="p-2.5 bg-[#333] text-white rounded-lg hover:scale-110 transition-transform">
            <FaGithub />
          </Link>

          {/* Facebook */}
          <Link href="https://facebook.com/akbiplobx" target="_blank" className="p-2.5 bg-[#4267B2] text-white rounded-lg hover:scale-110 transition-transform">
            <FaFacebookF />
          </Link>

          {/* Linkedin */}
          <Link href="https://linkedin.com/in/akbiplobx" target="_blank" className="p-2.5 bg-[#0077b5] text-white rounded-lg hover:scale-110 transition-transform">
            <FaLinkedinIn />
          </Link>

          {/* Instagram */}
          <Link href="https://instagram.com/akbiplobx" target="_blank" className="p-2.5 bg-[#C13584] text-white rounded-lg hover:scale-110 transition-transform">
            <FaInstagram />
          </Link>

          {/* Twitter */}
          <Link href="https://twitter.com/akbiplobx" target="_blank" className="p-2.5 bg-[#1DA1F2] text-white rounded-lg hover:scale-110 transition-transform">
            <FaTwitter />
          </Link>

          {/* Whatsapp */}
          <Link href="https://wa.me/8801627205530" target="_blank" className="p-2.5 bg-[#25D366] text-white rounded-lg hover:scale-110 transition-transform">
            <FaWhatsapp />
          </Link>

          {/* Youtube */}
          <Link href="https://youtube.com/@akbiplobx" target="_blank" className="p-2.5 bg-[#FF0000] text-white rounded-lg hover:scale-110 transition-transform">
            <FaYoutube />
          </Link>
        </div>

        {/* Copyright Text - এটি মাঝখানে থাকবে */}
        <div className="text-gray-400 text-xs md:text-sm font-medium tracking-wide text-center">
          Copyright © {new Date().getFullYear()} | 
          <span className="text-[#FFA600] font-black ml-1 uppercase">A K Biplob</span> 
          <span className="ml-1 opacity-70">(Google Map)</span>
        </div>

        {/* Scroll to Top Button - এটি ডান পাশের হোয়াটসঅ্যাপ বাটনের লাইনে এলাইন হবে */}
        <button 
          onClick={scrollToTop}
          className="bg-[#FFA600] text-black p-3.5 rounded-lg hover:bg-[#e69500] transition-all shadow-xl shadow-[#FFA600]/10 flex items-center justify-center"
        >
          <FaChevronUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;