"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaInstagram, FaBehance, FaPinterest, FaMedium } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/akbiplobx", color: "#333" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/akbiplobx", color: "#0077b5" },
    { icon: <FaFacebook />, link: "https://facebook.com/akbiplobx", color: "#4267B2" },
    { icon: <FaTwitter />, link: "https://twitter.com/akbiplobx", color: "#1DA1F2" },
    { icon: <FaYoutube />, link: "https://youtube.com/@akbiplobx", color: "#FF0000" },
    { icon: <FaInstagram />, link: "https://instagram.com/akbiplobx", color: "#E4405F" },
    { icon: <FaBehance />, link: "https://behance.net/akbiplobx", color: "#0057ff" },
    { icon: <FaPinterest />, link: "https://pinterest.com/akbiplobx", color: "#E60023" },
    { icon: <FaMedium />, link: "https://medium.com/@akbiplobx", color: "#00ab6c" },
];

  return (
    // এখানে আলাদা কোনো max-w বা px দেওয়ার দরকার নেই, কারণ layout.js এটি কন্ট্রোল করবে
    <section className="text-white min-h-[85vh] flex items-center py-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full gap-0">
        
        {/* বাম পাশ: কন্টেন্ট - এটি লোগোর সাথে এলাইন হবে */}
        <div className="md:col-span-6 space-y-6 order-2 md:order-1 text-left">
          <div className="space-y-2">
            <p className="text-[13px] font-black uppercase tracking-[0.2em] text-gray-400">
              HELLO, MY NAME IS
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
              A K Biplob
            </h1>
            <p className="text-2xl font-black text-[#FFA600]">
              I am a Web Developer
            </p>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-[16px] max-w-lg font-medium">
            Hello There! My Name is A K Biplob. I am a WordPress Web Developer 
            With 5+ Years of Experience in Developing and Maintaining Websites. 
            I Specialize in Creating Custom Websites Using HTML, CSS, JavaScript 
            And Other Web Technologies.
          </p>

          <div className="pt-4">
            <Link 
              href="/ContactPage" 
              className="px-12 py-4 mb-4 text-sm font-black text-black bg-[#FFA600] rounded-full hover:bg-[#e69500] transition-all inline-block uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* মাঝখানে: প্রোফাইল ইমেজ */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
          <div className="relative w-[320px] h-[380px] md:w-[450px] md:h-[500px]">
             {/* ইমেজের পেছনে ব্যাকগ্রাউন্ড শেপ (ইমেজের মতো) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFA600]/20 to-transparent rounded-full blur-3xl opacity-30"></div>
            <Image 
              src="/profile-ak.png" 
              alt="A K Biplob" 
              fill 
              className="object-contain relative z-10"
              priority 
            />
          </div>
        </div>

        {/* ডান পাশ: সোশ্যাল আইকন - এটি হোয়াটসঅ্যাপ বাটনের সাথে এলাইন হবে */}
        <div className="md:col-span-1 flex md:flex-col gap-3 justify-center items-end order-3">
          {socialLinks.map((social, i) => (
            <Link 
              key={i} 
              href={social.link} 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-lg text-white text-lg transition-all hover:scale-110 hover:-translate-x-1" 
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