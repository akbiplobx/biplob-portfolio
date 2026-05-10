"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaInstagram, FaBehance, FaPinterest, FaMediumM } from "react-icons/fa";

const Hero = () => {
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
    { icon: <FaWhatsapp />, link: "https://wa.me/8801627205530", color: "#25D366" },
  ];

  return (
    <section className="bg-[#0a0a1a] text-white px-5 md:px-10 lg:px-20 min-h-[90vh] flex items-center">
      <div className="max-w-8xl py-10 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* মাঝখানের ছবির সেকশন - মোবাইলে উপরে থাকবে (order-1) */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div >
            <Image 
              src="/profile-ak.png" 
              alt="A K Biplob Profile"
              width={400} 
              height={500} 
              className="object-cover"
              priority 
            />
          </div>
        </div>

        {/* বাম দিকের কন্টেন্ট সেকশন - মোবাইলে নিচে থাকবে (order-2) */}
        <div className="md:col-span-6 space-y-5 text-center md:text-left order-2 md:order-1">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
            HELLO, MY NAME IS
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            A K Biplob
          </h1>
          <p className="text-xl font-bold text-[#FFA600]">
            I am a Web Developer
          </p>
          <p className="text-gray-300 max-w-xl leading-relaxed text-[15px] mx-auto md:mx-0">
            Hello There! My Name is A K Biplob. I am a WordPress Web Developer With 5+ Years of Experience in Developing and Maintaining Websites. I Specialize in Creating Custom Websites Using HTML, CSS, JavaScript And Other Web Technologies.
          </p>
          
          <div className="pt-5">
            <Link 
              href="#contact" 
              className="px-10 py-3.5 text-sm font-bold uppercase text-black bg-[#FFA600] rounded-full hover:bg-[#e69500] transition-all shadow-lg shadow-[#FFA600]/10 active:scale-95 inline-block"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* ডান দিকের সোশ্যাল আইকন সেকশন - মোবাইলে সবার নিচে (order-3) */}
        <div className="md:col-span-1 flex flex-wrap md:flex-col items-center justify-center gap-3 order-3">
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-lg text-white rounded-md transition-all hover:scale-110 hover:-translate-y-1 shadow-md"
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