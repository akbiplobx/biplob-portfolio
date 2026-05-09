"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaInstagram, FaBehance, FaPinterest, FaMediumM } from "react-icons/fa";

const Hero = () => {
  // সোশ্যাল মিডিয়া লিঙ্কের একটি অ্যারে
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/akbiplobx", color: "#333" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/akbiplobx", color: "#0077b5" },
    { icon: <FaFacebook />, link: "https://facebook.com/akbiplobx", color: "#4267B2" },
    { icon: <FaTwitter />, link: "https://twitter.com/akbiplobx", color: "#1DA1F2" },
    { icon: <FaYoutube />, link: "https://youtube.com/@akbiplobx", color: "#FF0000" },
    { icon: <FaInstagram />, link: "https://instagram.com/akbiplobx", color: "#C13584" },
    { icon: <FaBehance />, link: "https://behance.net/akbiplobx", color: "#1769ff" },
    { icon: <FaPinterest />, link: "https://pinterest.com/akbiplobx", color: "#bd081c" },
    { icon: <FaMediumM />, link: "https://medium.com/@akbiplobx", color: "#00ab6c" },
    { icon: <FaWhatsapp />, link: "https://wa.me/8801XXXXXXXXX", color: "#25D366" }, // আপনার নম্বরটি এখানে বসান
  ];

  return (
    <section className="bg-[#0a0a1a] text-white  px-5 md:px-10 lg:px-20 min-h-[90vh] flex items-center">
      <div className="max-w-8xl py-5 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center just">
        
        {/* বাম দিকের কন্টেন্ট সেকশন (Text and Button) */}
        <div className="md:col-span-6 space-y-5">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-300">
            HELLO, MY NAME IS
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            A K Biplob
          </h1>
          <p className="text-xl font-bold text-green-500">
            I am a Web Developer
          </p>
          <p className="text-gray-300 max-w-xl leading-relaxed text-[15px]">
            Hello There! My Name is A K Biplob. I am a WordPress Web Developer With 5+ Years of Experience in Developing and Maintaining Websites. I Specialize in Creating Custom Websites Using HTML, CSS, JavaScript And Other Web Technologies. I am Also Expert In Graphic Design & Video Editing. I am Passionate About Creating New Things.
          </p>
          
          <div className="pt-5">
            <Link 
              href="#contact" 
              className="px-10 py-3.5 text-sm font-bold uppercase text-white bg-green-700 rounded-full hover:bg-green-600 transition-all shadow-lg shadow-green-900/20 active:scale-95"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* মাঝখানের ছবির সেকশন */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative p-2 bg-green-600 rounded-[30px] shadow-2xl shadow-green-900/10">
            <div className="overflow-hidden rounded-[25px]">
              <Image 
                src="/profile.png" // আপনার ছবি public/profile.png পাথে থাকতে হবে
                alt="A K Biplob Profile"
                width={400} 
                height={500} 
                className="object-cover"
                priority // পেজ লোডের সময় ছবিটিকে গুরুত্ব দেবে
              />
            </div>
          </div>
        </div>

        {/* ডান দিকের সোশ্যাল আইকন সেকশন (Vertical list) */}
        <div className="md:col-span-1 flex md:flex-col items-center justify-center gap-3 md:pt-10">
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.link}
              target="_blank" // নতুন ট্যাবে খুলবে
              rel="noopener noreferrer"
              className="p-3 text-lg text-white rounded-md transition-all hover:scale-110 hover:-translate-y-1"
              style={{ backgroundColor: social.color }}
            >
              {social.icon}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;